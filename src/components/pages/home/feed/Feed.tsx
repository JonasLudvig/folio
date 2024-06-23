/* eslint-disable jsx-a11y/img-redundant-alt */
import right from './static/right.svg';
import reads from './type/reads.svg';
import ViewItem from '../../../../hooks/ViewItem';

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed-container'>
        <ViewItem>
          <div className={'feed-item'} data-inactive>
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
        </ViewItem>
        <div className={'feed-image'}>
          <img src={reads} alt='Reads' />
        </div>
        <a href='/transit'>
          <ViewItem>
            <div className='feed-item'>
              <h3>Article</h3>
              <h4>Transit</h4>
              <p>My approach towards working with APIs.</p>
              <div>
                <p>Read</p>
                <img src={right} alt='Arrow pointing east' />
              </div>
            </div>
          </ViewItem>
        </a>
        <a href='/juncture'>
          <ViewItem>
            <div className='feed-item'>
              <h3>Article</h3>
              <h4>Juncture</h4>
              <p>Few thoughts on building interfaces.</p>
              <div>
                <p>Read</p>
                <img src={right} alt='Arrow pointing east' />
              </div>
            </div>
          </ViewItem>
        </a>
        <ViewItem>
          <div className='feed-item' data-inactive>
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
        </ViewItem>
      </div>
    </div>
  );
}
