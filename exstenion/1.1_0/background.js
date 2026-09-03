let tokenRedirectRegex = /http:\/\/127\.0\.0\.1\/success(-dev)?\?code=(.*?)$/;
const HOSTNAME = typeof window !== 'undefined' && window.location ? window.location.origin : "https://ais-dev-ethvhyckciffxg7y5aprw7-610167174173.us-east1.run.app";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!tab || !tab.url) return;
    let match = tab.url.match(tokenRedirectRegex);
    if (match) {
        let authCode = match[2];
        chrome.tabs.query({currentWindow: true, active: true}, (tabInfo) => {
            const redirectUrl = `${HOSTNAME}/binder?code=${authCode}`;
            chrome.tabs.update(tab.id, {url: redirectUrl});
        });
    }
});

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    if (request) {
        if (request.message) {
            if (request.message === "version") {
                sendResponse({version: "1.0"});
            }
        }
    }
    return true;
});