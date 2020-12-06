const { Cipher } = require('minimal-cipher');

it('doesnt work', () => {
  const cipher = new Cipher();
  expect(cipher).toBeDefined();
});
