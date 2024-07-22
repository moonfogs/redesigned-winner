let headers = $request.headers;

['User-Agent', 'user-agent'].forEach(key => {
    if (key in headers) {
        headers[key] = "Infuse-Direct";
    }
});

const authHeaderKey = Object.keys(headers).find(key => key.toLowerCase() === 'x-emby-authorization');

if (authHeaderKey) {
    let authHeader = headers[authHeaderKey];
    authHeader = authHeader.replace(/Client="[^"]*"/, 'Client="Infuse-Direct');
    authHeader = authHeader.replace(/Version="[^"]*"/, 'Version="7.8"');
    headers[authHeaderKey] = authHeader;
}

$done({headers});
