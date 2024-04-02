import { motion } from 'framer-motion';
import ResponsiveImages from './ResponsiveImages';

type SingleProject = {
  title: string;
  img: string[];
  desc: string[];
  live: string;
  github: string;
  orientation: string;
};

const variants = {
  initial: { opacity: 0, y: 30 },

  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const SingleProject = ({
  title,
  img,
  desc,
  live,
  github,
  orientation,
}: SingleProject) => {
  if (orientation === 'left')
    return (
      <div className="flex flex-col xl:flex-row items-center gap-8 container mx-auto">
        {/* IMAGES */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              staggerChildren: 0.5,
            },
          }}
          className="hidden xl:block w-full xl:w-1/2 relative"
        >
          <motion.img
            initial={{
              y: '-25%',
              rotate: 0,
            }}
            whileHover={{
              y: '-5%',
              rotate: 5,
              transition: {
                delay: 0.3,
              },
            }}
            src={img[0]}
            className="absolute left-0 max-w-[80%] w-[600px] aspect-[600/296]"
          />
          <motion.img
            initial={{
              y: '-75%',
              rotate: 0,
            }}
            whileHover={{
              y: '-90%',
              rotate: -5,
              transition: {
                delay: 0.3,
              },
            }}
            src={img[1]}
            className="absolute -translate-y-[75%] right-0 max-w-[80%] shadow-md shadow-stone-800 w-[600px] 
            aspect-[600/296] z-10"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          viewport={{ once: true }}
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          className="w-full xl:w-1/2 flex flex-col gap-6 px-4 xl:pr-6"
        >
          <h2 className="text-xl xl:text-3xl">{title}</h2>
          <motion.div variants={variants} className="flex flex-col gap-4">
            {desc.map((desc, i) => {
              return (
                <motion.p variants={variants} key={i} className="font-mono">
                  {desc}
                </motion.p>
              );
            })}
          </motion.div>
          <ResponsiveImages images={img} />

          <div className="flex gap-8 mx-auto xl:ml-auto">
            <motion.a
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              target="_blank"
              className="bg-[#191552] py-2 px-4 text-sm xl:text-md"
              href={live}
            >
              Live Site
            </motion.a>
            <motion.a
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              target="_blank"
              className="bg-[#d100a4] py-2 px-4 text-sm xl:text-md"
              href={github}
            >
              More on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    );

  if (orientation === 'right')
    return (
      <div className="flex flex-col xl:flex-row items-center gap-8 container mx-auto">
        {/* CONTENT */}
        <motion.div
          viewport={{ once: true }}
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          className="w-full xl:w-1/2 flex flex-col gap-6 px-4 xl:pr-6"
        >
          <h2 className="text-xl xl:text-3xl">{title}</h2>
          <motion.div variants={variants} className="flex flex-col gap-4">
            {desc.map((desc, i) => {
              return (
                <motion.p variants={variants} key={i} className="font-mono">
                  {desc}
                </motion.p>
              );
            })}
          </motion.div>
          <ResponsiveImages images={img} />
          <div className="flex gap-8 mx-auto xl:ml-auto">
            <motion.a
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              target="_blank"
              className="bg-[#d100a4] py-2 px-4 text-sm xl:text-md"
              href={live}
            >
              Live Site
            </motion.a>
            <motion.a
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              target="_blank"
              className="bg-[#191552] py-2 px-4 text-sm xl:text-md"
              href={github}
            >
              More on GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGES */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              staggerChildren: 0.5,
            },
          }}
          className="hidden xl:block w-full xl:w-1/2 relative"
        >
          <motion.img
            initial={{
              y: '-25%',
              rotate: 0,
            }}
            whileHover={{
              y: '-10%',
              rotate: -5,
              transition: {
                delay: 0.3,
              },
            }}
            src={img[0]}
            className="absolute right-0 max-w-[80%] w-[600px] aspect-[600/296]"
          />
          <motion.img
            initial={{
              y: '-75%',
              rotate: 0,
            }}
            whileHover={{
              y: '-90%',
              rotate: 5,
              transition: {
                delay: 0.3,
              },
            }}
            src={img[1]}
            className="absolute -translate-y-[75%] left-0 max-w-[80%] shadow-md shadow-stone-800 w-[600px] aspect-[600/296]"
          />
        </motion.div>
      </div>
    );
};
export default SingleProject;
