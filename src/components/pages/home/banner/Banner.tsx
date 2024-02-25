import down from './static/down.svg';

export default function Banner() {
  return (
    <div className='banner'>
      <h1>Jonas Lind</h1>
      <h2>Full-stack developer</h2>
      <img src={down} className='down' alt='Arrow pointing downward' />
      <div></div>
    </div>
  );
}
