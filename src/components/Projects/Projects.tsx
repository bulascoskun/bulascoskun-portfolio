import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import projectsList from '../../utils/projectsList';
import SingleProject from './SingleProject';

const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section ref={ref} className="asteroid">
      {/* TITLE */}
      <div className="flex flex-row items-center justify-center w-full sticky top-[1rem] overflow-hidden z-[18]">
        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-200 text-center font-astronaut tracking-wider whitespace-nowrap px-8 bg-[var(--body-background)]
    z-10 rounded-lg"
        >
          PROJECTS
        </h2>
        <motion.div
          style={{ scaleX: scaleX }}
          className="w-full absolute bg-[var(--body-background)] h-4 flex items-center rounded-lg px-2"
        >
          <div className="border-b border-stone-500 w-full"></div>
        </motion.div>
      </div>

      {/* PROJECTS */}
      <div className="relative flex flex-col gap-20 xl:gap-80 py-12 xl:pt-36 xl:pb-52 z-[17]">
        {projectsList.map((project, index) => {
          return (
            <SingleProject
              key={project.id}
              {...project}
              orientation={index % 2 ? 'right' : 'left'}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
