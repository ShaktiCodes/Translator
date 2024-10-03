chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ incomingLang: 'en', outgoingLang: 'en' });
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});