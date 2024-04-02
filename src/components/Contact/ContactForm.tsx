import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.form
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 5 }}
      className="flex flex-col gap-8 p-8 h-full"
    >
      <h3 className="text-3xl">Mail Me</h3>
      <input
        className="bg-[var(--body-color)] border border-white font-mono px-4 py-2 placeholder:font-bmspace"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        className="bg-[var(--body-color)] border border-white font-mono px-4 py-2 placeholder:font-bmspace"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
      />
      <textarea
        className="bg-[var(--body-color)] border border-white h-full min-h-60 font-mono px-4 py-2 resize-none placeholder:font-bmspace"
        name="message"
        id="message"
        placeholder="Message"
      />
      <motion.button
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        type="submit"
        className="bg-[#191552] py-2 px-16 ml-auto"
      >
        Send
      </motion.button>
    </motion.form>
  );
};
export default ContactForm;
