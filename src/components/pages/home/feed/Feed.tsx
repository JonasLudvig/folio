/* eslint-disable jsx-a11y/img-redundant-alt */
import right from './static/right.svg';

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed-container'>
        <div className='feed-item about-item-first-js inactive'>
          <h3>Article</h3>
          <h4>Study visit</h4>
          <p>
            Here you'll find all sorts of computer stuff but also art and guitar
            pedals.
          </p>
          <div>
            <p>Read</p>
            {/* <img
              src={right}
              className='expandable-icon'
              alt='Arrow pointing east'
            /> */}
          </div>
        </div>
        <div className='feed-image'></div>
        <a href='/apis'>
          <div className='feed-item about-item-second-js'>
            <h3>Article</h3>
            <h4>APIs</h4>
            <p>My approach towards working with APIs.</p>
            <div>
              <p>Read</p>
              <img
                src={right}
                className='expandable-icon'
                alt='Arrow pointing east'
              />
            </div>
          </div>
        </a>
        <div className='feed-item about-item-third-js inactive'>
          <h3>Article</h3>
          <h4>Interface</h4>
          <p>Few thoughts on building interfaces.</p>
          <div>
            <p>Read</p>
            {/* <img
              src={right}
              className='expandable-icon'
              alt='Arrow pointing east'
            /> */}
          </div>
        </div>
        <div className='feed-item about-item-forth-js inactive'>
          <h3>Article</h3>
          <h4>Crispy</h4>
          <p>Web media quality and performance optimization.</p>
          <div>
            <p>Read</p>
            {/* <img
              src={right}
              className='expandable-icon'
              alt='Arrow pointing east'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
