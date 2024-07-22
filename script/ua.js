let headers = $request.headers;

if ('User-Agent' in headers) {
    headers['User-Agent'] = 'Infuse-Direct';
}
if ('user-agent' in headers) {
    headers['user-agent'] = 'Infuse-Direct';
}

if (headers['X-Emby-Authorization']) {
    let authHeader = headers['X-Emby-Authorization'];
    authHeader = authHeader.replace(/Client="[^"]*"/, 'Client="Infuse-Direct"');
    authHeader = authHeader.replace(/Version="[^"]*"/, 'Version="7.8"');
    headers['X-Emby-Authorization'] = authHeader;
}

$done({headers});
