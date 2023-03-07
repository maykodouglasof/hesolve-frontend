export const RulePassword = {
  required: { value: true, message: 'A senha é obrigatória' },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:
      'A senha deve ter pelo menos uma letra maiúscula, uma letra minúscula e um número.',
  },
  minLength: {
    value: 8,
    message: 'A senha deve ter pelo menos 8-16 caracteres.',
  },
  maxLength: {
    value: 16,
    message: 'A senha deve ter pelo menos 8-16 caracteres.',
  },
};
export const RuleName = {
  require: { value: true, message: '' },
  pattern: {
    value: /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/,
    message: '',
  },
};
export const RuleConfirmPassword = {
  required: { value: true, message: 'Confirme a senha incorreta.' },
  minLength: {
    value: 8,
    message: 'Confirme a senha incorreta',
  },
};
export const RuleEmail = {
  required: { value: true, message: 'O e-mail é obrigatório' },
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
    message: 'Por favor, digite um endereço de e-mail válido',
  },
};
export const RuleResetCode = {
  required: { value: true, message: 'Code is required' },
  maxLength: {
    value: 6,
    message: 'Code is six digits',
  },
  minLength: {
    value: 6,
    message: 'Code is six digits',
  },
};
export const RuleOnlyNumber = {
  required: { value: true, message: 'Value is required' },
  pattern: {
    value: /^[0-9]+$/,
    message: 'Please enter a number',
  },
  maxLength: {
    value: 3,
    message: 'Please enter a number',
  },
};

export const RuleUsername = {
  required: { value: true, message: 'Usuário é obrigatória' },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message:
      'Nome de usuário inválido, não use caracteres especiais ou espaços em branco.',
  },
  maxLength: {
    value: 20,
    message: 'Please enter a valid username',
  },
  minLength: {
    value: 6,
    message: 'Please enter a valid username',
  },
};
