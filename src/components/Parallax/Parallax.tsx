import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Parallax.scss';
import rocket from '../../assets/images/other/rocket.png';
import ShapeDivider from './ShapeDivider';

const links = ['Home', 'About Me', 'Projects', 'Contact'];

const socials = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/bulascoskun/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    href: 'https://github.com/bulascoskun',
    icon: <FaGithub />,
  },
];

const textVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Parallax = () => {
  const ref = useRef() as any;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yStars2 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ['0%', '-250%']);
  const yRocket = useTransform(scrollYProgress, [0, 1], ['60%', '-450%']);

  return (
    <section className="parallax" ref={ref}>
      <motion.div className="stars2" style={{ y: yStars2 }}></motion.div>
      <motion.div className="planets" style={{ y: yPlanets }}></motion.div>
      <motion.img
        className="rocket"
        src={rocket}
        alt="Space Ship"
        style={{ y: yRocket }}
      />

      <motion.div
        className="absolute top-[40%] ml-16 p-8 bg-[#0000008e] flex flex-col gap-4"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={textVariants}
          className="font-bold text-7xl text-gray-200"
        >
          Barış Ulaş Coşkun
        </motion.h1>
        <motion.h3
          variants={textVariants}
          className="font-semibold text-4xl text-gray-300"
        >
          Web developer
        </motion.h3>
        <motion.ul variants={textVariants} className="flex gap-4 text-gray-300">
          {links.map((link) => {
            return (
              <motion.li
                variants={textVariants}
                key={link}
                className="hover:text-gray-200"
              >
                {link}
              </motion.li>
            );
          })}
        </motion.ul>
        <motion.ul variants={textVariants} className="flex gap-4 text-gray-300">
          {socials.map((social) => {
            return (
              <motion.a
                variants={textVariants}
                key={social.id}
                href={social.href}
                target="_blank"
                className="text-4xl hover:text-gray-200"
              >
                {social.icon}
              </motion.a>
            );
          })}
        </motion.ul>
      </motion.div>
      <ShapeDivider />
    </section>
  );
};
export default Parallax;
