function updateBadge(enabled) {
  chrome.action.setBadgeText({ text: enabled ? '' : 'OFF' });
  chrome.action.setBadgeBackgroundColor({ color: enabled ? '#3aa757' : '#777' });
}

// Initialize badge state when the service worker starts
chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
  updateBadge(enabled);
});

chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
    const newValue = !enabled;
    chrome.storage.local.set({ enabled: newValue }, () => {
      updateBadge(newValue);
    });
  });
});

