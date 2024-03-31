import AboutMe from './components/AboutMe';
import Parallax from './components/Parallax/Parallax';
import Projects from './components/Divider/Divider';
import TechStack from './components/TechStack/TechStack';
import StarsBackground from './components/StarsBackground/StarsBackground';

const App = () => {
  return (
    <main>
      <StarsBackground />
      <Parallax />
      <AboutMe />
      <TechStack />
      <Projects />
    </main>
  );
};
export default App;
