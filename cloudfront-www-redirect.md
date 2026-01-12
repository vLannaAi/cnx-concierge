# CloudFront WWW to Non-WWW Redirect Setup

This guide explains how to redirect `www.cnxconcierge.com` to `cnxconcierge.com` using CloudFront Functions.

## Prerequisites

- CloudFront distribution already configured with both domains
- Both `www.cnxconcierge.com` and `cnxconcierge.com` pointing to the same CloudFront distribution

## Steps

### 1. Create CloudFront Function

1. Go to AWS Console → CloudFront → Functions
2. Click **Create function**
3. Name: `redirect-www-to-non-www`
4. Description: `Redirects www.cnxconcierge.com to cnxconcierge.com`
5. Copy the function code from `cloudfront-function.js` below
6. Click **Create function**

### 2. Publish the Function

1. After creating, click **Publish** tab
2. Click **Publish function**
3. Confirm the publish

### 3. Associate Function with Distribution

1. Go to your CloudFront distribution
2. Click **Behaviors** tab
3. Select the behavior (usually the default `*` behavior)
4. Click **Edit**
5. Scroll down to **Function associations**
6. Under **Viewer request**, select:
   - Function type: `CloudFront Function`
   - Function ARN: Select `redirect-www-to-non-www`
7. Click **Save changes**

### 4. Wait for Deployment

- CloudFront changes take 5-15 minutes to deploy globally
- You can monitor the status in the CloudFront console

## Testing

After deployment, test:
- `https://www.cnxconcierge.com` → Should redirect to `https://cnxconcierge.com`
- `https://cnxconcierge.com` → Should work normally (no redirect)

## Alternative: Using Lambda@Edge

If you need more complex redirect logic or want to preserve query strings and paths more explicitly, you can use Lambda@Edge instead. However, CloudFront Functions are simpler, faster, and more cost-effective for this use case.
