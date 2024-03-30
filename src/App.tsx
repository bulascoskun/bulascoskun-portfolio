import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Parallax from './components/Parallax/Parallax';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';

const App = () => {
  return (
    <main>
      <Navbar />
      <Parallax />
      <AboutMe />
      <TechStack />
      <Projects />
      <div className="h-[1000px]"></div>
    </main>
  );
};
export default App;
