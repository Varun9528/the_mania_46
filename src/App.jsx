import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Youtube, MapPin, ExternalLink, QrCode, Ghost, Skull } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import bikeStunt from "./public/bike-stunt.png";
import raideravatar from "./public/mania.jpg";

const LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1B9cTDELFJ/?mibextid=wwXIfr",
    icon: <Facebook className="w-5 h-5" aria-hidden />,
    sub: "Share link",
  },
  {
    label: "Snapchat",
    href: "https://t.snapchat.com/rqIhbMFE",
    icon: <Ghost className="w-5 h-5" aria-hidden />,
    sub: "Add on Snap",
  },
  {
    label: "Location",
    href: "https://maps.app.goo.gl/m3anZtg2vk8hcYPeA?g_st=ipc",
    icon: <MapPin className="w-5 h-5" aria-hidden />,
    sub: "Find me",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Manish777world",
    icon: <Youtube className="w-5 h-5" aria-hidden />,
    sub: "@Manish777world",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/the_mania_46?igsh=bzUyazgyaDY2Znpt&utm_source=qr",
    icon: <Instagram className="w-5 h-5" aria-hidden />,
    sub: "@the_mania_46",
  },
];

function GlitchText({ text, className = "" }) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-[2px] -translate-y-[1px] text-fuchsia-400 mix-blend-screen opacity-70 animate-[glitch_2.8s_infinite]"
      >
        {text}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 translate-x-[2px] translate-y-[1px] text-cyan-300 mix-blend-screen opacity-70 animate-[glitch_3.2s_infinite]"
      >
        {text}
      </span>
      <style>{`
        @keyframes glitch {
          0% { clip-path: inset(0 0 0 0); }
          10% { clip-path: inset(10% 0 80% 0); }
          20% { clip-path: inset(80% 0 5% 0); }
          30% { clip-path: inset(40% 0 40% 0); }
          40% { clip-path: inset(15% 0 70% 0); }
          50% { clip-path: inset(70% 0 10% 0); }
          60% { clip-path: inset(20% 0 60% 0); }
          70% { clip-path: inset(60% 0 20% 0); }
          80% { clip-path: inset(30% 0 50% 0); }
          90% { clip-path: inset(50% 0 30% 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
      `}</style>
    </div>
  );
}

