const { Cipher } = require('minimal-cipher');

it('works', () => {
  const cipher = new Cipher();
  expect(cipher).toBeDefined();
});
