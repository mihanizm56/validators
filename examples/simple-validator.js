const { PatternValidator, composeValidators } = require('../dist');

const result = composeValidators([new PatternValidator().email])(
  'm727507.56@mail.ru',
);
