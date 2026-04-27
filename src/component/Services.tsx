import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-[#020617] text-white px-6 overflow-hidden">

      {/* 🌿 Glow subtil */}
      <div className="absolute w-[700px] h-[700px] bg-green-500/5 rounded-full blur-[180px] top-[-250px] left-[-250px]"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-green-400 text-xs sm:text-sm uppercase tracking-[0.3em]">
            Services
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Solutions que je propose
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Je développe des solutions web modernes, scalables et optimisées pour la performance.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Développement Frontend",
              desc: "Interfaces modernes et performantes avec React & TypeScript.",
            },
            {
              title: "Développement Backend",
              desc: "APIs sécurisées et robustes avec Laravel.",
            },
            {
              title: "Applications Web",
              desc: "Dashboards, SaaS, e-commerce et plateformes sur mesure.",
            },
            {
              title: "UI / UX Design",
              desc: "Interfaces propres, ergonomiques et orientées utilisateur.",
            },
            {
              title: "Performance & SEO",
              desc: "Optimisation vitesse, SEO et expérience utilisateur.",
            },
            {
              title: "Maintenance",
              desc: "Évolution, correction et amélioration de projets existants.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-[#0f172a] border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition duration-300"
            >

              {/* NUMBER */}
              <div className="text-green-500 text-sm mb-3">
                0{i + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;