function Particles() {
  const dots = useMemo(
    () => new Array(30).fill(0).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      dur: 4 + Math.random() * 6,
      size: 2 + Math.random() * 3,
    })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          style={{ left: `${d.left}%`, top: `${d.top}%`, animationDelay: `${d.delay}s`, animationDuration: `${d.dur}s` }}
          className="absolute rounded-full bg-cyan-300/50 blur-[1px] animate-float"
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: .4; }
          50% { transform: translateY(-10px) translateX(5px); opacity: .9; }
          100% { transform: translateY(0) translateX(0); opacity: .4; }
        }
      `}</style>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b14] via-[#0b0c1a] to-black" />
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="w-[200%] h-[200%] origin-center rotate-12 [background-image:linear-gradient(transparent_23px,rgba(255,255,255,0.06)_24px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,0.06)_24px)] [background-size:24px_24px] animate-[gridMove_18s_linear_infinite]" />
      </div>
      <div className="absolute -top-32 -left-16 w-[60vmax] h-[60vmax] rounded-full bg-fuchsia-500/20 blur-[80px] animate-pulse" />
      <div className="absolute -bottom-40 -right-24 w-[70vmax] h-[70vmax] rounded-full bg-cyan-400/20 blur-[100px] animate-pulse" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(to_bottom,rgba(255,255,255,.6)_0px,rgba(255,255,255,.6)_1px,transparent_2px,transparent_4px)]" />
      <style>{`
        @keyframes gridMove { 0% {transform: translate3d(-10%, -10%, 0)} 50% {transform: translate3d(10%, 10%, 0)} 100% {transform: translate3d(-10%, -10%, 0)} }
      `}</style>
    </div>
  );
}

function LoadingSplash({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black"
          initial={{ x: -200 }}
          animate={{ x: [-200, 0, 200, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="relative flex flex-col items-center">
            {/* Bike Stunt Animation */}
            <motion.img
              src={bikeStunt}
              alt="Bike Stunt"
              className="w-40 h-40 object-contain bg-transparent"
              initial={{ x: -200, rotate: -10, scale: 0.9 }}
              animate={{
                x: [-200, 0, 200, 0],
                rotate: [0, 20, -20, 0],
                scale: [0.9, 1, 0.9, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />


            <div className="mt-6 text-center">
              <GlitchText
                text="BIKER STUNTS"
                className="text-3xl font-extrabold tracking-[0.35em]"
              />
              <p className="mt-2 text-xs text-white/60 animate-pulse">
                Warming up engines…
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

  );
}


export default function App() {
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const qrUrl = typeof window !== "undefined" ? window.location.href : "https://your-domain.example";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="relative min-h-screen text-white">
      <LoadingSplash show={loading} />
      <Background />
      <Particles />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:py-16">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 }}
              className="p-[3px] rounded-3xl bg-gradient-to-br from-fuchsia-500/60 via-cyan-400/60 to-fuchsia-500/60 shadow-[0_0_40px_rgba(168,85,247,.35)]"
            >
              <div className="relative rounded-2xl overflow-hidden w-28 h-28 md:w-36 md:h-36 bg-black">
                <img
                  alt="Raider avatar"
                  className="w-full h-full object-cover opacity-90"
                  src={raideravatar}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute -inset-1 border border-white/10 rounded-2xl" />
              </div>
            </motion.div>
            <div className="pointer-events-none absolute inset-0 -z-10 grid place-items-center">
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border border-white/10 [mask-image:radial-gradient(closest-side,black,transparent)] animate-[spin_12s_linear_infinite]" />
            </div>
          </div>

          <div className="text-center">
            <GlitchText text="THE MANIA 46" className="text-3xl md:text-5xl font-black tracking-[0.25em]" />
            <p className="mt-2 text-sm md:text-base text-white/70">Raider • Businessman • Always online</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {LINKS.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 
  bg-gradient-to-br from-[#111827]/80 to-[#0f172a]/90 p-4 backdrop-blur-md
  shadow-[0_10px_30px_rgba(0,0,0,.45)] hover:shadow-[0_0_25px_rgba(59,130,246,.6)]
  transform transition-all duration-300 hover:-translate-y-1 hover:rotate-[0.5deg]"
            >
              <span className="pointer-events-none absolute -inset-1 opacity-0 blur-2xl 
  transition-opacity duration-500 group-hover:opacity-50 
  bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-purple-500/40" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="grid place-items-center rounded-xl border border-white/10 
    bg-black/40 p-2 shadow-inner shadow-black/40">
                  {l.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold tracking-wide">{l.label}</div>
                  <div className="text-xs text-white/60">{l.sub}</div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </div>

              <span className="absolute -inset-1 -translate-x-full 
  group-hover:translate-x-0 transition-transform duration-700 
  [background:linear-gradient(120deg,transparent,rgba(255,255,255,.2),transparent)]" />
            </motion.a>

          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_320px]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
          >
            <h3 className="text-sm uppercase tracking-[0.25em] text-white/60">About</h3>
            <p className="mt-2 text-white/80 text-sm md:text-base">
              Welcome to my Raider link hub. Scan, connect, and dive into my world across platforms.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Cyberpunk</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Glitch</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Neon</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Fast</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm uppercase tracking-[0.25em] text-white/60">Scan to connect</div>
              <QrCode className="w-5 h-5 text-white/60" />
            </div>
            <div className="mt-3 grid place-items-center">
              <div className="rounded-xl bg-black/60 p-3 border border-white/10">
                <QRCodeCanvas value={qrUrl} size={220} includeMargin={false} />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={handleCopy}
                className="rounded-xl border border-white/10 bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 px-3 py-2 text-sm font-semibold hover:from-fuchsia-500/30 hover:to-cyan-400/30 transition"
              >
                {copied ? "Copied URL" : "Copy URL"}
              </button>
              <a
                href={qrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20 transition text-center"
              >
                Open Page
              </a>
            </div>
            <div className="pointer-events-none absolute -inset-1 opacity-20 blur-2xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500" />
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/50">
          <span>© Raider Profile</span>
          <span>•</span>
          <span>Built with React · Tailwind · Motion</span>
        </div>
      </div>
    </div>
  );
}
