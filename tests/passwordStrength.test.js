const test = require('node:test');
const assert = require('node:assert/strict');
const { evaluatePassword } = require('../passwordStrength');

test('scores weak passwords as very weak', () => {
  const result = evaluatePassword('password');

  assert.equal(result.strength, 'Very weak');
  assert.equal(result.score, 1);
  assert.equal(result.passedCount, 1);
});

test('scores strong passwords as strong', () => {
  const result = evaluatePassword('Password1!');

  assert.equal(result.strength, 'Strong');
  assert.equal(result.score, 5);
  assert.equal(result.passedCount, 5);
});

test('flags missing criteria', () => {
  const result = evaluatePassword('abc123');

  assert.equal(result.checks[1].passed, false);
  assert.equal(result.checks[2].passed, false);
  assert.equal(result.checks[4].passed, false);
});
