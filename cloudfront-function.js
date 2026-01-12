/**
 * CloudFront Function to redirect www.cnxconcierge.com to cnxconcierge.com
 * 
 * This function runs at the edge and checks the Host header.
 * If the request is for www.cnxconcierge.com, it redirects to cnxconcierge.com
 * while preserving the path and query string.
 */
function handler(event) {
    var request = event.request;
    var host = request.headers.host.value;
    
    // Check if the host is www.cnxconcierge.com
    if (host === 'www.cnxconcierge.com') {
        var uri = request.uri;
        var querystring = request.querystring;
        
        // Build the query string if it exists
        var queryString = '';
        if (Object.keys(querystring).length > 0) {
            var queryParts = [];
            for (var key in querystring) {
                if (querystring[key].multiValue) {
                    // Handle multi-value query parameters
                    for (var i = 0; i < querystring[key].multiValue.length; i++) {
                        queryParts.push(key + '=' + encodeURIComponent(querystring[key].multiValue[i].value));
                    }
                } else {
                    queryParts.push(key + '=' + encodeURIComponent(querystring[key].value));
                }
            }
            queryString = '?' + queryParts.join('&');
        }
        
        // Return 301 permanent redirect
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': {
                    value: 'https://cnxconcierge.com' + uri + queryString
                }
            }
        };
    }
    
    // If not www, continue with normal request
    return request;
}
