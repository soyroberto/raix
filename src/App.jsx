import './App.jsx';

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
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About RAIX</h2>
        <p>
          With over <b>[X]</b> years of experience in IT, RAIX helps Australian businesses harness the power of Microsoft Copilot Studio and modern cybersecurity.<br />
          Passionate about making advanced technology accessible, practical, and secure for organizations of all sizes.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>My Services</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>Microsoft Copilot Studio Consulting</h3>
            <ul>
              <li>Setup, customization, and training</li>
              <li>Workflow automation and productivity boosts</li>
              <li>Ongoing support</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Cybersecurity Assessments & Solutions</h3>
            <ul>
              <li>Security audits and risk assessments</li>
              <li>Implementation of best practices</li>
              <li>Employee training and awareness</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Training & Workshops</h3>
            <ul>
              <li>Tailored sessions for teams</li>
              <li>Executive briefings</li>
              <li>Ongoing support packages</li>
            </ul>
          </div>
        </div>
        <div className="cta-buttons">
          <a href="#contact" className="btn">Learn More</a>
          <a href="#contact" className="btn secondary">Book a Free Call</a>
        </div>
      </section>

      {/* Why Choose Me */}
      <section id="why" className="section">
        <h2>Why Work With a Dedicated Consultant?</h2>
        <ul>
          <li>Personalized, hands-on service</li>
          <li>Flexible, affordable packages</li>
          <li>Local expertise—focused on Australian businesses</li>
          <li>Fast response and ongoing support</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <h2>Testimonials</h2>
        <p><i>Coming soon! (Add your first client testimonial here.)</i></p>
      </section>

      {/* Contact */}
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
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">your-profile</a></p>
      </section>

      {/* Footer */}
      <footer>
        <img src={logo} alt="RAIX Logo" className="footer-logo" />
        <p>ABN: [Your ABN here]</p>
        <p>&copy; {new Date().getFullYear()} RAIX Consulting. All rights reserved.</p>
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="linkedin-icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;
