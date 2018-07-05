const signer = require('../src/signer');

const obj = {
  customer: {
    project_id: 0,
    id: 'sutm_id',
  },
  card: {
    pan: '4242424242424242',
    year: 2020,
    month: 8,
    card_holder: 'John Smith',
    cvv: '123',
    save: true,
  },
};

const salt = 'secret';

test('Test signature is correct', () => {
  expect(signer(obj, salt))
    .toBe('lY0LTSAzpR7zGce5qfYGacOuYlHGWqkMcQlqmjlsDDZI2gVcE1qVeWANnkIR7mdOqRXJnL1kO0lUmkQ0YYLWRg==');
});
