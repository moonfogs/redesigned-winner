let headers = $request.headers;

if ('User-Agent' in headers) {
    headers['User-Agent'] = 'Infuse-Direct';
}
if ('user-agent' in headers) {
    headers['user-agent'] = 'Infuse-Direct';
}

if (headers['x-emby-authorization']) {
    let authHeader = headers['x-emby-authorization'];
    authHeader = authHeader.replace(/Client="[^"]*"/, 'Client="Infuse-Direct"');
    authHeader = authHeader.replace(/Version="[^"]*"/, 'Version="7.8"');
    headers['x-emby-authorization'] = authHeader;
}

$done({headers});
