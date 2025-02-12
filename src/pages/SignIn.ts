import { createFormInput } from '../components/FormInput';

export const SignInPage = (): string => `
  <div>
    <h2 class="text-[28px] font-semibold mb-8 tracking-[-0.01em] text-apple-dark/90 text-center">
      Sign in to MyApp
    </h2>
    
    <form onsubmit="return false;" class="space-y-6">
      ${createFormInput('email', 'Email', 'email', 'email@example.com')}
      ${createFormInput('password', 'Password', 'password', '••••••••')}
      
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input 
            type="checkbox" 
            id="remember"
            name="remember" 
            class="h-4 w-4 text-apple-blue focus:ring-apple-blue border-gray-300 rounded"
          >
          <label class="ml-2 block text-[15px] text-apple-gray" for="remember">
            Remember me
          </label>
        </div>
        <a 
          href="/auth/forgot-password" 
          data-link
          class="text-apple-blue text-[15px] hover:underline"
        >
          Forgot password?
        </a>
      </div>
      
      <button 
        type="submit" 
        class="apple-button w-full justify-center"
        onclick="handleSubmit(event)"
      >
        Sign In
      </button>
    </form>
    
    <div class="mt-8 text-center">
      <p class="text-[15px] text-apple-gray">
        Don't have an account?
        <a 
          href="/auth/signup" 
          data-link
          class="text-apple-blue hover:underline ml-1"
        >
          Create one
        </a>
      </p>
    </div>
  </div>
`;
