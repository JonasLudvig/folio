import down from './static/down.svg';

export default function Banner() {
  return (
    <div className='banner'>
      <div className='cloud-wrapper'>
        <div className='cloud-container'>
          <div className='c-1' />
          <div className='c-2' />
          <div className='c-3' />
          <div className='c-4' />
          <div className='c-5' />
          <div className='c-6' />
        </div>
      </div>
      <h1>Jonas Lind</h1>
      <h2>Full-stack Developer</h2>
      <img src={down} className='down' alt='Arrow pointing downward' />
    </div>
  );
}
