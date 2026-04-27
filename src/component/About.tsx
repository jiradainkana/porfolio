import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#020617] text-white px-6 overflow-hidden">

      {/* 🌿 Background */}
      <div className="absolute w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-green-500/5 rounded-full blur-[140px] top-[-200px] right-[-200px]"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-start">

        {/* 🧠 LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >

          <span className="text-green-400 text-xs sm:text-sm uppercase tracking-widest">
            À propos de moi
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-5 leading-tight">
            Je crée des produits web{" "}
            <span className="text-green-500">performants et modernes</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            Développeur web spécialisé en React et TypeScript, je conçois des interfaces rapides,
            scalables et orientées expérience utilisateur.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            Mon objectif est simple : transformer une idée en produit digital propre et prêt pour la production.
          </p>

          {/* 📊 STATS RESPONSIVE */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-[#0f172a] border border-green-500/10 rounded-xl p-4 text-center hover:border-green-500/40 transition">
              <p className="text-green-400 text-xl md:text-2xl font-bold">10+</p>
              <p className="text-gray-500 text-xs sm:text-sm">Projets</p>
            </div>

            <div className="bg-[#0f172a] border border-green-500/10 rounded-xl p-4 text-center hover:border-green-500/40 transition">
              <p className="text-green-400 text-xl md:text-2xl font-bold">2+</p>
              <p className="text-gray-500 text-xs sm:text-sm">Années</p>
            </div>

            <div className="bg-[#0f172a] border border-green-500/10 rounded-xl p-4 text-center hover:border-green-500/40 transition">
              <p className="text-green-400 text-xl md:text-2xl font-bold">100%</p>
              <p className="text-gray-500 text-xs sm:text-sm">Qualité</p>
            </div>

          </div>

        </motion.div>

        {/* 🧾 RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full sm:w-[90%] md:w-[400px] lg:w-[380px]"
        >

          <div className="bg-[#0f172a] border border-green-500/10 rounded-2xl p-5 sm:p-6 shadow-xl">

            {/* IMAGE */}
            <div className="w-full h-52 sm:h-60 md:h-64 rounded-xl overflow-hidden mb-5 border border-green-500/20">
              <img
                src="images/jiradain.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <h3 className="text-lg sm:text-xl font-semibold text-green-400">
              Jiradain Kana
            </h3>

            <p className="text-gray-500 text-xs sm:text-sm mb-4">
              Développeur Fullstack
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs mb-6">

              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full">
                React
              </span>

              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full">
                TypeScript
              </span>

              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full">
                Laravel
              </span>

              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full">
                Tailwind
              </span>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="block text-center bg-green-500 text-black font-medium py-2 sm:py-3 rounded-xl hover:bg-green-400 transition text-sm sm:text-base"
            >
              Travaillons ensemble
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;