import { createFormInput } from '../components/FormInput';

export const SignUpPage = (): string => `
  <div>
    <h2 class="text-[28px] font-semibold mb-8 tracking-[-0.01em] text-apple-dark/90 text-center">
      Create your account
    </h2>
    
    <form onsubmit="return false;" class="space-y-6">
      ${createFormInput('name', 'Full Name', 'text', 'John Doe')}
      ${createFormInput('email', 'Email', 'email', 'email@example.com')}
      ${createFormInput('password', 'Password', 'password', '••••••••')}
      ${createFormInput('confirmPassword', 'Confirm Password', 'password', '••••••••')}
      
      <button 
        type="submit" 
        class="apple-button w-full justify-center"
        onclick="handleSubmit(event)"
      >
        Create Account
      </button>
    </form>
    
    <div class="mt-8 text-center">
      <p class="text-[15px] text-apple-gray">
        Already have an account?
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
