import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='Google icon' />
      </div>
      <div>
        <img src={slack} alt='Slack icon' />
      </div>
      <div>
        <img src={atlassian} alt='Atlassian icon' />
      </div>
      <div>
        <img src={dropbox} alt='Dropbox icon' />
      </div>
      <div>
        <img src={shopify} alt='Shopify icon' />
      </div>
    </div>
  );
};

export default Brand;
