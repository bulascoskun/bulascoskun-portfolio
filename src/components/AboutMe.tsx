import ulas from '../assets/images/other/ulas-outline.png';
import { motion } from 'framer-motion';

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
    <section className="overflow-hidden">
      <motion.div
        viewport={{ once: true }}
        variants={fromRight}
        initial="initial"
        whileInView="whileInView"
        className="flex items-center font-[100] gap-4 w-[50%] ml-auto mt-16"
      >
        <p className="text-end text-stone-500">
          I focus on latest technologies in web development
        </p>
        <div className="border-b border-stone-500 w-full" />
      </motion.div>
      <div className="p-16 flex flex-col gap-8">
        <motion.h2
          viewport={{ once: true }}
          variants={fromLeft}
          initial="initial"
          whileInView="whileInView"
          className="font-[100] text-5xl text-stone-200 container mx-auto"
        >
          ABOUT ME
        </motion.h2>
        <div className="flex items-center gap-16 container mx-auto">
          <motion.img
            viewport={{ once: true }}
            variants={fromLeft}
            initial={{ x: -300, opacity: 0 }}
            whileInView="whileInView"
            src={ulas}
            alt="Barış Ulaş Coşkun"
            // className="w-full h-full"
            className="aspect-[1152/1352] w-[400px]"
          />

          <motion.div
            viewport={{ once: true }}
            variants={fromRight}
            initial={{ x: 200, opacity: 0 }}
            whileInView="whileInView"
            className="flex flex-col gap-4 border border-gray-300 p-8"
          >
            <motion.h3 className="text-4xl text-stone-200">
              Web developer & Engineer
            </motion.h3>
            <motion.p className="text-stone-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              repudiandae nihil deserunt quo autem. Voluptatibus eligendi
              repudiandae rem commodi. Quaerat accusamus sit quia exercitationem
              tenetur, nostrum consectetur hic obcaecati ad facere dolor, fugiat
              aperiam autem fuga totam debitis officiis! Excepturi porro eius
              tenetur est quibusdam error minima nesciunt, adipisci facilis
              corrupti soluta saepe voluptas ab nemo velit debitis quaerat
              impedit accusamus sunt. Vel, ab officia veritatis adipisci autem
              repellat error id cumque ullam eaque nobis tempore quae magni
              dolores quas excepturi, corporis in hic voluptatibus iusto dicta.
              Saepe soluta autem odit culpa repellendus ratione libero
              perferendis, similique ullam provident adipisci optio ducimus quis
              illo doloribus aspernatur obcaecati iure, ut ad. Iste quisquam
              inventore illo illum dolorum delectus voluptates labore eos
              tenetur quae nemo voluptate, minus quasi molestiae nobis
              accusantium est rem asperiores dolore perspiciatis, ducimus
              veritatis quo amet. Sapiente ducimus id tempora voluptate magnam
              repudiandae eos, corrupti aliquid praesentium, dignissimos iure
              ipsam natus sed voluptatum aliquam cum deleniti saepe quis. Nobis
              quos, assumenda quidem, nesciunt dolore illo, cupiditate
              reiciendis hic temporibus non cum distinctio maiores sint
              praesentium. Nisi quidem earum quisquam maxime cupiditate expedita
              facilis inventore voluptatibus at rem ducimus accusantium
              laudantium doloremque, nulla illum vitae praesentium nostrum
              repudiandae sequi?
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
