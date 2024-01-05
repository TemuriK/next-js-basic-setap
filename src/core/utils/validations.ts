export const formValidators = {};

export const formValidationPatterns = {
  onlyGeorgianLetters: /^(^[ა-ჰ][^a-zA-z0-9]*)$/,
  pin: /^[0-9]\d{10}$/,
  phoneNumber: /^[+0-9]/,
  onlyNumbers: /^[0-9]*$/g,
  containsLowercase: /[a-z]/,
  containsUppercase: /[A-Z]/,
  containsNumber: /[0-9]/,
  containsSpecialSymbols: /[!@#$%^&*]/,
  hexColorPattern: /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{3})$/,
  hexColorPatternOnlySixDigit: /^#([A-Fa-f0-9]{6})$/,
  spaces: /\s/g,
};
