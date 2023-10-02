/* eslint-disable react/jsx-no-target-blank */
import github from '../../../static/icons/github.svg';
import open from '../../../static/icons/open.svg';
import ditrDesktop from './static/ditr-desktop.png';
import ditrMobile from './static/ditr-mobile.png';
import twDesktop from './static/tw-desktop.png';

export default function Projects() {
  return (
    <>
      <div className='projects'>
        <div className='projects-container'>
          <div className='projects-item'>
            <h4>ASP.NET Core Web REST API and Application</h4>
            <p>
              User platform to publish and manage live website contents with
              user administration and features, such as authorization, data
              encryption, key vaulting and extensive input control. Frontend and
              backend subsists mutually isolated and self&#8209;sustained.
            </p>
            <div className='preview'>
              <div className='preview-desktop'>
                <img src={ditrDesktop} alt='Application on desktop' />
              </div>
              <div className='preview-mobile'>
                <img src={ditrMobile} alt='Application on desktop' />
              </div>
            </div>
            <div>
              <a
                href='https://github.com/jonasludvig/cms-web-api/'
                target='_blank'
              >
                <img src={github} className='icon repo' alt='GitHub logo' />
              </a>
              <a href='https://qsdlr.org/cms/' target='_blank'>
                <img src={open} className='icon' alt='Open in new tab' />
              </a>
            </div>
            <div className='project-stack-container'>
              <div>
                <p>.NET 7</p>
              </div>
              <div>
                <p>ASP.NET Core</p>
              </div>
              <div>
                <p>Entity Framework</p>
              </div>
              <div>
                <p>Unit of Work</p>
              </div>
              <div>
                <p>C#</p>
              </div>
              <div>
                <p>XML</p>
              </div>
              <div>
                <p>YAML</p>
              </div>
              <div>
                <p>MySQL</p>
              </div>
              <div>
                <p>Azure</p>
              </div>
              <div>
                <p>TypeScript</p>
              </div>
              <div>
                <p>Sass</p>
              </div>
            </div>
          </div>
          <div className='projects-item'>
            <h4>Twitch REST API and Application</h4>
            <p>
              Application for returning live Twitch data. API stores and
              validates key returned by the Twitch API to reference with
              requests, returning responses as JSONs. Client application manages
              all user data client-side.
            </p>
            <div className='preview-desktop'>
              <img src={twDesktop} alt='Application on desktop' />
            </div>
            <div>
              <a
                href='https://github.com/jonasludvig/twitch-web-api-client/'
                target='_blank'
              >
                <img src={github} className='icon repo' alt='GitHub logo' />
              </a>
              <a
                href='https://qsdlr.org/twitch-web-api-client/'
                target='_blank'
              >
                <img src={open} className='icon' alt='Open in new tab' />
              </a>
            </div>
            <div className='project-stack-container'>
              <div>
                <p>PHP</p>
              </div>
              <div>
                <p>FTPS</p>
              </div>
              <div>
                <p>Apache</p>
              </div>
              <div>
                <p>Bash</p>
              </div>
              <div>
                <p>cURL</p>
              </div>
              <div>
                <p>OAuth 2.0</p>
              </div>
              <div>
                <p>TypeScript</p>
              </div>
              <div>
                <p>Sass</p>
              </div>
            </div>
          </div>

          <div className='projects-item'>
            <h4>Portfolio</h4>
            <p>Design and continuous development of this website.</p>
            <div>
              <a href='https://github.com/jonasludvig/folio/' target='_blank'>
                <img
                  src={github}
                  className='icon repo minor'
                  alt='GitHub logo'
                />
              </a>
            </div>
            <div className='project-stack-container'>
              <div>
                <p>React.js</p>
              </div>
              <div>
                <p>FTPS</p>
              </div>
              <div>
                <p>TypeScript</p>
              </div>
              <div>
                <p>Sass</p>
              </div>
              <div>
                <p>Photoshop</p>
              </div>
              <div>
                <p>Illustrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
