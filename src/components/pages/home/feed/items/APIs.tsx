import clouds from './static/clouds.jpg';

export default function APIs() {
  return (
    <>
      <div className='article-container'>
        <div>
          <h1>Transit</h1>
          <h2>APIs, general practice</h2>
          <p className='deck'>
            My technical stack when developing APIs varies with scale and
            purpose. I typically rely on ASP.NET Core and Java for building user
            platforms and doing greater business logic, utilizing object
            relational mapping for secure and reliable database operations. I
            have a university of applied sciences degree in the .NET framework,
            while Java was my introduction to strongly typed procedural
            programming at university in the spring of 2012.
          </p>
          <img src={clouds} alt='Clouds' />
          <p className='body'>
            For lesser REST APIs, often times to be used in a greater context as
            a microservice, I may use PHP. Working with PHP REST APIs also means
            configuring Apache HTTP servers and protocols.
          </p>
          <p>
            Lastly I utilize Node.js for server-side rendering and data caching
            with Next.js, in conjuction with other backend technologies
            supporting the application.
          </p>
          <p>
            I generally think most systems have something to gain from adhering
            to the principle of <i>single responsibility</i>, which often times
            means working cross-origin.
          </p>
        </div>
      </div>
    </>
  );
}
