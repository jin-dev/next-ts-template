// components/Footer.js
import {
  bottomStyles,
  containerStyles,
  footerStyles,
  linkStyles,
  navStyles,
} from './footer.css';

export default function Footer() {
  return (
    <footer className={footerStyles}>
      <div className={containerStyles}>
        {/* Top Section */}
        <div>
          <h1>ChatGPT AI Platform</h1>
          <p>Transforming the way you interact with AI.</p>
        </div>
        <nav className={navStyles}>
          <a href="/about" className={linkStyles}>
            About
          </a>
          <a href="/features" className={linkStyles}>
            Features
          </a>
          <a href="/pricing" className={linkStyles}>
            Pricing
          </a>
          <a href="/contact" className={linkStyles}>
            Contact
          </a>
        </nav>
      </div>
      {/* Bottom Section */}
      <div className={bottomStyles}>
        <p>
          &copy; {new Date().getFullYear()} jin-Dev Platform. All rights
          reserved.
        </p>
        <div>
          <a
            href="https://twitter.com"
            className={linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            className={linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className={linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
