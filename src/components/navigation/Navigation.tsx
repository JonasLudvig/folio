import logo from './static/logo.svg';

export default function Banner() {
  return (
    <div className='navigation-container'>
      <div className='navigation'>
        <div>
          <img
            src={logo}
            alt='Logo reading "JL"'
            onClick={() => (window.location.href = '/')}
          />
        </div>
        <div className='entries'>
          <div>
            <a href='/projects'>Projects</a>
          </div>
          <div>
            <a href='/contact'>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
