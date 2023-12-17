const sum = require('../app');

test('Multiplica 2 por 3 para ser igual a 6', () => {
    expect(sum(2, 3)).toBe(6);
});
