/* eslint-disable jsx-a11y/img-redundant-alt */
import right from './static/right.svg';
import reads from './type/reads.svg';

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed-container'>
        <div className='feed-item about-item-first-js inactive'>
          <h3>Article</h3>
          <h4>Hello</h4>
          <p>Introduction to me and my professional self.</p>
          <div>
            <p>Read</p>
            {/* <img
              src={right}
              alt='Arrow pointing east'
            /> */}
          </div>
        </div>
        <div className='feed-image'>
          <img src={reads} alt='Reads' />
        </div>
        <a href='/transit'>
          <div className='feed-item about-item-second-js'>
            <h3>Article</h3>
            <h4>Transit</h4>
            <p>My approach towards working with APIs.</p>
            <div>
              <p>Read</p>
              <img src={right} alt='Arrow pointing east' />
            </div>
          </div>
        </a>
        <a href='/juncture'>
          <div className='feed-item about-item-third-js'>
            <h3>Article</h3>
            <h4>Juncture</h4>
            <p>Few thoughts on building interfaces.</p>
            <div>
              <p>Read</p>
              <img src={right} alt='Arrow pointing east' />
            </div>
          </div>
        </a>
        <div className='feed-item about-item-forth-js inactive'>
          <h3>Article</h3>
          <h4>Crispies</h4>
          <p>Web media quality and performance optimization.</p>
          <div>
            <p>Read</p>
            {/* <img
              src={right}
              alt='Arrow pointing east'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
