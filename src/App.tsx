import './App.scss';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Home from './components/pages/home/Home';
import APIs from './components/pages/home/feed/items/APIs';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import UIs from './components/pages/home/feed/items/UIs';

function App() {
  let query;
  switch (window.location.pathname) {
    case '/transit':
      query = <APIs />;
      break;
    case '/juncture':
      query = <UIs />;
      break;
    case '/projects':
      query = <Projects />;
      break;
    case '/contact':
      query = <Contact />;
      break;
    default:
      query = <Home />;
      break;
  }

  return (
    <div className='App'>
      <Navigation />
      {query}
      <Footer />
    </div>
  );
}

export default App;
