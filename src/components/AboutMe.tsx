import ulas from '../assets/images/other/ulas-outline.png';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { techStackNames } from '../utils/techStackIcons';

// img variables
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
// text variables
const fromRight = {
  initial: { x: 200, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
};
// Tech stack variables
const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AboutMe = () => {
  return (
    <section className="overflow-hidden asteroid" id="aboutMe">
      <SectionTitle title="ABOUT ME" />
      <div className="xl:p-16 flex justify-center gap-8">
        <div className="flex flex-col xl:flex-row items-center gap-16 py-8">
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
            initial="initial"
            whileInView="whileInView"
            className="flex flex-col gap-8 max-w-[800px] lg:border  border-gray-300 p-4 lg:p-8 text-lg"
          >
            <h3 className="text-xl xl:text-3xl text-stone-200">
              Web developer & Engineer
            </h3>

            <motion.div
              viewport={{ once: true }}
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              className="flex flex-col gap-4"
            >
              <motion.p variants={listItem} className="font-mono">
                Hi! I am Ulaş 👋. Proficient in React, Node.js, and Express.js,
                SQL and MongoDB databases. Skilled in building and maintaining
                web applications. Well-versed in TypeScript and GitHub for
                version control.
              </motion.p>
              <motion.p variants={listItem} className="font-mono">
                I'm currently on the look out for a role in web development,
                ideally using React framework. I'd especially love to work in an
                environment where I can make an impact quickly. If you're
                hiring, feel free to contact me!
              </motion.p>

              <motion.div variants={listItem} className="flex flex-col gap-4 ">
                <p className="font-mono py-4">
                  Here are a few technologies I've been working with recently:
                </p>

                <motion.ul
                  viewport={{ once: true }}
                  variants={listContainer}
                  initial="hidden"
                  whileInView="show"
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {techStackNames.map((item) => {
                    return (
                      <motion.li
                        variants={listItem}
                        key={item}
                        className="border border-[#8f00d1] hover:bg-[#8f00d1] py-2 px-4 
                        text-sm xl:text-md text-center transition"
                      >
                        {item}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
