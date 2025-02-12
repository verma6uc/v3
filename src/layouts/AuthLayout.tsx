import React from 'react';
import { AuthLayoutProps } from '../types/auth';

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="apple-nav">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-[17px] font-semibold tracking-[-0.01em] text-apple-dark/90">MyApp</div>
          <div className="flex items-center space-x-4">
            <a href="/help" className="text-[15px] text-apple-gray hover:text-apple-dark transition-colors">
              Help
            </a>
          </div>
        </div>
      </nav>
      
      <div className="flex-1 flex items-center justify-center px-4 py-32 bg-gradient-to-b from-[#F5F5F7] to-[#E5E5E7]">
        <div className="apple-card w-full max-w-md animate-fade-in">
          {children}
        </div>
      </div>

      <footer className="py-6 text-center text-[13px] text-apple-gray">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};
