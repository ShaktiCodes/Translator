Step: 1

Go to chrome://extensions/.
Enable Developer Mode (toggle in the top-right).
Click Load unpacked and select your whatsapp-translator-chrome-extension folder.
The extension should appear in your Chrome browser toolbar.

Step 2: Testing the Extension

Open WhatsApp Web (https://web.whatsapp.com/).
Click on the extension icon, choose your desired languages for translation, and click Save Settings.
All incoming messages should be translated to your preferred language.
When you type and press "Enter", your outgoing message should automatically translate before being sent to the contact.

API Considerations:

You'll need to use a translation API like Google Cloud Translate API or a free alternative (e.g., LibreTranslate).
You must sign up for an API key and configure it in your content.js.

Enhancements:

Add automatic language detection for incoming messages.
Add an option for users to disable/enable the translation for specific contacts.
Implement error handling for API failures.

By following these steps, you’ll have a working Chrome extension that translates WhatsApp Web chats both incoming and outgoing!

Important - IN THIS PROJECT API_KEY HIDE // PRIVATE KEY //
