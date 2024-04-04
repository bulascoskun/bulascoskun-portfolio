import { useEffect, useState } from 'react';
import rocket from '../assets/images/other/rocket.png';
import { AnimatePresence, motion } from 'framer-motion';

const NavigationRocket = () => {
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Window'un scroll pozisyonunu al
      const scrollPosition = window.scrollY;
      // Eğer scroll pozisyonu 100 dvh geçtiyse ve belirli bir şey belirsin istiyorsak
      if (scrollPosition > window.innerHeight * 0.9) {
        setShowItem(true);
      } else {
        setShowItem(false);
      }
    }
    // Scroll olayını dinleyen event listener ekleyelim
    window.addEventListener('scroll', handleScroll);
    // Clean-up: Component kaldırıldığında event listener'ı kaldır
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animasyonlu kaydırma için
    });
  };

  return (
    <>
      <AnimatePresence>
        {showItem && (
          <motion.img
            initial={{ y: 200 }}
            animate={{ y: -5 }}
            transition={{ duration: 0.7 }}
            exit={{
              y: '-130dvh',
              transition: {
                duration: 0.7,
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
