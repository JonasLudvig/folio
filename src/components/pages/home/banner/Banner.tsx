import { useEffect, useState } from 'react';
import down from './static/down.svg';

export default function Banner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY / 2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='banner'>
      <h1 style={{ transform: `translateY(${-scrollY * 0.5}px)` }}>
        Jonas Lind
      </h1>
      <h2 style={{ transform: `translateY(${-scrollY * 0.5 + 60}px)` }}>
        Full-stack developer
      </h2>
      <img src={down} alt='Arrow pointing downward' />
      <div />
    </div>
  );
}
