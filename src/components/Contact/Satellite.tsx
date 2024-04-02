import { motion } from 'framer-motion';

const Satellite = () => {
  return (
    <motion.svg
      viewport={{ once: true }}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4.25 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      fill="#ffffff32"
      width="400px"
      height="400px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 3.25 }}
        d="M30,14H28A10.0113,10.0113,0,0,0,18,4V2A12.0137,12.0137,0,0,1,30,14Z"
      />
      <motion.path
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 2.25 }}
        d="M26,14H24a6.0067,6.0067,0,0,0-6-6V6A8.0092,8.0092,0,0,1,26,14Z"
      />
      <motion.path
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 1.5 }}
        d="M16,28V24.96a9.9124,9.9124,0,0,0,7.3179-2.208,1.8482,1.8482,0,0,0,.6777-1.3344,1.8,1.8,0,0,0-.5239-1.36L18.4141,15,21,12.4141,19.5859,11,17,13.5859,11.9419,8.5273a1.8145,1.8145,0,0,0-1.36-.5229,1.845,1.845,0,0,0-1.3339.6782,9.9566,9.9566,0,0,0-.5127,11.95L6.2793,28H2v2H30V28ZM10.68,10.0938,21.9058,21.32A8.0011,8.0011,0,0,1,10.68,10.0938ZM14,28H8.3875l1.8757-5.627A9.9894,9.9894,0,0,0,14,24.5435Z"
        strokeWidth="1"
      />
    </motion.svg>
  );
};
export default Satellite;
