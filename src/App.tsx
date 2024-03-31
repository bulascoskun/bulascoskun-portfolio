import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Parallax from './components/Parallax/Parallax';
import Projects from './components/Divider/Divider';
import TechStack from './components/TechStack/TechStack';

const App = () => {
  return (
    <main>
      <Navbar />
      <Parallax />
      <AboutMe />
      <TechStack />
      <Projects />
    </main>
  );
};
export default App;
