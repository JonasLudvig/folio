import rock from './static/rock.jpg';

export default function Operation() {
  return (
    <div className='operation'>
      <div>
        <div>
          <h2>In a nutshell</h2>
        </div>
        <div className='operation-header'>
          <h1>Work & tenet</h1>
        </div>
        <div>
          <div>
            <p>
              I specialize in leveraging a wide array of frameworks to design,
              develop, publish, and maintain applications for web, desktop and
              mobile.
            </p>
            <p>
              My utmost goal is to provide robust and reliable solutions,
              meticulously managing every aspect of standardized software
              development.
            </p>
            <p>
              Moreover, I am deeply committed to promoting sustainability and
              embracing accountability for the environment and climate.
            </p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={rock} alt='Foggy rock' />
      </div>
    </div>
  );
}
