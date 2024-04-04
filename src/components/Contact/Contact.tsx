import SectionTitle from '../SectionTitle';
import Satellite from './Satellite';
import ContactForm from './ContactForm';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const contactRow = [
  {
    name: 'Mail',
    value: 'bulascoskun@outlook.com',
    href: 'mailto:bulascoskun@outlook.com',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/bulascoskun',
    href: 'https://www.linkedin.com/in/bulascoskun/',
  },
  {
    name: 'GitHub',
    value: 'github.com/bulascoskun',
    href: 'https://github.com/bulascoskun',
  },
];

const variants = {
  initial: { opacity: 0, x: -20 },

  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <section className="overflow-hidden asteroid" id="contact">
      <SectionTitle title="CONTACT" />
      <div className="flex flex-col lg:flex-row justify-center gap-8 md:p-8">
        {/* LEFT */}
        <div className="mt-8 md:mt-0 p-4 sm:p-8 flex-1 flex flex-col gap-4 sm:gap-12">
          <ReactTyped
            cursorChar=""
            className="text-xl sm:text-2xl md:text-4xl text-center lg:text-start tracking-wider underline underline-offset-[20px] h-10 whitespace-nowrap"
            strings={["Let's work together!"]}
            startWhenVisible
            typeSpeed={50}
            startDelay={0}
          />

          <motion.ul
            viewport={{ once: true }}
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-col gap-8 p-4 mx-auto lg:mx-0 lg:pl-8"
          >
            {contactRow.map(({ name, value, href }, i) => {
              return (
                <motion.li
                  key={i}
                  variants={variants}
                  className="flex flex-col gap-2"
                >
                  <motion.h3
                    variants={variants}
                    className="tracking-wider text-lg sm:text-xl md:text-2xl text-gray-200"
                  >
                    {name}
                  </motion.h3>
                  <motion.a
                    variants={variants}
                    href={href}
                    target="_blank"
                    className="font-mono pl-4 w-min text-gray-300 hover:text-gray-100"
                  >
                    {value}
                  </motion.a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative">
          <Satellite />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
