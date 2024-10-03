async function translateText(text, targetLang) {
  const apiKey = 'API_KEY';
  const response = await fetch(https://translation.googleapis.com/language/translate/v2?key=${apiKey}, {
    method: 'POST',
    body: JSON.stringify({
      q: text,
      target: targetLang
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data.data.translations[0].translatedText;
}

function translateIncomingMessages(preferredLang) {
  const messages = document.querySelectorAll('.message-in .copyable-text');

  messages.forEach(async (message) => {
    const originalText = message.innerText;
    const translatedText = await translateText(originalText, preferredLang);
    message.innerText = translatedText;
  });
}

chrome.storage.sync.get(['incomingLang', 'outgoingLang'], (settings) => {
  const incomingLang = settings.incomingLang || 'en';
  translateIncomingMessages(incomingLang);
});


document.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const messageInput = document.querySelector('[contenteditable="true"]'); // WhatsApp message input box
    const originalText = messageInput.innerText;

    chrome.storage.sync.get('outgoingLang', async (settings) => {
      const outgoingLang = settings.outgoingLang || 'en';
      const translatedText = await translateText(originalText, outgoingLang);
      messageInput.innerText = translatedText;

      // Automatically send the message after translation
      const sendButton = document.querySelector('button[data-testid="compose-btn-send"]');
      sendButton.click();
    });
  }
});