/**
 * CloudFront Function to add Content-Type header for HTML files
 * 
 * This function runs at Viewer Response event and adds
 * Content-Type: text/html; charset=UTF-8 header to any file ending with .html
 */
function handler(event) {
    var response = event.response;
    var request = event.request;
    var uri = request.uri;
    
    // Check if the URI ends with .html
    if (uri.endsWith('.html')) {
        // Ensure headers object exists
        if (!response.headers) {
            response.headers = {};
        }
        
        // Set Content-Type header
        response.headers['content-type'] = {
            value: 'text/html; charset=UTF-8'
        };
    }
    
    return response;
}
