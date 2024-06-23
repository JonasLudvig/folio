/* eslint-disable jsx-a11y/img-redundant-alt */
import stack from './type/stack.svg';
import turn from '../../../../static/icons/turn.svg';
import ViewItem from '../../../../hooks/ViewItem';

export default function Service() {
  return (
    <div className='service'>
      <div className='service-container'>
        <ViewItem>
          <div className='service-item'>
            <h4>Frontend</h4>
            <p>Interface development using modern techniques and frameworks.</p>
            <span>
              Streamlined and well considered methodology using frameworks like
              React.js, TypeScript and Sass.
            </span>
            <img src={turn} alt='Read more' />
          </div>
        </ViewItem>
        <div className='service-image'>
          <img src={stack} alt='Stack' />
        </div>
        <ViewItem>
          <div className='service-item'>
            <h4>Backend</h4>
            <p>Sustainable and secure user platform and utility development.</p>
            <span>
              Java, C# and PHP with focus on maintainability and best practice
              in regards to configuratin and design.
            </span>
            <img src={turn} alt='Read more' />
          </div>
        </ViewItem>
        <ViewItem>
          <div className='service-item'>
            <h4>Cloud</h4>
            <p>
              Database and server configuration, maintenance and optimization.
            </p>
            <span>
              Development utilizing techniques and cloud services like Apache
              HTTP Server, Microsoft Azure, SQL Server, MongoDb, MySQL, SQLite.
            </span>
            <img src={turn} alt='Read more' />
          </div>
        </ViewItem>
        <ViewItem>
          <div className='service-item'>
            <h4>Media</h4>
            <p>Standardized type, image and video media production.</p>
            <span>
              Technical orientation toward producing graphic content using
              vectors and bitmaps.
            </span>
            <img src={turn} alt='Read more' />
          </div>
        </ViewItem>
        <ViewItem>
          <div className='service-item'>
            <h4>Design</h4>
            <p>Web interface and graphic profile development.</p>
            <span>
              Prototyping and preliminary studies with a practical approach
              focusing on implementation and results.
            </span>
            <img src={turn} alt='Read more' />
          </div>
        </ViewItem>
        <ViewItem>
          <div className='service-item'>
            <h4>Requisite</h4>
            <p>Conceptualization and requisites analysis.</p>
            <span>
              Organizing and concretization with emphasis on feasibility,
              performance and delivery.
            </span>
            <img src={turn} alt='Read more' />
          </div>
        </ViewItem>
      </div>
    </div>
  );
}
