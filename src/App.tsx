import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Parallax from './components/Parallax/Parallax';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <main>
      <Navbar />
      <Parallax />
      <AboutMe />
      <TechStack />
    </main>
  );
};
export default App;
