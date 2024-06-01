/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useRef } from 'react';
import right from './static/right.svg';
import reads from './type/reads.svg';
import { inViewport } from '../../../../modules/viewport';

export default function Feed() {
  const viewItems = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      viewItems.current?.forEach((item: any) => {
        item.style.opacity = 0;
        if (inViewport(item, item.offsetHeight - 100)) {
          item.hasAttribute('data-inactive')
            ? (item.style.opacity = 0.6)
            : (item.style.opacity = 1);
        }
      });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='feed'>
      <div className='feed-container'>
        <div
          className='feed-item'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
          data-inactive
        >
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
        <div
          className='feed-image'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
        >
          <img src={reads} alt='Reads' />
        </div>
        <a href='/transit'>
          <div
            className='feed-item'
            ref={(item) => {
              if (item && !viewItems.current?.includes(item))
                viewItems.current?.push(item);
            }}
          >
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
          <div
            className='feed-item'
            ref={(item) => {
              if (item && !viewItems.current?.includes(item))
                viewItems.current?.push(item);
            }}
          >
            <h3>Article</h3>
            <h4>Juncture</h4>
            <p>Few thoughts on building interfaces.</p>
            <div>
              <p>Read</p>
              <img src={right} alt='Arrow pointing east' />
            </div>
          </div>
        </a>
        <div
          className='feed-item'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
          data-inactive
        >
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
