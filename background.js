let text = "Extension Demo - Simple Reminder Extension";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({text});
    console.log(`Default Background Text set to ${text}`);
});