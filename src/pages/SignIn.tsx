import React from 'react';
import { createFormInput } from '../components/FormInput';

export const SignInPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-[28px] font-semibold mb-8 tracking-[-0.01em] text-apple-dark/90 text-center">
        Sign in to MyApp
      </h2>
      
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {createFormInput('email', 'Email', 'email', 'email@example.com')}
        {createFormInput('password', 'Password', 'password', '••••••••')}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember"
              name="remember" 
              className="h-4 w-4 text-apple-blue focus:ring-apple-blue border-gray-300 rounded"
            />
            <label className="ml-2 block text-[15px] text-apple-gray" htmlFor="remember">
              Remember me
            </label>
          </div>
          <a 
            href="/auth/forgot-password" 
            data-link
            className="text-apple-blue text-[15px] hover:underline"
          >
            Forgot password?
          </a>
        </div>
        
        <button 
          type="submit" 
          className="apple-button w-full justify-center"
          onClick={(e) => window.handleSubmit(e)}
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-[15px] text-apple-gray">
          Don't have an account?
          <a 
            href="/auth/signup" 
            data-link
            className="text-apple-blue hover:underline ml-1"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};
