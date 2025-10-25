import { motion } from "framer-motion";

const AboutSection = () => {
  const cards = [
    {
      title: "Our Vision",
      text: "To inspire young minds towards academic excellence, creativity, and moral integrity through quality education and a nurturing environment.",
      delay: 0.2,
    },
    {
      title: "Our Mission",
      text: "To empower students with knowledge, confidence, and discipline — preparing them to become compassionate global citizens and future leaders.",
      delay: 0.4,
    },
    {
      title: "Principal’s Message",
      text: "At Vanasthali Academy, we believe education is not just about learning facts, but developing the ability to think independently, act responsibly, and grow endlessly.",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 bg-white text-center px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-heading font-bold text-[#0B3D0B] mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time section enters 30% view
      >
        About Vanasthali Academy
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#0B3D0B] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: card.delay,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }} // 👈 animates again when re-entered
          >
            <h3 className="text-2xl font-semibold text-[#F7C948] mb-3">
              {card.title}
            </h3>
            <p className="text-gray-200 text-base leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
