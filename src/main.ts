import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="nav-bar">
    <div class="nav-logo">MyApp</div>
    <button class="apple-button">Get Started</button>
  </nav>
  
  <section class="hero-section fade-in">
    <h1>Welcome to MyApp</h1>
    <h2>Experience the difference</h2>
    
    <div style="margin-top: 48px;">
      <button class="apple-button">Learn more</button>
    </div>
  </section>

  <div style="padding: 0 20px; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
    <div class="apple-card fade-in">
      <h3>Feature One</h3>
      <p>Experience seamless integration with your workflow.</p>
    </div>
    
    <div class="apple-card fade-in" style="animation-delay: 0.2s">
      <h3>Feature Two</h3>
      <p>Discover powerful tools designed for you.</p>
    </div>
    
    <div class="apple-card fade-in" style="animation-delay: 0.4s">
      <h3>Feature Three</h3>
      <p>Transform the way you work with our solutions.</p>
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
      entry.target.classList.add('fade-in')
    }
  })
}, observerOptions)

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element)
})
