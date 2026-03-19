import { motion } from 'framer-motion';

const Section = ({ children, delay = 0, last = false }) => (
  <motion.section
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={last ? '' : 'mb-16'}
  >
    {children}
  </motion.section>
);

export default Section;