import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // keep animating every time user scrolls back
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50 text-gray-800">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-[#0B3D0B]">About Us</h2>
        <p className="text-lg leading-relaxed">
          Our school is committed to providing a balanced education that focuses on
          academic excellence, creativity, and holistic development. We aim to create
          an environment where every student feels valued and inspired to reach their
          full potential.
        </p>
      </motion.div>
    </section>
  );
}
