
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Shield,
  Code,
  Palette,
  Terminal as TerminalIcon,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Zap,
  Send,
  Cpu,
  Lock,
  Globe,
  ArrowLeft,
  Database,
  Search,
  CheckCircle,
  Eye,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ANIMATION CONFIGS
 */
const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

/**
 * TYPES
 */
type View = 'home' | 'expertise' | 'work' | 'terminal' | 'contact';

/**
 * COMPONENTS
 */

// Added explicit typing for Navbar to ensure compatibility with standard component props.
const Navbar: React.FC<{ currentView: View, setView: (v: View) => void }> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string, id: View }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Expertise', id: 'expertise' },
    { name: 'Work', id: 'work' },
    { name: 'Terminal', id: 'terminal' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          onClick={() => setView('home')}
          className="text-2xl font-black tracking-tighter cursor-pointer group flex items-center"
        >
          <div className="mr-2 relative">
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">BARAKA.</span>
            <div className="absolute -inset-1 bg-cyan-400/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="group-hover:tracking-widest transition-all duration-500">M</span>
          <span className="text-cyan-400 animate-pulse ml-1">_</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setView(link.id)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${currentView === link.id ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}
            >
              {link.name}
              {currentView === link.id && (
                <motion.div layoutId="nav-glow" className="absolute -inset-x-2 -inset-y-1 bg-cyan-500/10 blur-sm rounded-sm -z-10" />
              )}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${currentView === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button
            onClick={() => setView('contact')}
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-600/20 to-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-[9px] font-black uppercase tracking-[0.2em] rounded-sm hover:from-cyan-500 hover:to-cyan-400 hover:text-slate-950 transition-all shadow-[0_0_20px_rgba(34,211,238,0.1)] active:scale-95"
          >
            Access_Vault
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cyan-400 p-3 bg-slate-900/50 border border-cyan-500/30 rounded-xl active:scale-90 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-slate-950 z-[101] flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-8 sm:gap-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => { setView(link.id); setIsMenuOpen(false); }}
                  className={`text-5xl sm:text-6xl font-black uppercase tracking-tighter text-left ${currentView === link.id ? 'text-cyan-400' : 'text-slate-700'}`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-auto self-center p-8 text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <X size={56} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Added explicit typing for HomeView to allow standard props like 'key' when used in AnimatePresence.
const HomeView: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  return (
    <motion.section {...pageVariants} className="min-h-screen flex items-center justify-center relative px-6">
      <div className="ambient-glow top-1/4 -left-20 animate-pulse"></div>
      <div className="ambient-glow bottom-1/4 -right-20" style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(2, 6, 23, 0) 70%)' }}></div>

      <div className="max-w-6xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-cyan-500/30 bg-cyan-500/5 rounded-full mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="mono text-[10px] text-cyan-400 uppercase tracking-[0.3em]">Operational Status: All Systems Go</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black mb-6 sm:mb-10 tracking-tighter uppercase leading-[0.8] glitch" data-text="ABRAHAM BARAKA">
            ABRAHAM BARAKA
          </h1>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg sm:text-xl md:text-2xl leading-relaxed font-light mb-10 sm:mb-16">
            Architecting <span className="text-white font-bold italic underline decoration-cyan-500 decoration-2">High-Security</span> digital frameworks and
            visually dominant user experiences for the next generation of web infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <button
              onClick={() => setView('work')}
              className="group flex items-center justify-center gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-cyan-500 text-slate-950 font-black rounded-sm uppercase tracking-widest text-[10px] sm:text-xs hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              Access_Archive <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setView('terminal')}
              className="group flex items-center justify-center gap-4 px-8 sm:px-12 py-4 sm:py-6 border border-white/20 text-white font-black rounded-sm uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white/5 transition-all"
            >
              <TerminalIcon size={18} /> SSH_Terminal
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-600">
        <div className="w-[1px] h-12 bg-gradient-to-t from-cyan-500 to-transparent"></div>
        <span className="mono text-[9px] uppercase tracking-[0.4em]">Establish_Link</span>
      </div>
    </motion.section>
  );
};

