import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, harum maxime sapiente rerum ut vero sit.',
  },
  {
    title: 'Become the tended active',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, harum maxime sapiente rerum ut vero sit.',
  },
  {
    title: 'Message or an nothing',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, harum maxime sapiente rerum ut vero sit.',
  },
  {
    title: 'Really boy law county',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, harum maxime sapiente rerum ut vero sit.',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The future is now and you just need to realize it. Step into future
          today and make it happen.
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((data, i) => (
          <Feature title={data.title} text={data.text} key={data.title + i} />
        ))}
      </div>
    </div>
  );
};

export default Features;
