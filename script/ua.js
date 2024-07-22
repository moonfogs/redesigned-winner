let headers = $request.headers;

const INFUSE_DIRECT = 'Infuse-Direct';
const VERSION = '7.8';

['User-Agent', 'user-agent'].forEach(key => {
    if (key in headers) {
        headers[key] = INFUSE_DIRECT;
    }
});

const authHeaderKey = Object.keys(headers).find(key => key.toLowerCase() === 'x-emby-authorization');

if (authHeaderKey) {
    let authHeader = headers[authHeaderKey];
    authHeader = authHeader.replace(/Client="[^"]*"/, 'Client=${INFUSE_DIRECT}');
    authHeader = authHeader.replace(/Version="[^"]*"/, 'Version=${VERSION}');
    headers[authHeaderKey] = authHeader;
}

$done({headers});
