/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useRef } from 'react';
import stack from './type/stack.svg';
import { inViewport } from '../../../../modules/viewport';

export default function Service() {
  const viewItems = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      viewItems.current?.forEach((item: any) => {
        item.style.opacity = 0;
        if (inViewport(item, item.offsetHeight - 100)) item.style.opacity = 1;
      });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='service'>
      <div className='service-container'>
        <div
          className='service-item'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
        >
          <h4>Frontend</h4>
          <p>Interface development using modern techniques and frameworks.</p>
          <span>
            Streamlined and well considered methodology using frameworks like
            React.js, TypeScript and Sass.
          </span>
        </div>
        <div
          className='service-image'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
        >
          <img src={stack} alt='Stack' />
        </div>
        <div
          className='service-item'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
        >
          <h4>Backend</h4>
          <p>Sustainable and secure user platform and utility development.</p>
          <span>
            Java, C# and PHP with focus on maintainability and best practice in
            regards to configuratin and design.
          </span>
        </div>
        <div
          className='service-item'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
        >
          <h4>Cloud</h4>
          <p>
            Database and server configuration, maintenance and optimization.
          </p>
          <span>
            Development utilizing techniques and cloud services like Apache HTTP
            Server, Microsoft Azure, SQL Server, MongoDb, MySQL, SQLite.
          </span>
        </div>
        <div
          className='service-item'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
        >
          <h4>Media</h4>
          <p>Standardized type, image and video media production.</p>
          <span>
            Technical orientation toward producing graphic content using vectors
            and bitmaps.
          </span>
        </div>
        <div
          className='service-item'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
        >
          <h4>Design</h4>
          <p>Web interface and graphic profile development.</p>
          <span>
            Prototyping and preliminary studies with a practical approach
            focusing on implementation and results.
          </span>
        </div>
        <div
          className='service-item'
          ref={(item) => {
            if (item && !viewItems.current?.includes(item))
              viewItems.current?.push(item);
          }}
        >
          <h4>Requisite</h4>
          <p>Conceptualization and requisites analysis.</p>
          <span>
            Organizing and concretization with emphasis on feasibility,
            performance and delivery.
          </span>
        </div>
      </div>
    </div>
  );
}
