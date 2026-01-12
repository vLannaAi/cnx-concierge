/**
 * Contact form handling for CNX Concierge
 * Uses AWS Cognito self-signed credentials to send emails via SES
 */

(function() {
    'use strict';

    // Configuration - Update these values for your AWS setup
    const CONFIG = {
        awsRegion: 'ap-southeast-1',
        identityPoolId: 'ap-southeast-1:564975eb-d74c-4800-b147-83ddcf1a7bb3', // Update with your Cognito Identity Pool ID
        fromEmail: 'noreply@lanna.ai', // Update with your verified SES email
        toEmail: 'hello@lanna.ai', // Update with your receiving email
        replyToEmail: 'noreply@lanna.ai', // Update with your reply-to email
        subjectPrefix: '🔔 CNX Concierge Contact Form',
        toastDuration: 4000
    };

    // Toast notification system - shows messages near the submit button
    const Toast = {
        show: function(message, type) {
            type = type || 'info';
            const messageContainer = document.getElementById('form-message');
            if (!messageContainer) {
                console.warn('Form message container not found');
                return;
            }
            
            // Clear any existing message
            messageContainer.textContent = '';
            messageContainer.className = 'form-message';
            
            // Create message element
            const messageEl = document.createElement('div');
            messageEl.className = `form-message-content form-message-${type}`;
            messageEl.textContent = message;
            messageContainer.appendChild(messageEl);
            messageContainer.classList.add('show');
            
            // Remove after duration
            setTimeout(() => {
                messageContainer.classList.remove('show');
                setTimeout(() => {
                    messageContainer.textContent = '';
                    messageContainer.className = 'form-message';
                }, 300);
            }, CONFIG.toastDuration);
        }
    };

    // Progress indicator
    const Progress = {
        show: function() {
            let progress = document.getElementById('form-progress');
            if (!progress) {
                progress = document.createElement('div');
                progress.id = 'form-progress';
                progress.className = 'form-progress';
                document.body.appendChild(progress);
            }
            progress.style.display = 'block';
        },
        hide: function() {
            const progress = document.getElementById('form-progress');
            if (progress) {
                progress.style.display = 'none';
            }
        }
    };

    // Field validation
    function verifyField(field, errorMessage, initialValue) {
        const value = field.value.trim();
        const isEmpty = value.length === 0;
        const isInitial = initialValue !== undefined && value === initialValue;
        
        if (isEmpty || isInitial) {
            Toast.show(errorMessage, 'error');
            field.focus();
            return false;
        }
        
        // Email validation
        if (field.type === 'email' && !/.+\@.+\..+/.test(value)) {
            Toast.show('Please enter a valid email address', 'error');
            field.focus();
            return false;
        }
        
        return true;
    }

    // Get IP address and location information
    async function getIPAndLocation() {
        let location = 'Unknown';
        
        try {
            // Fetch IP and location from ipapi.co (free, no API key required)
            const response = await fetch('https://ipapi.co/json/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                
                const locationParts = [];
                if (data.city && data.city !== 'None') locationParts.push(data.city);
                if (data.region && data.region !== 'None') locationParts.push(data.region);
                if (data.country_name && data.country_name !== 'None') locationParts.push(data.country_name);
                
                if (locationParts.length > 0) {
                    location = locationParts.join(', ');
                }
            }
        } catch (error) {
            console.warn('Failed to fetch location:', error);
        }
        
        return location;
    }

    // Send message function
    async function sendMessage() {
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        const subjectField = document.getElementById('subject');
        const sendButton = document.getElementById('send-message');
        
        // Validate fields
        const isNameValid = verifyField(nameField, 'Please enter your name');
        const isEmailValid = verifyField(emailField, 'Please enter your email address');
        const isMessageValid = verifyField(messageField, 'Please enter your message');
        
        if (!isNameValid || !isEmailValid || !isMessageValid) {
            return;
        }
        
        // Show progress
        Progress.show();
        sendButton.disabled = true;
        
        // Get form values
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();
        const subject = subjectField ? subjectField.value : '';
        
        // Subject label mapping
        const subjectLabels = {
            'general': 'General Inquiry',
            'visa': 'Visa Services',
            'business': 'Business Services',
            'partnership': 'Partnership',
            'press': 'Press'
        };
        
        // Build email subject
        let emailSubject = CONFIG.subjectPrefix;
        if (subject) {
            emailSubject += ' - ' + (subjectLabels[subject] || subject);
        }
        
        // Get sender location
        const senderLocation = await getIPAndLocation();
        
        // Build message body - awsbundle.js will add "Name:" and "Email:" labels
        // We structure: Subject, Location, separator, "Message:" label, then user message
        let messageBody = '';
        
        // Add subject information if provided
        if (subject) {
            messageBody += `Subject: ${subjectLabels[subject] || subject}\n`;
            messageBody += `\n`;
        }
        
        // Add location if available
        if (senderLocation !== 'Unknown') {
            messageBody += `Location: ${senderLocation}\n`;
            messageBody += `\n`;
        }
        
        // Add separator
        messageBody += `---\n`;
        messageBody += `\n`;
        
        // Add "Message:" label and the actual user message
        messageBody += `Message:\n`;
        messageBody += message;
        
        // Send via AWS SES
        // awsbundle.js will format it as:
        // Name: [name]
        // Email: [email]
        // Message: [messageBody with subject, location, and user message]
        if (typeof aws_library === 'undefined') {
            Toast.show('AWS library not loaded. Please refresh the page.', 'error');
            Progress.hide();
            sendButton.disabled = false;
            return;
        }
        
        aws_library.asyncSESSend(
            CONFIG.awsRegion,
            CONFIG.identityPoolId,
            CONFIG.fromEmail,
            CONFIG.toEmail,
            CONFIG.replyToEmail,
            emailSubject,
            name,
            email,
            messageBody
        ).then(function(data) {
            console.log('Message sent successfully:', data.MessageId);
            Toast.show('Message sent successfully! We will respond within one business day.', 'success');
            
            // Reset form
            nameField.value = '';
            emailField.value = '';
            messageField.value = '';
            if (subjectField) {
                subjectField.value = '';
            }
            
            Progress.hide();
            sendButton.disabled = false;
        }).catch(function(err) {
            console.error('Error sending message:', err, err.stack);
            Toast.show('Failed to send message. Please try again or contact us directly.', 'error');
            Progress.hide();
            sendButton.disabled = false;
        });
    }

    // Initialize contact form
    function initContactForm() {
        const form = document.querySelector('#contact form');
        const sendButton = document.getElementById('send-message');
        
        if (!form || !sendButton) {
            console.warn('Contact form or send button not found');
            return;
        }
        
        // Handle form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            sendMessage();
        });
        
        // Also handle button click (for extra safety)
        sendButton.addEventListener('click', function(e) {
            e.preventDefault();
            sendMessage();
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
    } else {
        initContactForm();
    }
})();
