import './App.css'; // Add your CSS file

const logo = '/assets/raix-logo.svg';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <img src={logo} alt="RAIX Logo" className="logo" />
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why">Why Me</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img src={logo} alt="RAIX Logo" className="hero-logo" />
        <h1>Empowering Australian Businesses with Microsoft Copilot Studio & Cybersecurity Expertise</h1>
        <p>Personalized consulting and hands-on services to help you unlock productivity and stay secure.</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn">Book a Free Consultation</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
        
        {/* Moved video to hero section */}
        <video
          className="hero-video"
          src="/assets/raixvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ maxWidth: '180px', borderRadius: '8px' }}
        />
      </section>

      {/* Rest of your sections remain the same but with fixed LinkedIn link */}
      <section id="contact" className="section">
        <h2>Get in Touch</h2>
        <p>Ready to get started or have a question? Fill out the form below or book a free 30-minute consultation.</p>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Company (optional)" />
          <textarea placeholder="Message" required />
          <button type="submit" className="btn">Send</button>
        </form>
        <p>Or email: <a href="mailto:hello@raix.example">hello@raix.example</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/soyroberto" target="_blank" rel="noopener noreferrer">soyroberto</a></p>
      </section>

      {/* Footer with consistent LinkedIn URL */}
      <footer>
        <img src={logo} alt="RAIX Logo" className="footer-logo" />
        <p>ABN: [Your ABN here]</p>
        <p>&copy; {new Date().getFullYear()} RAIX Consulting. All rights reserved.</p>
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="https://www.linkedin.com/in/soyroberto" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="linkedin-icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;