import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    role: "Fullstack Developer",
    desc: "Développement d’une plateforme e-commerce moderne avec gestion produits, panier, authentification et paiement.",
    impact: "Amélioration de la conversion + expérience utilisateur fluide",
    tech: ["React", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    title: "Admin Dashboard SaaS",
    role: "Frontend Developer",
    desc: "Dashboard interactif pour visualiser les données utilisateurs et analytics en temps réel.",
    impact: "Meilleure prise de décision grâce aux données visualisées",
    tech: ["React", "Chart.js", "API REST"],
  },
  {
    title: "Portfolio SaaS",
    role: "Frontend Developer",
    desc: "Portfolio moderne avec animations avancées et UI premium orientée expérience utilisateur.",
    impact: "Image professionnelle renforcée et crédibilité freelance",
    tech: ["React", "Framer Motion", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 bg-[#020617] text-white px-6 overflow-hidden">

      {/* 🌿 Background */}
      <div className="absolute w-[900px] h-[900px] bg-green-500/5 rounded-full blur-[200px] top-[-350px] right-[-350px]"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="text-green-400 text-xs sm:text-sm uppercase tracking-[0.4em]">
            Case Studies
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Projets sélectionnés
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Quelques réalisations démontrant mon expertise en développement web moderne et scalable.
          </p>

        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-16">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-10 bg-[#0f172a] border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition"
            >

              {/* LEFT VISUAL */}
              <div className="w-full lg:w-[45%] h-60 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/10"></div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 flex flex-col justify-between">

                <div>

                  <p className="text-green-400 text-sm mb-2">
                    {project.role}
                  </p>

                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* IMPACT */}
                  <p className="text-gray-300 text-sm border-l-2 border-green-500 pl-4 italic">
                    {project.impact}
                  </p>

                </div>

                {/* TECH + LINKS */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-green-500/10 text-green-400 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-5 text-sm">

                    <a
                      href="#"
                      className="text-green-400 hover:text-green-300 transition"
                    >
                      Live Demo
                    </a>

                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;