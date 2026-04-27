import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex pt-20 items-center bg-[#020617] text-white px-6 overflow-hidden">

      {/* 🌌 Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] bottom-[-150px] right-[-150px] animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* 🧠 LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 border border-green-500/40 rounded-full text-green-400 text-sm bg-green-500/10"
          >
            🚀 Disponible pour missions freelance
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Salut, moi c’est{" "}
            <span className="text-green-400 drop-shadow-[0_0_12px_rgba(34,197,94,0.7)]">
              Jiradain
            </span>
            <br />
            Développeur Web
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0"
          >
            Je crée des applications modernes, rapides et performantes avec{" "}
            <span className="text-green-400">React</span>,{" "}
            <span className="text-green-400">TypeScript</span> et{" "}
            <span className="text-green-400">Laravel</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-green-500 text-black font-semibold px-7 py-3 rounded-xl shadow-lg shadow-green-500/20"
            >
              Voir mes projets
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/237651475950"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 px-7 py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </motion.a>

          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-gray-500 text-xs sm:text-sm"
          >
            React • TypeScript • Laravel • Tailwind CSS • Bootstrap
          </motion.div>

        </div>

        {/* 🖼️ RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >

          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full group-hover:scale-110 transition duration-500"></div>

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full border-4 border-green-500 overflow-hidden shadow-2xl shadow-green-500/20"
            >
              <img
                src="images/jiradain.jpeg"
                alt="Jiradain"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;