let headers = $request.headers;

if ('User-Agent' in headers) {
    headers['User-Agent'] = 'Infuse-Direct';
}
if ('user-agent' in headers) {
    headers['user-agent'] = 'Infuse-Direct';
}

const authHeaderKey = Object.keys(headers).find(key => key.toLowerCase() === 'x-emby-authorization');

if (authHeaderKey) {
    let authHeader = headers[authHeaderKey];
    authHeader = authHeader.replace(/Client="[^"]*"/, 'Client="Infuse-Direct"');
    authHeader = authHeader.replace(/Version="[^"]*"/, 'Version="7.8"');
    headers[authHeaderKey] = authHeader;
}

$done({headers});
