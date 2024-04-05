import { useEffect, useState } from 'react';
import rocket from '../assets/images/other/rocket.png';
import { AnimatePresence, motion } from 'framer-motion';

const NavigationRocket = () => {
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.4) {
        setShowItem(true);
      } else {
        setShowItem(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <AnimatePresence>
        {showItem && (
          <motion.img
            initial={{ y: 200 }}
            animate={{ y: -5 }}
            transition={{ duration: 0.5 }}
            exit={{
              y: '-130dvh',
              transition: {
                duration: 0.4,
              },
            }}
            src={rocket}
            className="fixed w-20 right-[1rem] bottom-[0] z-[100] cursor-pointer"
            onClick={scrollToTop}
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default NavigationRocket;
