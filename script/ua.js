let headers = $request.headers;

if ('User-Agent' in headers) {
    headers['User-Agent'] = 'Infuse-Direct';
}
if ('user-agent' in headers) {
    headers['user-agent'] = 'Infuse-Direct';
}

let authorizationHeader = 'Emby UserId="612bec78799f4b3a8b52bbaab552096", Client="VidHub_iOS", Device="iPhone", DeviceId="326255D2-24C0-463C-8A0E-C0528A04E427", Version="1.7.4"';

authorizationHeader = authorizationHeader.replace(/Client="[^"]*"/, 'Client="Infuse-Direct"');
authorizationHeader = authorizationHeader.replace(/Version="[^"]*"/, 'Version="7.8"');

$done({headers, authorizationHeader});
