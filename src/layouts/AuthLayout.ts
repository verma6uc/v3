import { AuthLayoutProps } from '../types/auth';

export const AuthLayout = (content: string): string => `
  <div class="min-h-screen flex flex-col">
    <nav class="apple-nav">
      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div class="text-[17px] font-semibold tracking-[-0.01em] text-apple-dark/90">MyApp</div>
        <div class="flex items-center space-x-4">
          <a href="/help" class="text-[15px] text-apple-gray hover:text-apple-dark transition-colors">
            Help
          </a>
        </div>
      </div>
    </nav>
    
    <div class="flex-1 flex items-center justify-center px-4 py-32 bg-gradient-to-b from-[#F5F5F7] to-[#E5E5E7]">
      <div class="apple-card w-full max-w-md animate-fade-in">
        ${content}
      </div>
    </div>

    <footer class="py-6 text-center text-[13px] text-apple-gray">
      <p>© ${new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  </div>
`;
