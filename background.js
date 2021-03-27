chrome.tabs.onCreated.addListener(addBlur);
chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status == 'complete') addBlur(tab);
});

function addBlur(tab) {
    var tabUrl = tab.url;
    if (tabUrl && tabUrl.indexOf("youtube.com") !== -1) {
        chrome.tabs.insertCSS(tab.id, {
            file: "mystyles.css"
        });
    }
}