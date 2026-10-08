import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  
  Check,
  ChevronRight,
  Globe,
  BarChart3,
  Menu,
  Play,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Get discovered by the right audience with data-driven SEO strategies that deliver sustainable organic growth.",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Turn clicks into customers with highly targeted campaigns across Google, Meta and other ad platforms.",
  },
  // {
  //   icon: Instagram,
  //   title: "Social Media",
  //   description:
  //     "Build a powerful social presence with scroll-stopping content and strategies designed for engagement.",
  // },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-converting, lightning-fast websites designed to turn visitors into loyal customers.",
  },
];

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3.5x", label: "Average ROAS" },
  { value: "42M+", label: "Revenue Generated" },
];

const projects = [
  {
    title: "Nova Fashion",
    category: "E-commerce Growth",
    result: "+187% Revenue",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Finora",
    category: "Performance Marketing",
    result: "+320% Leads",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    title: "Urban Brew",
    category: "Brand & Social",
    result: "+245% Engagement",
    gradient: "from-orange-400 to-pink-600",
  },
];

const testimonials = [
  {
    quote:
      "The team completely transformed our online presence. Our leads increased dramatically within the first three months.",
    name: "Rahul Sharma",
    role: "Founder, Nova Fashion",
  },
  {
    quote:
      "Finally an agency that focuses on actual business results instead of vanity metrics. Highly recommended.",
    name: "Priya Mehta",
    role: "CEO, Finora",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 -top-62.5 h-150 w-150 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute -right-37.5 top-[35%] h-100 w-100 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -left-37.5 top-[70%] h-100 w-100 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#07070a]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
              <Sparkles size={18} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Adflix<span className="text-violet-400">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {["home", "services", "work", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm font-medium capitalize text-gray-400 transition hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 md:block"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/5 bg-[#0a0a0d] px-5 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {["home", "services", "work", "about"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="py-2 text-left text-gray-300 capitalize"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 rounded-xl bg-white py-3 font-semibold text-black"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero */}
     
{/* Hero Section */}
<section
  id="home"
  className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-44"
>
  {/* Background Glow */}
  <div className="pointer-events-none absolute -left-50 top-[10%] -z-10 h-125 w-125 rounded-full bg-violet-600/20 blur-[140px]" />

  <div className="pointer-events-none absolute -right-50 top-[20%] -z-10 h-125 w-125 rounded-full bg-cyan-500/10 blur-[140px]" />

  <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
    
    {/* ================= LEFT CONTENT ================= */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="max-w-2xl"
    >
      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
        Digital Marketing That Drives Results
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        Grow your brand.
        <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Dominate your market.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
        We help ambitious businesses grow online through powerful digital
        marketing strategies, creative content, and technology that delivers
        measurable results.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => scrollTo("contact")}
          className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-gray-100"
        >
          Let's Grow Together
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <button
          onClick={() => scrollTo("work")}
          className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/4 px-7 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/8"
        >
          <Play size={16} />
          View Our Work
        </button>
      </div>

     
    </motion.div>

    {/* ================= RIGHT VISUAL ================= */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[100px]" />

      {/* Main Image Container */}
      <div className="relative mx-auto aspect-square max-w-140">
        
        {/* Decorative Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[8%] rounded-full border border-dashed border-violet-400/20"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[18%] rounded-full border border-dashed border-cyan-400/20"
        />

        {/* Image */}
        <div className="absolute inset-[12%] overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-br from-violet-600/20 via-[#111118] to-cyan-500/10 shadow-2xl shadow-violet-900/20">
          <img
            src="/src/assets/hero_img.png"
            alt="Digital marketing analytics"
            className="h-full w-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#07070a]/50 via-transparent to-transparent" />
        </div>

        {/* ================= FLOATING CARD 1 ================= */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-[20%] rounded-2xl border border-white/10 bg-[#111118]/90 p-4 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <TrendingUp size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Revenue Growth</p>
              <p className="text-lg font-bold text-white">+187.4%</p>
            </div>
          </div>
        </motion.div>

        {/* ================= FLOATING CARD 2 ================= */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[18%] right-0 rounded-2xl border border-white/10 bg-[#111118]/90 p-4 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
              <BarChart3 size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Campaign ROAS</p>
              <p className="text-lg font-bold text-white">4.82x</p>
            </div>
          </div>
        </motion.div>

        {/* ================= FLOATING CARD 3 ================= */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[8%] flex items-center gap-2 rounded-full border border-white/10 bg-[#111118]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="text-xs font-medium text-gray-300">
            Campaign Active
          </span>
        </motion.div>

        {/* ================= FLOATING CARD 4 ================= */}
        <motion.div
          animate={{ rotate: [0, 4, 0, -4, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] left-[10%] rounded-2xl border border-white/10 bg-[#111118]/90 p-4 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full border-2 border-[#111118] bg-violet-400" />
              <div className="h-7 w-7 rounded-full border-2 border-[#111118] bg-cyan-400" />
              <div className="h-7 w-7 rounded-full border-2 border-[#111118] bg-fuchsia-400" />
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Growing businesses
              </p>
              <p className="text-sm font-semibold">Join 250+ brands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>



      {/* Stats */}
      <section className="border-y border-white/5 bg-white/2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-12 sm:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className="border-white/10 px-4 py-4 text-center first:border-l-0 sm:border-l"
            >
              <div className="text-3xl font-bold sm:text-4xl">
                {stat.value}
              </div>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              What we do
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to
              <span className="text-gray-500"> grow online.</span>
            </h2>

            <p className="mt-5 text-gray-400">
              From strategy to execution, we build digital experiences and
              campaigns that move your business forward.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-white/3 p-7 transition hover:border-violet-500/30 hover:bg-violet-500/4"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-medium text-gray-300">
                    Learn more
                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Selected work
              </p>

              <h2 className="text-4xl font-bold sm:text-5xl">
                Results speak louder.
              </h2>
            </div>

            <button className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white">
              View all projects
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/3"
              >
                <div
                  className={`relative h-64 bg-linear-to-br ${project.gradient} p-7`}
                >
                  <div className="absolute inset-0 bg-black/10" />

                  <div className="relative flex h-full flex-col justify-between">
                    <span className="w-fit rounded-full bg-black/20 px-3 py-1 text-xs font-medium backdrop-blur">
                      {project.category}
                    </span>

                    <div>
                      <p className="text-sm text-white/70">Result</p>
                      <p className="text-3xl font-black">{project.result}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:bg-white group-hover:text-black">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Process */}
      <section id="about" className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
              Why Nexora
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Marketing that is built around
              <span className="text-gray-500"> your business.</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              No cookie-cutter campaigns. We combine creative thinking,
              analytics and technology to create marketing systems that
              generate measurable business growth.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Data-driven marketing strategy",
                "Transparent reporting & analytics",
                "Dedicated growth team",
                "Continuous optimization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                    <Check size={14} />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-fuchsia-500/10 blur-[80px]" />

            <div className="relative rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Campaign Growth</p>
                  <p className="mt-1 text-2xl font-bold">+247.8%</p>
                </div>

                <TrendingUp className="text-emerald-400" />
              </div>

              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/5 bg-[#0b0b0e] p-4">
                <div className="absolute inset-0 opacity-30">
                  {[1, 2, 3, 4].map((line) => (
                    <div
                      key={line}
                      className="border-b border-white/10"
                      style={{ height: "25%" }}
                    />
                  ))}
                </div>

                <svg
                  viewBox="0 0 500 220"
                  className="relative h-full w-full"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 190 C70 175, 90 150, 140 160 S210 120, 260 130 S330 80, 380 90 S450 35, 500 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    className="text-violet-400"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                </svg>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["CTR", "8.42%"],
                  ["CPC", "$0.42"],
                  ["ROAS", "4.8x"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/5 bg-white/3 p-4"
                  >
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="mt-1 font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/5 bg-white/2 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Client love
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Don't just take our word for it.
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/3 p-7 sm:p-9"
              >
                <div className="mb-6 text-4xl text-violet-400">“</div>

                <p className="text-lg leading-8 text-gray-300">
                  {testimonial.quote}
                </p>

                <div className="mt-8">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl border border-violet-500/20 bg-linear-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/10 p-8 text-center sm:p-14 lg:p-20"
        >
          <div className="absolute left-1/2 top-0 -z-10 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
            <Zap size={25} />
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Ready to grow your brand?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Let's build a digital growth strategy that turns your goals into
            measurable results.
          </p>

          <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105">
            Book a Free Strategy Call
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </section>
    
{/* Contact Us */}
<section id="contact" className="relative px-5 py-24 lg:px-8 lg:py-32">
  <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

  <div className="mx-auto max-w-7xl">
    {/* Section Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        Get in touch
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Let's build something
        <span className="block bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          amazing together.
        </span>
      </h2>

      <p className="mt-5 text-gray-400">
        Have a project in mind? Tell us about it and our team will get back to
        you shortly.
      </p>
    </motion.div>

    {/* Contact Container */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto mt-14 grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl lg:grid-cols-5"
    >
      {/* Left Side */}
      <div className="relative overflow-hidden bg-linear-to-br from-violet-600/20 via-purple-600/10 to-transparent p-8 sm:p-10 lg:col-span-2 lg:p-12">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-[80px]" />

        <div className="relative">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
            <Sparkles size={26} />
          </div>

          <h3 className="text-3xl font-bold">
            Have an idea?
            <br />
            <span className="text-gray-500">Let's talk.</span>
          </h3>

          <p className="mt-5 leading-7 text-gray-400">
            Whether you need a new website, better SEO, social media
            marketing, or a complete digital strategy, we're here to help.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-600">
                Email
              </p>
              <p className="mt-2 text-sm text-gray-300">
                hello@nexora.com
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-600">
                Phone
              </p>
              <p className="mt-2 text-sm text-gray-300">
                +91 98765 43210
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-600">
                Location
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Mumbai, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-3">
            

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white">
              <Globe size={17} />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-8 sm:p-10 lg:col-span-3 lg:p-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const data = new FormData(form);

            console.log({
              name: data.get("name"),
              email: data.get("email"),
              phone: data.get("phone"),
              message: data.get("message"),
            });

            alert("Thank you! Your message has been sent.");
            form.reset();
          }}
          className="space-y-6"
        >
          {/* Name + Email */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-violet-500/60 focus:bg-white/5"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-violet-500/60 focus:bg-white/5"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-violet-500/60 focus:bg-white/5"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-violet-500/60 focus:bg-white/5"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.01] hover:bg-gray-100"
          >
            Send Message
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <p className="text-center text-xs text-gray-600">
            We usually respond within 24 hours.
          </p>
        </form>
      </div>
    </motion.div>
  </div>
</section>



      {/* Footer */}
      <footer className="border-t border-white/5 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500">
              <Sparkles size={16} />
            </div>

            <span className="font-bold">
              Nexora<span className="text-violet-400">.</span>
            </span>
          </div>

          <p className="text-sm text-gray-600">
            © 2026 Nexora Digital. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-500">
            <button className="transition hover:text-white">Instagram</button>
            <button className="transition hover:text-white">LinkedIn</button>
            <button className="transition hover:text-white">Privacy</button>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;