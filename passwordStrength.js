(function (root, factory) {
  const api = factory();

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  root.evaluatePassword = api.evaluatePassword;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function evaluatePassword(password) {
    const checks = [
      { id: 'length', label: 'At least 8 characters', passed: password.length >= 8 },
      { id: 'lowercase', label: 'Contains a lowercase letter', passed: /[a-z]/.test(password) },
      { id: 'uppercase', label: 'Contains an uppercase letter', passed: /[A-Z]/.test(password) },
      { id: 'number', label: 'Contains a number', passed: /\d/.test(password) },
      { id: 'special', label: 'Contains a special character', passed: /[^A-Za-z0-9]/.test(password) }
    ];

    const passedCount = checks.filter((check) => check.passed).length;
    const score = passedCount;

    let strength = 'Very weak';
    let color = '#ef4444';

    if (score >= 5) {
      strength = 'Strong';
      color = '#16a34a';
    } else if (score >= 4) {
      strength = 'Good';
      color = '#22c55e';
    } else if (score >= 3) {
      strength = 'Fair';
      color = '#f59e0b';
    } else if (score >= 2) {
      strength = 'Weak';
      color = '#fb923c';
    }

    return {
      score,
      strength,
      color,
      passedCount,
      checks
    };
  }

  return { evaluatePassword };
});
