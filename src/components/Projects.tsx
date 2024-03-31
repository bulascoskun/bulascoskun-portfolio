import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

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
      <div className="flex flex-row items-center justify-center w-full sticky top-0">
        <h2
          className="text-8xl text-stone-200 text-center font-astronaut tracking-wider whitespace-nowrap px-8 bg-[var(--body-background)]
        z-30"
        >
          PROJECTS
        </h2>
        <motion.div
          style={{ scaleX: scaleX }}
          className="border-b border-stone-500 w-full absolute"
        />
      </div>
    </section>
  );
};
export default Projects;
