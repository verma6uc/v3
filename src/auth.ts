import { AuthState, FormFields, ValidationResult, AuthFormElements } from './types/auth';
import { validateEmail, validatePassword } from './utils/validation';
import { AuthLayout } from './layouts/AuthLayout';
import { SignInPage } from './pages/SignIn';
import { SignUpPage } from './pages/SignUp';
import { ForgotPasswordPage } from './pages/ForgotPassword';
import { Router } from './utils/router';

// Auth state management
let authState: AuthState = {
  isAuthenticated: false,
  currentView: 'signin'
};

const router = Router.getInstance();

export const initializeAuth = (): void => {
  // Register routes with /auth prefix
  router.addRoute('/auth/signin', () => AuthLayout(SignInPage()));
  router.addRoute('/auth/signup', () => AuthLayout(SignUpPage()));
  router.addRoute('/auth/forgot-password', () => AuthLayout(ForgotPasswordPage()));
  
  // Initialize router
  router.init();
};

export const navigateTo = (path: string): void => {
  router.navigateTo(path);
};

const handleValidation = (fields: FormFields): ValidationResult => {
  const emailValidation = validateEmail(fields.email);
  if (!emailValidation.isValid) {
    return emailValidation;
  }

  const passwordValidation = validatePassword(fields.password);
  if (!passwordValidation.isValid) {
    return passwordValidation;
  }

  return { isValid: true };
};

export const handleSubmit = (event: Event): void => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const elements = form.elements as AuthFormElements;

  const fields: FormFields = {
    email: elements.email.value,
    password: elements.password.value,
    remember: elements.remember?.checked
  };

  const validation = handleValidation(fields);
  
  if (!validation.isValid) {
    alert(validation.message);
    return;
  }

  // Here you would typically make an API call to authenticate
  console.log('Form submitted:', fields);
};

// Global type declarations
declare global {
  interface Window {
    handleSubmit: (event: Event) => void;
    navigateTo: (path: string) => void;
  }
}

window.handleSubmit = handleSubmit;
window.navigateTo = navigateTo;
