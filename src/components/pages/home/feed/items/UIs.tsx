import meadow from './static/meadow.jpg';

export default function APIs() {
  return (
    <>
      <div className='article-container'>
        <div>
          <h1>Juncture</h1>
          <h2>Developing user interfaces</h2>
          <p className='deck'>
            When building user interfaces I believe it key to plan ahead and to
            lay a solid foundation to fully support whatever functionallity
            intended for the project, across all devices, browsers and
            resuolutions. The design should instilt a intrinsic value, utilizing
            standards for UX and UI while still offering something unique and
            artistic. I want whatever I build to have a personality.
          </p>
          <img src={meadow} alt='Meadow' />
          <p className='body'>
            To me, the best way to start with a new design is to just start,
            straight in the browser. I think that tools like Figma have a lot to
            offer teams working on larger scale but that critical aspects are
            bound to get lost in translation when porting designs over to the
            production environment, making it difficult to ensure quality, as
            well as effectivity.
          </p>
          <p>
            I hold off introducing graphical elements, as I believe a great
            design should still be great without it. I also think the design
            should be self-sustained and not reliant on text or segments for
            support.
          </p>
        </div>
      </div>
    </>
  );
}
