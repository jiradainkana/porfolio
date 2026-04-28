import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    name: yup.string().required("Veuillez saisir votre nom"),
    email: yup.string().required("Veuillez saisir votre email"),
    message: yup.string().required("Veuillez saisir votre message"),

  })
  .required()

const Contact = () => {
  type FormData = {
  name: string;
  email: string;
  message: string;
}
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: FormData) => console.log(data);
  
  return (
    <section id="contact" className="relative py-28 bg-[#020617] text-white px-6 overflow-hidden">

      {/* 🌿 Glow background */}
      <div className="absolute w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[200px] top-[-300px] left-[-300px]"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-400 text-xs sm:text-sm uppercase tracking-[0.4em]">
            Contact
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Travaillons ensemble
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Une idée de projet ? Contacte-moi et on en discute.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* CARD CONTACT */}
            <div className="bg-[#0f172a] border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition">

              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Informations
              </h3>

              <div className="space-y-4 text-gray-400 text-sm">

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-green-400" />
                  <span>jiradainkana9@mail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-green-400" />
                  <span>+237 651 475 950</span>
                </div>

              </div>

            </div>

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/237651475950"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-black font-semibold py-3 rounded-xl hover:bg-green-400 transition"
            >
              <FaWhatsapp />
              Discussion WhatsApp rapide
            </a>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
          onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0f172a] border border-white/5 rounded-2xl p-6 space-y-5"
          >

            {/* NAME */}
            <input
              type="text"
              {...register("name")}
              placeholder="Votre nom"
              className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl focus:border-green-500 outline-none text-white"
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl focus:border-green-500 outline-none text-white"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>

            {/* MESSAGE */}
            <textarea
              rows={5}
              placeholder="Votre message..."
              className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl focus:border-green-500 outline-none text-white resize-none"
            />
            <p className="text-red-500 text-sm">{errors.message?.message}</p>
            {/* BUTTON */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-500 text-black font-semibold py-3 rounded-xl hover:bg-green-400 transition"
            >
              <FaPaperPlane />
              Envoyer le message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;