let headers = $request.headers;

const userAgentKeys = ['User-Agent', 'user-agent'];
userAgentKeys.forEach(key => {
    if (key in headers) {
        headers[key] = "Infuse-Direct/8.0";
    }
});

const authHeaderKey = Object.keys(headers).find(key => key.toLowerCase() === 'x-emby-authorization');

if (authHeaderKey) {
    let authHeader = headers[authHeaderKey];
    authHeader = authHeader.replace(/Emby/, 'MediaBrowser')
                           .replace(/Client="[^"]*"/, 'Client="Infuse-Direct"')
                           .replace(/Version="[^"]*"/, 'Version="8.0"');

    const tokenHeaderKey = Object.keys(headers).find(key => key.toLowerCase() === 'x-emby-token');
    if (tokenHeaderKey) {
        const token = headers[tokenHeaderKey];
        authHeader = `${authHeader}, Token="${token}"`;
        delete headers[tokenHeaderKey];
    }
    headers[authHeaderKey] = authHeader;
}

$done({ headers });
