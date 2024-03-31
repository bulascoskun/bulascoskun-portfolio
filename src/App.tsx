import AboutMe from './components/AboutMe';
import Parallax from './components/Parallax/Parallax';
import Divider from './components/Divider/Divider';
import TechStack from './components/TechStack/TechStack';
import StarsBackground from './components/StarsBackground/StarsBackground';
import Projects from './components/Projects';

const App = () => {
  return (
    <main>
      <StarsBackground />
      <Parallax />
      <AboutMe />
      <TechStack />
      <Divider />
      <Projects />
    </main>
  );
};
export default App;
