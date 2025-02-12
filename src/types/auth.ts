import { ReactNode } from 'react';

export interface AuthState {
  isAuthenticated: boolean;
  currentView: string;
}

export interface FormFields {
  email: string;
  password: string;
  remember?: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export interface AuthFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  remember?: HTMLInputElement;
}

export interface AuthLayoutProps {
  children: ReactNode;
}
