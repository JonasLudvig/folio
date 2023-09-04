/* eslint-disable jsx-a11y/img-redundant-alt */
import stack from './type/stack.svg';

export default function Service() {
  return (
    <div className='service'>
      <div className='service-container'>
        <div className='service-item about-item-first-js'>
          <h4>Frontend</h4>
          <p>Interface development using modern techniques and frameworks.</p>
        </div>
        <div className='service-image'>
          <img src={stack} alt='Stack' />
        </div>
        <div className='service-item about-item-second-js'>
          <h4>Backend</h4>
          <p>Sustainable and secure user platform and utility development.</p>
        </div>
        <div className='service-item about-item-third-js'>
          <h4>Cloud</h4>
          <p>
            Database and server configuration, maintenance and optimization.
          </p>
        </div>
        <div className='service-item about-item-forth-js'>
          <h4>Media</h4>
          <p>Standardized type, image and video media production.</p>
        </div>
        <div className='service-item about-item-forth-js'>
          <h4>Design</h4>
          <p>Web interface and graphic profile development.</p>
        </div>
        <div className='service-item about-item-forth-js'>
          <h4>Requisite</h4>
          <p>Conceptualization and requisites analysis.</p>
        </div>
      </div>
    </div>
  );
}
