export const sanitizeIndianMobileNumber = (value) => {
  let digits = String(value || '').replace(/\D/g, '');

  if (digits.startsWith('91') && digits.length > 10) {
    digits = digits.slice(2);
  }

  return digits.slice(0, 10);
};

export const isValidIndianMobileNumber = (value) =>
  /^[6-9]\d{9}$/.test(sanitizeIndianMobileNumber(value));

