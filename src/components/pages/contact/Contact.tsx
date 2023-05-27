import trees from './static/trees.jpg';

export default function Contact() {
  return (
    <>
      <div className='contact'>
        <div>
          <img src={trees} alt='Trees' />
        </div>
        <div>
          <h1>Contact</h1>
          <p>Find me on LinkedIn. Links in footer.</p>
        </div>
      </div>
    </>
  );
}
