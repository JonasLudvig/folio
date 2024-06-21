import { useEffect, useRef } from 'react';
import logo from './static/logo.svg';

export default function Navigation() {
  const navigationContainer = useRef<HTMLDivElement>(null);
  const navigation = useRef<HTMLDivElement>(null);
  const links = useRef<HTMLElement[]>([]);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !navigationContainer.current ||
        !links.current ||
        !navigation.current ||
        !image.current
      ) {
        return;
      }

      if (window.scrollY < 1) {
        navigationContainer.current.style.backgroundColor = 'transparent';
        image.current.style.transform = 'translateY(60px)';
        image.current.style.width = '48px';
        links.current?.forEach((link: any) => {
          link.style.fontSize = '28px';
          link.style.transform = 'translateY(60px)';
        });
      } else {
        navigationContainer.current.style.backgroundColor = '#131313';
        image.current.style.transform = 'unset';
        image.current.style.width = '36px';
        links.current?.forEach((link: any) => {
          link.style.fontSize = '18px';
          link.style.transform = 'unset';
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navigation-container' ref={navigationContainer}>
      <div className='navigation' ref={navigation}>
        <div>
          <img
            src={logo}
            alt='Logo reading "JL"'
            onClick={() => (window.location.href = '/')}
            ref={image}
          />
        </div>
        <div className='entries'>
          <div>
            <a
              href='/projects'
              ref={(link) => {
                if (link && !links.current?.includes(link))
                  links.current?.push(link);
              }}
            >
              Projects
            </a>
          </div>
          <div>
            <a
              href='/contact'
              ref={(link) => {
                if (link && !links.current?.includes(link))
                  links.current?.push(link);
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
