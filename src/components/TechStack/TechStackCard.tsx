import { motion } from 'framer-motion';

const TechStackCard = ({ icon }: any) => {
  return (
    <motion.div
      className="mx-8"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
    >
      {icon}
    </motion.div>
  );
};
export default TechStackCard;
