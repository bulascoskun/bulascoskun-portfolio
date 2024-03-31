import AboutMe from './components/AboutMe';
import Parallax from './components/Parallax/Parallax';
import Divider from './components/Divider/Divider';
import TechStack from './components/TechStack/TechStack';
import StarsBackground from './components/StarsBackground/StarsBackground';
import Projects from './components/Projects';
import Divider2 from './components/Divider/Divider2';

const App = () => {
  return (
    <main>
      <StarsBackground />
      <Parallax />
      <AboutMe />
      <TechStack />
      <Divider />
      <Projects />
      <Divider2 />
    </main>
  );
};
export default App;
