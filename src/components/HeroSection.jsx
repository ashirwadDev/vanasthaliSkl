import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center bg-[#0B3D0B] text-white text-center px-4">
      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Empowering Minds, <br className="hidden md:block" />
        Nurturing Futures
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Vanasthali Academy is dedicated to academic excellence and holistic
        development — shaping tomorrow’s leaders today.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link
          to="/about"
          className="inline-block bg-[#F7C948] text-[#0B3D0B] font-semibold px-6 py-3 rounded-lg hover:bg-[#C9E265] transition"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
