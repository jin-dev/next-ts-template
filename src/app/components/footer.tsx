// components/Footer.js
import {
  bottomStyles,
  containerStyles,
  footerStyles,
  linkStyles,
  navStyles,
} from './footer.css';

import { BsGithub, BsLinkedin } from "react-icons/bs";


export default function Footer() {
  return (
    <footer className={footerStyles}>
      <div className={containerStyles}>
        {/* Top Section */}
        
        <nav className={navStyles}>
          
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
            href="https://www.linkedin.com/in/jin-woo-park-87583389/"
            className={linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin/>
          </a>
       
        </div>
      </div>
    </footer>
  );
}
