import AboutMe from './components/AboutMe';
import Parallax from './components/Parallax/Parallax';
import Divider from './components/Divider/Divider';
import TechStack from './components/TechStack/TechStack';
import StarsBackground from './components/StarsBackground/StarsBackground';
import Projects from './components/Projects/Projects';
import Divider2 from './components/Divider/Divider2';
import Contact from './components/Contact/Contact';

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
      <Contact />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};
export default App;
