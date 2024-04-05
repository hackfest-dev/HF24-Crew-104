export const validatePassword = (password) => {
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const symbolRegex = /[!@#$%^&*()_+\-={}|\[\]\\:;'<,>.?\/]/;

  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  if (!lowercaseRegex.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!uppercaseRegex.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!symbolRegex.test(password)) {
    return "Password must contain at least one symbol.";
  }

  return null;
};
