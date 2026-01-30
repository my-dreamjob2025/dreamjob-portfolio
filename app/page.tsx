"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 text-slate-800">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-emerald-600">
              MyDreamJobs
            </h1>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium text-slate-600"
          >
            {["About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-emerald-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </motion.nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-medium"
            >
              Trusted Consultancy Across India
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Leading Consultancy Services <br />
              Serving PAN India
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/90"
            >
              MyDreamJobs connects talent with opportunity, helping individuals
              and organizations grow with confidence.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-semibold shadow-xl hover:-translate-y-1 transition"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-bold text-center mb-16 text-emerald-700">
            Our Services
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: Briefcase,
                title: "Recruitment Services",
                desc: "End-to-end recruitment solutions for multiple industries.",
              },
              {
                icon: Users,
                title: "Career Consulting",
                desc: "Expert guidance to build a strong and successful career.",
              },
              {
                icon: TrendingUp,
                title: "HR Advisory",
                desc: "Strategic HR consulting for business growth.",
              },
            ].map((s) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  {s.title}
                </h4>
                <p className="text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 bg-emerald-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-3xl font-bold mb-12 text-emerald-700">
            Contact Us
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:hr@mydreamjobs.in"
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <Mail className="mx-auto mb-2 text-emerald-600" />
              <p className="font-medium">hr@mydreamjobs.in</p>
            </a>

            <a
              href="tel:9552442210"
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <Phone className="mx-auto mb-2 text-emerald-600" />
              <p className="font-medium">9552442210</p>
            </a>

            <div className="p-6 bg-white rounded-xl shadow">
              <MapPin className="mx-auto mb-2 text-emerald-600" />
              <p className="font-medium">PAN India</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-emerald-700 text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} MyDreamJobs. All rights reserved.
      </footer>
    </div>
  );
}
