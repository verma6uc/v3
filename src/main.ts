import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="apple-nav">
    <div class="text-[17px] font-semibold tracking-[-0.01em] text-apple-dark/90">MyApp</div>
    <div class="flex gap-4">
      <button class="apple-button-secondary">Sign In</button>
      <button class="apple-button">Get Started</button>
    </div>
  </nav>
  
  <section class="pt-32 pb-20 px-5 text-center animate-fade-in">
    <h1 class="text-[56px] leading-[1.07] font-semibold tracking-[-0.005em] mb-4
               text-gradient">
      Welcome to MyApp
    </h1>
    <h2 class="text-[28px] leading-[1.14286] font-normal tracking-[.004em] text-apple-gray/90
               max-w-2xl mx-auto">
      Experience the difference with our innovative solutions designed for you.
    </h2>
    
    <div class="mt-12 flex gap-4 justify-center">
      <button class="apple-button">Learn more</button>
      <button class="apple-button-secondary">Watch the video</button>
    </div>
  </section>

  <div class="px-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    <div class="apple-card animate-fade-in">
      <div class="w-12 h-12 glass-icon rounded-full mb-6 flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 class="text-[24px] font-semibold mb-2 tracking-[-0.01em] text-apple-dark/90">Lightning Fast</h3>
      <p class="text-apple-gray/90 text-[17px] leading-relaxed">
        Experience seamless performance with our optimized workflow solutions.
      </p>
    </div>
    
    <div class="apple-card animate-fade-in [animation-delay:200ms]">
      <div class="w-12 h-12 glass-icon rounded-full mb-6 flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </div>
      <h3 class="text-[24px] font-semibold mb-2 tracking-[-0.01em] text-apple-dark/90">Customizable</h3>
      <p class="text-apple-gray/90 text-[17px] leading-relaxed">
        Tailor every aspect to match your unique workflow requirements.
      </p>
    </div>
    
    <div class="apple-card animate-fade-in [animation-delay:400ms]">
      <div class="w-12 h-12 glass-icon rounded-full mb-6 flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h3 class="text-[24px] font-semibold mb-2 tracking-[-0.01em] text-apple-dark/90">Secure</h3>
      <p class="text-apple-gray/90 text-[17px] leading-relaxed">
        Rest easy with our enterprise-grade security and privacy features.
      </p>
    </div>
  </div>
`

// Add scroll-based animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in')
    }
  })
}, observerOptions)

// Handle nav blur intensity on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.apple-nav')
  if (nav) {
    if (window.scrollY > 20) {
      nav.classList.add('bg-white/80')
      nav.classList.remove('bg-white/60')
    } else {
      nav.classList.add('bg-white/60')
      nav.classList.remove('bg-white/80')
    }
  }
})
