document.getElementById('saveSettings').addEventListener('click', () => {
  const incomingLang = document.getElementById('incomingLang').value;
  const outgoingLang = document.getElementById('outgoingLang').value;

  chrome.storage.sync.set({ incomingLang, outgoingLang }, () => {
    alert('Language preferences saved!');
  });
});
