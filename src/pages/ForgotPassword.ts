import { createFormInput } from '../components/FormInput';

export const ForgotPasswordPage = (): string => `
  <div>
    <h2 class="text-[28px] font-semibold mb-8 tracking-[-0.01em] text-apple-dark/90 text-center">
      Reset Password
    </h2>
    
    <p class="text-apple-gray text-[15px] mb-6 text-center">
      Enter your email address and we'll send you instructions to reset your password.
    </p>
    
    <form onsubmit="return false;" class="space-y-6">
      ${createFormInput('email', 'Email', 'email', 'email@example.com')}
      
      <button 
        type="submit" 
        class="apple-button w-full justify-center"
        onclick="handleSubmit(event)"
      >
        Send Reset Link
      </button>
    </form>
    
    <div class="mt-8 text-center">
      <p class="text-[15px] text-apple-gray">
        Remember your password?
        <a 
          href="/auth/signin" 
          data-link
          class="text-apple-blue hover:underline ml-1"
        >
          Sign in
        </a>
      </p>
    </div>
  </div>
`;
