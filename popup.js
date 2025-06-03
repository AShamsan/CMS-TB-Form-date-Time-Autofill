document.getElementById('fill').addEventListener('click', () => {
  browser.tabs.executeScript({ code: '(' + fillForm.toString() + ')()' });
});

function fillForm() {
  const pad = n => n.toString().padStart(2, '0');
  const now = new Date();
  let hour = now.getHours();
  const minute = pad(now.getMinutes());
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;

  const values = {
    "Month": pad(now.getMonth() + 1),
    "Day of the month": pad(now.getDate()),
    "Year": now.getFullYear(),
    "Hour": pad(hour),
    "Minute": minute,
    "AM/PM": ampm
  };

  const fillByAriaLabel = (label, value) => {
    const input = [...document.querySelectorAll('input[aria-label]')]
      .find(el => el.getAttribute('aria-label') === label);
    if (input) {
      input.focus();
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  fillByAriaLabel("Month", values["Month"]);
  fillByAriaLabel("Day of the month", values["Day of the month"]);
  fillByAriaLabel("Year", values["Year"]);
  fillByAriaLabel("Hour", values["Hour"]);
  fillByAriaLabel("Minute", values["Minute"]);

  const ampmSpan = document.querySelector('span.vRMGwf.oJeWuf');
  if (ampmSpan && ampmSpan.textContent !== values["AM/PM"]) {
    ampmSpan.click();
  }

  alert("📅 Date & Time autofilled!");
}
