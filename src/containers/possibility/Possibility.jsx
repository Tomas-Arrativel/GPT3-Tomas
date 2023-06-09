import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility image' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          ratione nemo tenetur modi quia veniam eius magni! Nulla, consectetur
          voluptate ut aut animi repellat similique labore voluptatem!
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