// Added explicit typing for ExpertiseView to correctly handle component props.
const ExpertiseView: React.FC = () => {
  const cards = [
    {
      title: "Cyber Security",
      icon: <Shield size={48} className="text-cyan-400" />,
      tag: "INFRA_SEC",
      desc: "Hardening cloud architectures and implementing zero-trust models for enterprise-grade data integrity.",
      techs: ["AES-256 Encryption", "SOC 2 Compliance", "Penetration Testing", "Auth0/JWT"]
    },
    {
      title: "Full Stack Dev",
      icon: <Code size={48} className="text-purple-400" />,
      tag: "CORE_ENG",
      desc: "Engineering scalable microservices and lightning-fast frontends using modern distributed paradigms.",
      techs: ["Rust (Axum)", "Go (Fiber)", "Next.js 15", "PostgreSQL / Redis"]
    },
    {
      title: "Design Systems",
      icon: <Palette size={48} className="text-emerald-400" />,
      tag: "UI_ARCH",
      desc: "Creating cinematic, data-heavy interfaces that prioritize visual storytelling without sacrificing performance.",
      techs: ["Figma Mastery", "Three.js / WebGL", "Motion Graphics", "Accessibility (A11y)"]
    }
  ];

  return (
    <motion.section {...pageVariants} className="pt-24 sm:pt-40 pb-20 sm:pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 mb-20 sm:mb-32 items-end">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 sm:w-16 bg-cyan-500"></div>
            <span className="text-cyan-400 mono text-xs sm:text-sm tracking-[0.5em] uppercase">Phase_01</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 sm:mb-10">CORE<br />COMMAND</h2>
          <p className="text-slate-400 text-lg sm:text-2xl leading-relaxed font-light">
            My methodology fuses the offensive mindset of a security expert with the creative precision of a master architect.
          </p>
        </div>
        <div className="bg-slate-900/40 p-6 sm:p-10 border border-white/5 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
          <div className="flex justify-between items-center mb-10">
            <h4 className="mono text-xs text-slate-500 uppercase tracking-widest">Active_Heuristics</h4>
            <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 mono text-[9px] rounded-full border border-emerald-500/20">Optimized</div>
          </div>
          <div className="space-y-8">
            {[
              { label: 'System Load', val: 78 },
              { label: 'Security Level', val: 99 },
              { label: 'Code Integrity', val: 94 }
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between mono text-[10px] text-slate-300 uppercase mb-3">
                  <span>{stat.label}</span>
                  <span>{stat.val}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.val}%` }}
                    className="h-full bg-cyan-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group p-12 bg-slate-900/30 border border-white/5 rounded-2xl hover:border-cyan-500/40 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              {card.icon}
            </div>
            <div className="mb-12 inline-block p-4 bg-slate-800/50 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
              {card.icon}
            </div>
            <div className="mono text-[10px] text-cyan-500 uppercase tracking-widest mb-4">{card.tag}</div>
            <h3 className="text-4xl font-black mb-6 uppercase tracking-tight leading-none">{card.title}</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light italic">"{card.desc}"</p>
            <div className="grid grid-cols-1 gap-4 pt-8 border-t border-white/5">
              {card.techs.map((t, j) => (
                <div key={j} className="flex items-center gap-3 text-xs mono text-slate-500 group-hover:text-white transition-colors">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Added explicit typing for WorkView to correctly handle component props.
const WorkView: React.FC = () => {
  const [filter, setFilter] = useState('ALL');
  const projects = [
    { title: "Quantum Shield", tag: "SEC", cat: "Cyber Security", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200" },
    { title: "Neo Pulse", tag: "DSN", cat: "UI/UX Design", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200" },
    { title: "Titan Node", tag: "ENG", cat: "Software Eng", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" },
    { title: "Ghost Mesh", tag: "SEC", cat: "Networking", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1200" },
    { title: "Zenith SaaS", tag: "ENG", cat: "Product Dev", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" },
    { title: "Aura Brand", tag: "DSN", cat: "Branding", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200" }
  ];

  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.tag === filter);

  return (
    <motion.section {...pageVariants} className="pt-24 sm:pt-40 pb-20 sm:pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 sm:mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 sm:w-16 bg-cyan-500"></div>
            <span className="text-cyan-400 mono text-xs sm:text-sm tracking-[0.5em] uppercase">Phase_02</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">OPERATIONAL<br />ARCHIVE</h2>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {['ALL', 'SEC', 'ENG', 'DSN'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 sm:px-8 py-2 sm:py-3 mono text-[8px] sm:text-[10px] uppercase tracking-widest border transition-all ${filter === f ? 'bg-cyan-500 border-cyan-500 text-slate-950 font-bold' : 'border-white/10 text-slate-500 hover:border-white/40'}`}
            >
              {f === 'ALL' ? 'Total_Files' : f === 'SEC' ? 'Security_Logs' : f === 'ENG' ? 'Code_Base' : 'Visual_Arts'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-900 border border-white/5"
            >
              <img src={p.img} alt="" className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mono text-[9px] uppercase tracking-widest">{p.cat}</div>
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tight leading-none mb-6 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                <div className="flex items-center gap-3 text-slate-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300">
                  <Eye size={16} />
                  <span className="mono text-[10px] uppercase tracking-widest">Open_File_Manifest</span>
                </div>
              </div>

              <div className="absolute top-10 right-10 w-12 h-12 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-cyan-500/50">
                <ExternalLink size={20} className="text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

// Added explicit typing for TerminalView to correctly handle component props.
const TerminalView: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    "Baraka_OS [Version 24.11.02]",
    "(c) 2025 Baraka Maheshe Systems. All rights reserved.",
    "",
    "Requesting SSH connection to remote-host @ bmaheshe-node-01...",
    "Handshake successful. Key exchange complete.",
    "Firewall: ACTIVE | Encryption: E2EE | Status: SECURE",
    "Type 'help' to see available commands."
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response = [`> ${input}`];
    switch (cmd) {
      case 'help': response.push("Available: about, expertise, work, whoami, contact, clear, system, hack, download, theme"); break;
      case 'about': response.push("BARAKA MAHESHE: A high-tier Software Architect specializing in Cybersecurity & UI Engineering."); break;
      case 'expertise': response.push("Security, Core Backend, Visual Identity, Scalable Architectures."); break;
      case 'work': response.push("Projects: Quantum Shield, Neo Pulse, Titan Node, Ghost Mesh, Zenith."); break;
      case 'whoami': response.push("Guest: Authorized_Viewer_ID_8842"); break;
      case 'system': response.push("OS: Baraka_Custom_Kernel | Uptime: 247d | Network: Global_Mesh_VPN"); break;
      case 'download':
        response.push("Requesting file: cv_baraka_maheshe.pdf...");
        setTimeout(() => setLogs(prev => [...prev, "Downloading... [||||||||||] 100%", "Download complete."]), 500);
        break;
      case 'theme':
        response.push("Warning: Theme overrides require root privileges.");
        response.push("Bypassing protocol... Theme 'cyber_matrix' initialized.");
        break;
      case 'hack':
        response.push("Executing brute-force bypass simulation...");
        response.push("[####..........] 28%");
        setTimeout(() => setLogs(prev => [...prev, "[########......] 65%", "[SUCCESS] Mock security layer bypassed."]), 800);
        break;
      case 'clear': setLogs([]); setInput(""); return;
      case 'contact': response.push("Redirecting to Contact Portal..."); setTimeout(() => setLogs(prev => [...prev, "Portal initialized. Use UI components to send packets."]), 500); break;
      default: response.push(`Error: Command '${cmd}' not recognized. Restricted access.`);
    }

    setLogs(prev => [...prev, ...response]);
    setInput("");
  };

  return (
    <motion.section {...pageVariants} className="pt-24 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 sm:w-16 bg-cyan-500"></div>
            <span className="text-cyan-400 mono text-xs sm:text-sm tracking-[0.5em] uppercase">Phase_03</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 sm:mb-10">SYSTEM<br />TERMINAL</h2>
        </div>

        <div className="bg-black/80 border border-cyan-500/20 rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="bg-[#111] px-4 sm:px-6 py-3 border-b border-white/5 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/30"></div>
            </div>
            <div className="text-[8px] sm:text-[10px] mono text-slate-500 uppercase tracking-widest flex items-center gap-2 truncate max-w-[150px] sm:max-w-none">
              <TerminalIcon size={12} className="text-cyan-400" /> secure_session@bmaheshe-vault
            </div>
            <div className="text-[8px] sm:text-[10px] mono text-slate-700 hidden md:block">SSH PORT: 2288</div>
          </div>

          <div ref={scrollRef} className="p-4 sm:p-10 h-[350px] sm:h-[500px] overflow-y-auto mono text-xs sm:text-sm md:text-base leading-relaxed bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-90">
            <div className="space-y-2">
              {logs.map((log, i) => (
                <div key={i} className={`${log.startsWith('>') ? 'text-white font-bold' : log.includes('SUCCESS') ? 'text-emerald-400' : 'text-cyan-400/80'}`}>
                  {log}
                </div>
              ))}
              <form onSubmit={handleCommand} className="flex items-center gap-3 text-white mt-6">
                <span className="text-emerald-500 font-bold">root@baraka:~$</span>
                <input
                  autoFocus
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-grow text-white focus:ring-0"
                  placeholder="Enter command..."
                />
              </form>
            </div>
          </div>

          <div className="bg-slate-950/80 px-8 py-3 border-t border-white/5 flex justify-between items-center">
            <div className="flex gap-8 text-[9px] mono text-slate-600 uppercase tracking-widest">
              <span>Latency: 14ms</span>
              <span>Buffer: 2048KB</span>
            </div>
            <div className="text-emerald-500/60 mono text-[10px] animate-pulse flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              ENCRYPTION_ACTIVE
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Added explicit typing for ContactView to correctly handle component props.
const ContactView: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <motion.section {...pageVariants} className="pt-24 sm:pt-40 pb-20 sm:pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-start">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 sm:w-16 bg-cyan-500"></div>
            <span className="text-cyan-400 mono text-xs sm:text-sm tracking-[0.5em] uppercase">Phase_04</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 sm:mb-12">ESTABLISH<br />UPLINK</h2>
          <p className="text-slate-400 text-lg sm:text-2xl font-light mb-10 sm:mb-16 leading-relaxed max-w-xl">
            Whether it's a security audit, a high-end application build, or a new visual paradigm,
            this channel is encrypted and ready for your transmission.
          </p>

          <div className="space-y-6 sm:space-y-10">
            <div className="flex items-center gap-4 sm:gap-8 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 shadow-xl group-hover:shadow-cyan-500/20">
                <Mail className="group-hover:text-slate-950" size={20} sm:size={28} />
              </div>
              <div>
                <h4 className="mono text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-widest mb-1 sm:mb-2">Direct_Channel</h4>
                <p className="text-lg sm:text-2xl font-black tracking-tight group-hover:text-cyan-400 transition-colors truncate max-w-[200px] sm:max-w-none">hello@barakamaheshe.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-8 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 shadow-xl group-hover:shadow-cyan-500/20">
                <Linkedin className="group-hover:text-slate-950" size={20} sm:size={28} />
              </div>
              <div>
                <h4 className="mono text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-widest mb-1 sm:mb-2">Networking_Mesh</h4>
                <p className="text-lg sm:text-2xl font-black tracking-tight group-hover:text-cyan-400 transition-colors truncate max-w-[200px] sm:max-w-none">linkedin.com/in/abaraka</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-8 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 shadow-xl group-hover:shadow-cyan-500/20">
                <Github className="group-hover:text-slate-950" size={20} sm:size={28} />
              </div>
              <div>
                <h4 className="mono text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-widest mb-1 sm:mb-2">Source_Code_Vault</h4>
                <p className="text-lg sm:text-2xl font-black tracking-tight group-hover:text-cyan-400 transition-colors truncate max-w-[200px] sm:max-w-none">github.com/abraham-b</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-12 bg-slate-900/40 border border-white/5 rounded-2xl sm:rounded-3xl backdrop-blur-xl relative">
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">Identity_Name</label>
                    <input required type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-sm p-4 outline-none focus:border-cyan-500 transition-all mono text-sm" placeholder="Satoshi Nakamoto" />
                  </div>
                  <div className="space-y-3">
                    <label className="mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">Contact_Vector</label>
                    <input required type="email" className="w-full bg-slate-950/50 border border-white/10 rounded-sm p-4 outline-none focus:border-cyan-500 transition-all mono text-sm" placeholder="identity@mesh.net" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">Transmission_Protocol</label>
                  <select className="w-full bg-slate-950/50 border border-white/10 rounded-sm p-4 outline-none focus:border-cyan-500 transition-all mono text-sm appearance-none cursor-pointer">
                    <option>Project Collaboration</option>
                    <option>Security Audit Request</option>
                    <option>Brand Identity Architecture</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">Payload_Data</label>
                  <textarea rows={5} className="w-full bg-slate-950/50 border border-white/10 rounded-sm p-4 outline-none focus:border-cyan-500 transition-all mono text-sm" placeholder="Detailed objective specs..."></textarea>
                </div>
                <button
                  disabled={loading}
                  className="w-full py-6 bg-gradient-to-r from-cyan-600 to-cyan-500 text-slate-950 font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'Encrypting_Packet...' : 'Send_Transmission'} <Send size={18} />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20 flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                  <CheckCircle size={48} className="text-emerald-500" />
                </div>
                <h3 className="text-4xl font-black uppercase mb-6">PACKET_SENT</h3>
                <p className="text-slate-400 text-xl font-light max-w-xs leading-relaxed">
                  Encryption confirmed. Your payload has been delivered to the primary node.
                  Expect a response shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-12 text-cyan-400 mono text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                >
                  Return_to_Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-40 border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-3xl font-black tracking-tighter uppercase"><span className="text-cyan-400">BARAKA.</span> M</div>
        <div className="flex gap-10">
          <a href="#" className="mono text-[9px] text-slate-500 uppercase tracking-widest hover:text-cyan-400 transition-colors">Privacy_Protocol</a>
          <a href="#" className="mono text-[9px] text-slate-500 uppercase tracking-widest hover:text-cyan-400 transition-colors">Security_Notice</a>
        </div>
        <div className="mono text-[9px] text-slate-700 uppercase tracking-[0.3em]">© 2025 ALL_RIGHTS_RESERVED // DESIGNED_IN_PARIS</div>
      </div>
    </motion.section>
  );
};

/**
 * MAIN APP
 */

const App = () => {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 selection:text-cyan-400">
      <Navbar currentView={view} setView={setView} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {view === 'home' && <HomeView key="home" setView={setView} />}
          {view === 'expertise' && <ExpertiseView key="expertise" />}
          {view === 'work' && <WorkView key="work" />}
          {view === 'terminal' && <TerminalView key="terminal" />}
          {view === 'contact' && <ContactView key="contact" />}
        </AnimatePresence>
      </main>

      {/* Floating Status Bar */}
      <div className="fixed bottom-6 right-6 hidden xl:flex flex-col items-end gap-1.5 z-[100] mono text-[9px] text-slate-600 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span>Uptime: 247:12:04</span>
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center gap-2">
          <span>CPU Load: 12%</span>
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <span>RAM: 4.2GB / 64GB</span>
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Mobile Back Button */}
      {view !== 'home' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden"
        >
          <button
            onClick={() => setView('home')}
            className="flex items-center gap-3 px-8 py-4 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-full text-[10px] mono uppercase tracking-[0.2em] shadow-2xl"
          >
            <ArrowLeft size={16} className="text-cyan-400" /> Root_Return
          </button>
        </motion.div>
      )}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
