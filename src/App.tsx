import { useModal } from './components/Modal/ModalContext';

import AboutMe from './components/AboutMe';
import Parallax from './components/Parallax/Parallax';
import Divider from './components/Divider/Divider';
import TechStack from './components/TechStack/TechStack';
import StarsBackground from './components/StarsBackground/StarsBackground';
import Projects from './components/Projects/Projects';
import Divider2 from './components/Divider/Divider2';
import Contact from './components/Contact/Contact';
import Footer from './components/Divider/Footer';
import PhotoModal from './components/Modal/PhotoModal';
import NavigationRocket from './components/NavigationRocket';

const App = () => {
  const { isModalOpen } = useModal();

  return (
    <main>
      {isModalOpen && <PhotoModal />}
      <NavigationRocket />
      <StarsBackground />
      <Parallax />
      <AboutMe />
      <TechStack />
      <Divider />
      <Projects />
      <Divider2 />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
