export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-emerald-600">
            MyDreamJobs
          </h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-600">About</a>
            <a href="#services" className="hover:text-emerald-600">Services</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Leading Consultancy Services <br /> Serving PAN India
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-emerald-100">
            MyDreamJobs connects talent with opportunity. We help individuals
            and organizations achieve growth through expert recruitment and
            consultancy services.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">About MyDreamJobs</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            MyDreamJobs is a professional consultancy firm delivering reliable
            recruitment and HR solutions across India. Our focus is on
            understanding client requirements and matching them with the right
            talent, ensuring long-term success for both candidates and
            organizations.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="py-20 bg-white dark:bg-zinc-900"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Our Services
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 text-center">
              <h4 className="text-xl font-semibold mb-3">
                Recruitment Services
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                End-to-end recruitment solutions for companies across multiple
                industries.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 text-center">
              <h4 className="text-xl font-semibold mb-3">
                Career Consulting
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Professional guidance to help candidates choose and grow in the
                right career path.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 text-center">
              <h4 className="text-xl font-semibold mb-3">
                HR Advisory
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Strategic HR consulting to improve hiring, retention, and
                workforce planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-3xl font-semibold mb-8">Contact Us</h3>

          <div className="space-y-4 text-lg">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:hr@mydreamjobs.in"
                className="text-emerald-600 hover:underline"
              >
                hr@mydreamjobs.in
              </a>
            </p>

            <p>
              <span className="font-medium">Contact No:</span>{" "}
              <a
                href="tel:9552442210"
                className="text-emerald-600 hover:underline"
              >
                9552442210
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} MyDreamJobs. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
