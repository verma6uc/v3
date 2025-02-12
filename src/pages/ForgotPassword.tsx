import React from 'react';
import { createFormInput } from '../components/FormInput';

export const ForgotPasswordPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-[28px] font-semibold mb-8 tracking-[-0.01em] text-apple-dark/90 text-center">
        Reset Password
      </h2>
      
      <p className="text-apple-gray text-[15px] mb-6 text-center">
        Enter your email address and we'll send you instructions to reset your password.
      </p>
      
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {createFormInput('email', 'Email', 'email', 'email@example.com')}
        
        <button 
          type="submit" 
          className="apple-button w-full justify-center"
          onClick={(e) => window.handleSubmit(e)}
        >
          Send Reset Link
        </button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-[15px] text-apple-gray">
          Remember your password?
          <a 
            href="/auth/signin" 
            data-link
            className="text-apple-blue hover:underline ml-1"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};
