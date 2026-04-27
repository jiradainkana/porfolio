import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] text-white overflow-hidden">

      {/* 🌿 Glow subtil */}
      <div className="absolute w-[700px] h-[700px] bg-green-500/5 rounded-full blur-[200px] bottom-[-300px] right-[-300px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-3 gap-12 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-white">Jira</span>
              <span className="text-green-500">dain</span>
            </h1>

            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Développeur web spécialisé en création d’applications modernes,
              performantes et scalables avec React & TypeScript.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-green-400 text-xs uppercase tracking-[0.3em] mb-6">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
              <a href="#about" className="hover:text-green-400 transition">À propos</a>
              <a href="#services" className="hover:text-green-400 transition">Services</a>
              <a href="#projects" className="hover:text-green-400 transition">Projets</a>
              <a href="#contact" className="hover:text-green-400 transition">Contact</a>
            </div>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h3 className="text-green-400 text-xs uppercase tracking-[0.3em] mb-6">
              Contact
            </h3>

            <p className="text-gray-400 text-sm mb-2">
              Douala, Cameroun
            </p>

            <p className="text-gray-400 text-sm mb-6">
              jiradainkana9@gmail.com
            </p>

            <div className="flex gap-4 text-lg">

              <a
                href="https://wa.me/237651475950"
                className="p-2 rounded-lg bg-white/5 hover:bg-green-500/10 hover:text-green-400 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-green-500/10 hover:text-green-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-green-500/10 hover:text-green-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">

          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Jiradain Kana. Tous droits réservés.
          </p>

          <p className="text-gray-600 text-xs tracking-wide">
            Built with React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;