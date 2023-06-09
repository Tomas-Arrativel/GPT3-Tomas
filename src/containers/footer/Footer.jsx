import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into future before others?
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <button type='button'>Request Early Access</button>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Copyright &copy; All rights reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Contact</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Overons</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Tomás Arrativel</p>
          <p>0123 45678</p>
          <p>info@info.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>Copyright &copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
