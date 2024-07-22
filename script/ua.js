let headers = $request.headers;

if ('User-Agent' in headers) {
    headers['User-Agent'] = 'Infuse-Direct';
}
if ('user-agent' in headers) {
    headers['user-agent'] = 'Infuse-Direct';
}

if (headers['x-emby-authorization']) {
    headers['x-emby-authorization'] = headers['x-emby-authorization']
        .replace('Client="VidHub_iOS"', 'Client="Infuse-Direct"')
        .replace('Version="1.7.4"', 'Version="7.8"');
}

$done({headers});
