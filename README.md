# AutoFill Google Form Date and Time (Firefox Extension)
This browser extension automatically fills the current date and time into Google Form fields using `aria-label` values such as:

- Month
- Day of the month
- Year
- Hour
- Minute
- AM/PM

---

##  How to Install (Temporary Load in Firefox)
1. Open **Firefox**.
2. Visit `about:debugging` in the address bar.
3. Click **This Firefox** (in the sidebar).
4. Click **Load Temporary Add-on**.
5. Select the `manifest.json` file from the project folder (this will load the entire extension).

---

##  How to Use
1. Navigate to your target Google Form.
2. Click the extension icon in the toolbar.
3. In the popup, click **Fill Date & Time**.
4. The form’s native date and time fields will be automatically filled with the current timestamp.

---

##  Files Included
- `manifest.json` – Extension manifest file
- `popup.html` – The extension popup UI
- `popup.js` – Script that executes autofill logic

---

##  Note
- This is a temporary load. It will disappear once you close Firefox.
