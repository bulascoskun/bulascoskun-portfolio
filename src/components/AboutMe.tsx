import ulas from '../assets/images/other/ulas-outline.png';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const fromLeft = {
  initial: { x: -500, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const fromRight = {
  initial: { x: 500, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const AboutMe = () => {
  return (
    <section className="overflow-hidden asteroid" id="aboutMe">
      <SectionTitle title="ABOUT ME" />
      <div className="xl:p-16 flex gap-8">
        <div className="flex flex-col xl:flex-row items-center gap-16 py-8 container mx-auto">
          <motion.img
            viewport={{ once: true }}
            variants={fromLeft}
            initial={{ x: -300, opacity: 0 }}
            whileInView="whileInView"
            src={ulas}
            alt="Barış Ulaş Coşkun"
            className="aspect-[1152/1352] w-[400px] mb-8"
          />

          <motion.div
            viewport={{ once: true }}
            variants={fromRight}
            initial={{ x: 200, opacity: 0 }}
            whileInView="whileInView"
            className="flex flex-col gap-4 border border-gray-300 p-4 xl:p-8"
          >
            <motion.h3
              variants={fromRight}
              className=" xl:text-4xl text-stone-200"
            >
              Web developer & Engineer
            </motion.h3>
            <motion.p variants={fromRight} className="text-stone-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              officiis cumque fuga laborum voluptate similique autem cum dolorum
              sapiente, tempore a iure, iusto voluptas repellat nihil
              reprehenderit aperiam magni accusantium!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
