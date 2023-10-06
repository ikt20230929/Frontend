export function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  const passwordArray = new Uint8Array(length);
  const charsetLength = charset.length;

  window.crypto.getRandomValues(passwordArray);

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[passwordArray[i] % charsetLength];
  }

  return password;
}
