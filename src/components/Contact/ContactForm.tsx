import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ReactTyped } from 'react-typed';

const ContactForm = () => {
  const formRef = useRef<any>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    emailjs
      .sendForm('service_rlfpm9k', 'template_gontlv4', formRef.current, {
        publicKey: 'lhqOB0n_08kIayV5m',
      })
      .then(
        () => {
          // success
          setIsPending(false);
          setSuccess(true);
          setError(false);
        },
        (_) => {
          // error
          setIsPending(false);
          setError(true);
          setSuccess(false);
        }
      );
  };
  return (
    <motion.form
      onSubmit={sendEmail}
      ref={formRef}
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
        required
      />
      <input
        className="bg-[var(--body-color)] border border-white font-mono px-4 py-2 placeholder:font-bmspace"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <textarea
        className="bg-[var(--body-color)] border border-white h-full min-h-60 font-mono px-4 py-2 resize-none placeholder:font-bmspace"
        name="message"
        id="message"
        placeholder="Message"
        required
      />
      <motion.button
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        type="submit"
        className="bg-[#191552] py-2 px-16 ml-auto"
        disabled={isPending}
      >
        {!isPending ? 'Send' : 'Pending'}
      </motion.button>
      <div className="h-10 flex justify-start items-center">
        {error && (
          <ReactTyped
            cursorChar=""
            className="whitespace-nowrap"
            strings={['There was an error :(']}
            startWhenVisible
            typeSpeed={50}
            startDelay={0}
          />
        )}

        {success && (
          <ReactTyped
            cursorChar=""
            className="whitespace-nowrap"
            strings={['Success!']}
            startWhenVisible
            typeSpeed={50}
            startDelay={0}
          />
        )}
      </div>
    </motion.form>
  );
};
export default ContactForm;
