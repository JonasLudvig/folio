/* eslint-disable react/jsx-no-target-blank */
import linkedin from './static/linkedin.svg';
import github from './static/github.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div>
        <a
          href='https://www.linkedin.com/in/jonas-ludvig-lind/'
          target='_blank'
        >
          <img src={linkedin} alt='LinkedIn logo' />
        </a>
        <a href='https://github.com/jonasludvig/' target='_blank'>
          <img src={github} className='github-icon' alt='GitHub logo' />
        </a>
      </div>
      <p>Copyright &copy; 2023 Jonas Lind.</p>
      <p>All rights reserved.</p>
    </div>
  );
}
