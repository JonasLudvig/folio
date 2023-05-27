import down from './static/down.svg';
import logo from './static/logo.svg';

export default function Banner() {
  return (
    <div className='banner'>
      <img src={logo} className='logo' alt='Logo reading "JL"' />
      <h1>Jonas Lind</h1>
      <h2>Full-stack Developer</h2>
      <img src={down} className='down' alt='Arrow pointing downward' />
    </div>
  );
}
