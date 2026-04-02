import "./Footer.css";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer__inner">
        <motion.span whileHover={{ y: -1 }}>
          © 2026 Jose Pablo Araya
        </motion.span>

        <motion.span className="footer__muted" whileHover={{ y: -1 }}>
          {/* Built with React */}
        </motion.span>
      </div>
    </motion.footer>
  );
};

export default Footer;