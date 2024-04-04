import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Parallax.scss';
import ShapeDivider from './ShapeDivider';
import rocket from '../../assets/images/other/rocket.png';
import planets from '../../assets/images/other/planets.png';

const links = [
  { title: 'About Me', href: '#aboutMe' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

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

  const yPlanets = useTransform(scrollYProgress, [0, 1], ['0%', '-150%']);
  const yRocket = useTransform(scrollYProgress, [0, 1], ['60%', '-350%']);

  return (
    <section className="parallax" ref={ref}>
      <motion.img
        src={planets}
        style={{ x: '-50%', y: yPlanets }}
        className="hidden md:block absolute h-[190px] aspect-[289/180]  z-20 object-contain
        top-1/2 left-1/2"
      />

      <motion.img
        className="select-none absolute z-[20] bottom-0 sm:w-[500px] sm:right-0"
        src={rocket}
        alt="Space Ship"
        style={{ y: yRocket }}
      />

      <motion.div
        className="absolute top-[calc(50%_-_182px)] lg:mx-16 p-8 bg-[#000000de] lg:bg-[#0000008e] flex flex-col gap-4 z-[25]"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl lg:text-7xl text-gray-200"
        >
          BARIS ULAS COSKUN
        </motion.h1>
        <motion.h3
          variants={textVariants}
          className="text-2xl lg:text-4xl text-gray-300"
        >
          Web developer
        </motion.h3>
        <motion.ul
          variants={textVariants}
          className="flex flex-col md:flex-row gap-4 text-gray-300"
        >
          {links.map((link) => {
            return (
              <motion.li
                variants={textVariants}
                key={link.title}
                className="hover:text-gray-200 whitespace-nowrap"
              >
                <a href={link.href}>{link.title}</a>
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
