const passwordInput = document.getElementById('password');
const meterFill = document.getElementById('meter-fill');
const strengthText = document.getElementById('strength-text');
const criteriaItems = document.querySelectorAll('[data-check]');
const visibilityToggle = document.getElementById('toggle-visibility');
const copyButton = document.getElementById('copy-button');
const copyStatus = document.getElementById('copy-status');

function resetCopyStatus() {
  copyStatus.textContent = '';
  copyStatus.classList.remove('success', 'error');
}

function updateUI(password) {
  copyButton.disabled = !password;

  if (!password) {
    meterFill.style.width = '0%';
    meterFill.style.backgroundColor = '#ef4444';
    strengthText.textContent = 'Enter a password';
    strengthText.style.color = '#f8fafc';
    criteriaItems.forEach((item) => {
      item.classList.remove('passed', 'failed');
    });
    resetCopyStatus();
    return;
  }

  const result = evaluatePassword(password);
  const percent = (result.passedCount / 5) * 100;

  meterFill.style.width = `${percent}%`;
  meterFill.style.backgroundColor = result.color;
  strengthText.textContent = `${result.strength} (${result.passedCount}/5 checks)`;
  strengthText.style.color = result.color;

  criteriaItems.forEach((item) => {
    const checkId = item.getAttribute('data-check');
    const matchingCheck = result.checks.find((check) => check.id === checkId);

    item.classList.toggle('passed', matchingCheck?.passed);
    item.classList.toggle('failed', !matchingCheck?.passed);
  });
}

passwordInput.addEventListener('input', (event) => updateUI(event.target.value));

visibilityToggle.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  visibilityToggle.textContent = isHidden ? 'Hide' : 'Show';
  visibilityToggle.setAttribute('aria-pressed', String(isHidden));
});

copyButton.addEventListener('click', async () => {
  if (!passwordInput.value) return;

  try {
    await navigator.clipboard.writeText(passwordInput.value);
    copyStatus.textContent = 'Copied!';
    copyStatus.classList.add('success');
    copyStatus.classList.remove('error');
  } catch (error) {
    copyStatus.textContent = 'Copy failed';
    copyStatus.classList.add('error');
    copyStatus.classList.remove('success');
  }
});

updateUI('');
