import React from 'react';
import { createFormInput } from '../components/FormInput';

export const SignUpPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-[28px] font-semibold mb-8 tracking-[-0.01em] text-apple-dark/90 text-center">
        Create your account
      </h2>
      
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {createFormInput('name', 'Full Name', 'text', 'John Doe')}
        {createFormInput('email', 'Email', 'email', 'email@example.com')}
        {createFormInput('password', 'Password', 'password', '••••••••')}
        {createFormInput('confirmPassword', 'Confirm Password', 'password', '••••••••')}
        
        <button 
          type="submit" 
          className="apple-button w-full justify-center"
          onClick={(e) => window.handleSubmit(e)}
        >
          Create Account
        </button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-[15px] text-apple-gray">
          Already have an account?
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
