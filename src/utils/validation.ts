import { ValidationResult } from '../types/auth';

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(email),
    message: emailRegex.test(email) ? undefined : 'Please enter a valid email address'
  };
};

export const validatePassword = (password: string): ValidationResult => {
  const isValid = password.length >= 8;
  return {
    isValid,
    message: isValid ? undefined : 'Password must be at least 8 characters long'
  };
};
