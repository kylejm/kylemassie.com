import React from 'react';
import './Footer.css'; 
function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <p>© {new Date().getFullYear()} Kyle Massie. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
