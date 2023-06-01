import down from './static/down.svg';
import logo from './static/logo.svg';

export default function Banner() {
  return (
    <div className='banner'>
      {/* <img src={logo} className='logo' alt='Logo reading "JL"' /> */}
      <div className='cloud-wrapper'>
        <div className='cloud-container'>
          <div className='c-1'></div>
          <div className='c-2'></div>
          <div className='c-3'></div>
          <div className='c-4'></div>
          <div className='c-5'></div>
          <div className='c-6'></div>
        </div>
      </div>
      <h1>Jonas Lind</h1>
      <h2>Full-stack Developer</h2>
      <img src={down} className='down' alt='Arrow pointing downward' />
    </div>
  );
}
