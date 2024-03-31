import { motion } from 'framer-motion';

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
      <div className="flex items-center gap-8 container mx-auto">
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
          className="w-1/2 relative"
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
            className="absolute left-0 w-[80%]"
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
            className="absolute -translate-y-[75%] right-0 w-[80%] shadow-md shadow-stone-800"
          />
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          className="w-1/2 flex flex-col gap-6 pr-6"
        >
          <h2 className="text-3xl">{title}</h2>
          <div className="flex flex-col gap-4">
            {desc.map((desc, i) => {
              return (
                <p key={i} className="font-mono">
                  {desc}
                </p>
              );
            })}
          </div>
          <div className="flex gap-8 ml-auto">
            <a target="_blank" className="bg-[#191552] py-2 px-4" href={live}>
              Live Site
            </a>
            <a target="_blank" className="bg-[#d100a4] py-2 px-4" href={github}>
              More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    );

  if (orientation === 'right')
    return (
      <div className="flex items-center gap-8 container mx-auto">
        <motion.div
          viewport={{ once: true }}
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          className="w-1/2 flex flex-col gap-6 pr-6"
        >
          <h2 className="text-3xl">{title}</h2>
          <div className="flex flex-col gap-4">
            {desc.map((desc, i) => {
              return (
                <p key={i} className="font-mono">
                  {desc}
                </p>
              );
            })}
          </div>
          <div className="flex gap-8 ml-auto">
            <a target="_blank" className="bg-[#191552] py-2 px-4" href={live}>
              Live Site
            </a>
            <a target="_blank" className="bg-[#d100a4] py-2 px-4" href={github}>
              More on GitHub
            </a>
          </div>
        </motion.div>

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
          className="w-1/2 relative"
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
            className="absolute right-0 w-[80%]"
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
            className="absolute -translate-y-[75%] left-0 w-[80%] shadow-md shadow-stone-800"
          />
        </motion.div>
      </div>
    );
};
export default SingleProject;
