import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, ArrowRight, Check, ChevronDown, 
  Sparkles, Bot, Zap, Shield, Layers, Users, BarChart3, 
  Clock, CheckCircle, Play, Star, ChevronLeft, ChevronRight,
  ArrowUp
} from 'lucide-react';

export default function App() {
  // --- State Management ---
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // --- Scroll & Back-To-Top Observer ---
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setShowDemoModal(false);
    };
    if (showDemoModal) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showDemoModal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Newsletter Submission Handler ---
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  // --- Data Structures ---
  const logos = ['AcmeCorp', 'ApexGlobal', 'Starlight', 'Hyperion', 'NexusAI', 'Vortex'];

  const features = [
    { icon: <Bot className="w-6 h-6 text-indigo-500" />, title: 'Autonomous Workflows', desc: 'AI agents execute repetitive tasks across your stack automatically.' },
    { icon: <Zap className="w-6 h-6 text-amber-500" />, title: 'Real-Time Insights', desc: 'Predictive analytics surface project bottlenecks before they cause delays.' },
    { icon: <Layers className="w-6 h-6 text-indigo-500" />, title: 'Context-Aware Search', desc: 'Query all internal documentation and codebases in natural language.' },
    { icon: <Users className="w-6 h-6 text-emerald-500" />, title: 'Smart Co-authoring', desc: 'Collaborate live with AI co-pilots that assist with drafting and coding.' },
    { icon: <Shield className="w-6 h-6 text-indigo-500" />, title: 'Enterprise Security', desc: 'SOC2 Type II compliance with zero-retention AI data training policies.' },
    { icon: <BarChart3 className="w-6 h-6 text-amber-500" />, title: 'Resource Allocation', desc: 'Automatically rebalance workloads based on team velocity and bandwidth.' },
  ];

  const steps = [
    { step: '01', title: 'Connect Your Stack', desc: 'Integrate NOVA with Slack, GitHub, Jira, and Google Workspace in seconds.' },
    { step: '02', title: 'Train Your AI Assistant', desc: 'NOVA securely indexes your team context without storing private data.' },
    { step: '03', title: 'Automate & Accelerate', desc: 'Delegate tasks, automate reporting, and boost team output by 3x.' }
  ];

  const stats = [
    { value: '300%', label: 'Productivity Lift' },
    { value: '14 hrs', label: 'Saved Per Employee/Wk' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '10k+', label: 'Teams Onboarded' }
  ];

  const solutions = [
    { title: 'For Engineering Teams', desc: 'Automate pull-request reviews, sprint updates, and documentation syncing.' },
    { title: 'For Marketing & Content', desc: 'Generate multi-channel campaigns aligned precisely with brand guidelines.' },
    { title: 'For Operations & Ops', desc: 'Streamline cross-departmental approval workflows and eliminate manual data entry.' }
  ];

  const testimonials = [
    { quote: "NOVA shaved 15 hours off our sprint cycle in the very first month. It’s no longer optional for us.", author: "Sarah Jenkins", role: "VP of Engineering at TechScale", avatar: "https://i.pravatar.cc/150?img=32" },
    { quote: "The contextual search alone saved our team hundreds of hours lost in documentation rabbit holes.", author: "David Chen", role: "Head of Product at CloudShift", avatar: "https://i.pravatar.cc/150?img=12" },
    { quote: "Implementing NOVA was seamless. Our marketing team doubled content velocity without extra headcount.", author: "Elena Rostova", role: "CMO at PulseMedia", avatar: "https://i.pravatar.cc/150?img=47" }
  ];

  const pricingPlans = [
    { name: 'Starter', priceMonthly: '$19', priceAnnual: '$15', desc: 'Ideal for small teams getting started with AI automation.', features: ['Up to 10 team members', 'Standard AI Workflows', '500 AI credits/mo', 'Community Support'] },
    { name: 'Pro', priceMonthly: '$49', priceAnnual: '$39', desc: 'For scaling teams needing custom integrations and higher velocity.', popular: true, features: ['Unlimited team members', 'Custom AI Workflows', '10,000 AI credits/mo', 'Priority 24/7 Support', 'Advanced Security'] },
    { name: 'Enterprise', priceMonthly: 'Custom', priceAnnual: 'Custom', desc: 'Dedicated infra, compliance, and custom model training.', features: ['Dedicated Model Instances', 'Unlimited AI credits', 'Custom SSO & SAML', 'Dedicated Success Manager', '99.99% Uptime SLA'] }
  ];

  const faqs = [
    { q: 'Is my company data used to train public AI models?', a: 'No. NOVA operates under a strict zero-data retention policy. Your data is isolated and used solely to serve your organization.' },
    { q: 'How long does setup take?', a: 'Most teams connect their primary workspace tools and deploy their first automated workflow in under 15 minutes.' },
    { q: 'Can I cancel or switch plans at any time?', a: 'Yes. You can upgrade, downgrade, or cancel your subscription directly from your billing dashboard with no lock-in contracts.' },
    { q: 'Does NOVA support custom integrations via API?', a: 'Yes! Pro and Enterprise tiers include full REST API access and custom webhook support for internal systems.' },
    { q: 'How do AI credits work?', a: 'Credits are consumed as AI workflows execute tasks. Unused credits rollover for up to 90 days on paid plans.' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'theme-dark bg-slate-950 text-slate-100' : 'theme-light bg-slate-50 text-slate-800'}`}>
      
      {/* 1. NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
              N
            </div>
            <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">NOVA</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#features" className="hover:text-indigo-500 transition-colors">Features</a>
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-indigo-500 transition-colors">How It Works</a>
            <a href="#solutions" className="hover:text-indigo-500 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-indigo-500 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-indigo-500 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border transition-all ${darkMode ? 'border-slate-800 bg-slate-900 hover:bg-slate-800' : 'border-slate-200 bg-slate-100 hover:bg-slate-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <button 
              onClick={() => setShowDemoModal(true)}
              className="px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? 'border-slate-700' : 'border-slate-300 bg-slate-100 text-slate-600'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-4 pt-2 pb-6 space-y-4 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Features</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">About</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">How It Works</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Solutions</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium">FAQ</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setShowDemoModal(true); }}
              className="w-full py-3 rounded-lg font-medium text-white bg-indigo-600 text-center"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Announcing NOVA 2.0 Automation Engine</span>
        </div>
        
        <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Build Better. <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
            Work Smarter.
          </span>
        </h1>

        <p className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto font-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          NOVA is the AI-powered productivity platform that empowers teams to orchestrate projects, automate repetitive workflows, and collaborate seamlessly.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setShowDemoModal(true)}
            className="hero-action w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>Try Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowDemoModal(true)}
            className={`hero-action w-full sm:w-auto px-6 py-3 rounded-xl font-semibold border transition-all flex items-center justify-center space-x-2 ${darkMode ? 'border-slate-800 hover:bg-slate-900' : 'border-slate-300 hover:bg-slate-100'}`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Demo</span>
          </button>
        </div>
        <div className="hero-dashboard" aria-label="NOVA product dashboard preview">
          <div className="dashboard-topbar">
            <div className="dashboard-brand"><span className="dashboard-mark">N</span> NOVA Workspace</div>
            <span className="dashboard-status"><span /> All systems active</span>
          </div>
          <div className="dashboard-grid">
            <div className="dashboard-sidebar">
              <span className="dashboard-nav active">◈ Overview</span>
              <span className="dashboard-nav">⌁ Workflows</span>
              <span className="dashboard-nav">◌ Insights</span>
              <span className="dashboard-nav">⚙ Settings</span>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-heading"><div><small>MONDAY, OCTOBER 14</small><h3>Good morning, Alex</h3></div><span className="dashboard-avatar">A</span></div>
              <div className="dashboard-metrics">
                <div><small>Productivity score</small><strong>94.8%</strong><em>↗ 12.4%</em></div>
                <div><small>Hours reclaimed</small><strong>128.5</strong><em>↗ 8.2%</em></div>
                <div><small>Active workflows</small><strong>24</strong><em>+ 3 today</em></div>
              </div>
              <div className="dashboard-panels">
                <div className="dashboard-panel"><div className="panel-title">Team velocity <span>Last 7 days</span></div><div className="chart"><i style={{height:'42%'}} /><i style={{height:'58%'}} /><i style={{height:'48%'}} /><i style={{height:'72%'}} /><i style={{height:'64%'}} /><i style={{height:'84%'}} /><i style={{height:'96%'}} /></div></div>
                <div className="dashboard-panel activity"><div className="panel-title">AI activity <span>Live</span></div><p><b>✓</b> PR review completed <small>2m ago</small></p><p><b>✓</b> Sprint summary generated <small>18m ago</small></p><p><b>✓</b> Blocker detected in Jira <small>42m ago</small></p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUSTED BY / LOGOS */}
      <section className={`py-12 border-y ${darkMode ? 'border-slate-900 bg-slate-950/50' : 'border-slate-200 bg-slate-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-8">Trusted by leading teams worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {logos.map((logo, idx) => (
              <span key={idx} className="font-bold text-xl tracking-wider text-slate-400">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES SECTION (Min 6) */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Engineered for Maximum Efficiency</h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Everything you need to automate overhead and focus on high-impact output.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10' : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl'}`}
            >
              <div className={`p-3 rounded-xl inline-block mb-6 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PRODUCT / ABOUT SECTION */}
      <section id="about" className={`py-24 border-t ${darkMode ? 'border-slate-900 bg-slate-900/20' : 'border-slate-200 bg-slate-100/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-indigo-500 font-semibold text-sm uppercase tracking-wider">About The Platform</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-6">Designed to Eliminate Friction Across Every Project</h2>
              <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Traditional management tools rely on constant manual status updates, scattered communication, and tedious administrative overhead. 
              </p>
              <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                NOVA unifies your team's existing apps into a single intelligent layer. It anticipates blockers, auto-generates documentation, and assigns operational sub-tasks autonomously.
              </p>
              <div className="space-y-3">
                {['Zero manual status reporting', 'Seamless 2-way sync across 50+ integrations', 'Enterprise-grade end-to-end data privacy'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-8 rounded-3xl border shadow-2xl relative ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center space-x-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-500 ml-4">NOVA Assistant Context Sync</span>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  &gt; NOVA AI Agent initialized...<br/>
                  &gt; Analyzing sprint velocity across Jira & GitHub...
                </div>
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                  ✓ Identified blocker: API schema mismatch in PR #204.<br/>
                  ✓ Auto-notified @sarah-dev with contextual stack trace.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How NOVA Works</h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Get operational in minutes with three simple steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border relative ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="workflow-number" aria-hidden="true">{s.step}</span>
              <h3 className="text-xl font-bold mb-4 pr-12">{s.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. STATISTICS SECTION */}
      <section className={`py-16 border-y ${darkMode ? 'border-slate-900 bg-indigo-950/20' : 'border-slate-200 bg-indigo-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((st, idx) => (
            <div key={idx}>
              <div className="text-4xl sm:text-5xl font-black text-indigo-500 mb-2">{st.value}</div>
              <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SOLUTIONS / USE CASES */}
      <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tailored Solutions for Every Unit</h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Deploy domain-specific AI models optimized for your functional group.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:shadow-lg'}`}>
              <h3 className="text-xl font-bold mb-3 text-indigo-400">{sol.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{sol.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS (Min 3) */}
      <section className={`py-24 border-t ${darkMode ? 'border-slate-900 bg-slate-900/30' : 'border-slate-200 bg-slate-100/40'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-1 mb-8 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>

          <p className="text-xl sm:text-2xl font-medium leading-relaxed italic mb-8">
            "{testimonials[activeTestimonial].quote}"
          </p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src={testimonials[activeTestimonial].avatar} 
              alt={testimonials[activeTestimonial].author} 
              className="w-12 h-12 rounded-full border-2 border-indigo-500"
            />
            <div className="text-left">
              <div className="font-bold">{testimonials[activeTestimonial].author}</div>
              <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{testimonials[activeTestimonial].role}</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className={`p-2 rounded-full border ${darkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-200'}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className={`p-2 rounded-full border ${darkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-200'}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. PRICING (Min 3 plans with monthly/annual toggle) */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Flexible, Transparent Pricing</h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Scale seamlessly as your team's automation demands grow.</p>
          
          <div className={`pricing-toggle mt-6 inline-flex items-center rounded-xl border p-1 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`} role="group" aria-label="Billing frequency">
            <button 
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
              className={`pricing-option rounded-lg px-5 py-2 text-sm font-medium transition-all ${!isAnnual ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
              className={`pricing-option rounded-lg px-5 py-2 text-sm font-medium transition-all ${isAnnual ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Annual <span className="pricing-saving">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl border relative flex flex-col justify-between ${plan.popular ? 'border-indigo-500 shadow-2xl shadow-indigo-500/10' : darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase bg-indigo-600 text-white tracking-wider">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{plan.desc}</p>
                <div className="flex items-baseline space-x-1 mb-8">
                  <span className="text-4xl font-extrabold">{isAnnual ? plan.priceAnnual : plan.priceMonthly}</span>
                  {plan.priceMonthly !== 'Custom' && <span className="text-sm text-slate-500">/user/mo</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-3 text-sm">
                      <Check className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => setShowDemoModal(true)}
                className={`w-full py-3 rounded-xl font-medium text-sm transition-all ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ ACCORDION (Min 5) */}
      <section id="faq" className={`py-24 border-t ${darkMode ? 'border-slate-900 bg-slate-900/20' : 'border-slate-200 bg-slate-100/30'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className={`mt-4 text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Everything you need to know about NOVA's capabilities and compliance.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-base focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div id={`faq-answer-${idx}`} role="region" className={`px-6 pb-6 text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-tr from-indigo-900 via-slate-900 to-indigo-950 p-8 lg:p-12 border border-indigo-500/30 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Automate Your Team’s Workflows?
          </h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-10">
            Join over 10,000+ teams who have reclaimed millions of work hours with NOVA.
          </p>
          <button 
            onClick={() => setShowDemoModal(true)}
            className="px-8 py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg active:scale-95"
          >
            Get Started For Free
          </button>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className={`site-footer border-t ${darkMode ? 'border-slate-900 bg-slate-950 text-slate-400' : 'border-slate-200 bg-white text-slate-600'}`}>
        <div className="footer-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="footer-brand col-span-2">
            <div className="footer-logo flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">N</div>
              <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>NOVA</span>
            </div>
            <p className="footer-description text-sm leading-relaxed max-w-sm mb-5">
              NOVA is an AI-powered productivity platform designed to reduce operational drag and empower teams to do their best work.
            </p>
            
            {/* Newsletter Subscription */}
            <form onSubmit={handleNewsletterSubmit} className="footer-newsletter max-w-sm space-y-2">
              <span className="footer-label text-xs font-semibold uppercase tracking-wider text-slate-400">Subscribe to updates</span>
              <div className="footer-form-row flex space-x-2">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email..." 
                  required
                  className={`w-full px-3 py-2 text-xs rounded-lg border focus:outline-none ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300'}`}
                />
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-500">
                  Join
                </button>
              </div>
              {newsletterSuccess && <p className="text-xs text-emerald-400">Thanks for subscribing!</p>}
            </form>
          </div>

          <div className="footer-column">
            <h4 className={`font-semibold text-sm mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Product</h4>
            <ul className="footer-links space-y-2 text-sm">
              <li><a href="#features" className="hover:text-indigo-400">Features</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400">Pricing</a></li>
              <li><a href="#solutions" className="hover:text-indigo-400">Integrations</a></li>
              <li><a href="#faq" className="hover:text-indigo-400">Enterprise</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className={`font-semibold text-sm mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Company</h4>
            <ul className="footer-links space-y-2 text-sm">
              <li><a href="#about" className="hover:text-indigo-400">About</a></li>
              <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400">Press</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className={`font-semibold text-sm mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>Legal</h4>
            <ul className="footer-links space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400">Security</a></li>
              <li><a href="#" className="hover:text-indigo-400">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className={`footer-bottom max-w-7xl mx-auto px-4 text-xs border-t flex flex-col sm:flex-row items-center justify-between ${darkMode ? 'border-slate-800/50' : 'border-slate-200'}`}>
          <p>© 2026 NOVA AI, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-indigo-400">Twitter</a>
            <a href="#" className="hover:text-indigo-400">LinkedIn</a>
            <a href="#" className="hover:text-indigo-400">GitHub</a>
          </div>
        </div>
      </footer>

      {/* --- MODAL INTERACTION --- */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="demo-title" onClick={(e) => e.target === e.currentTarget && setShowDemoModal(false)}>
          <div className={`max-w-md w-full p-8 rounded-3xl border shadow-2xl relative ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <button 
              onClick={() => { setShowDemoModal(false); setDemoSubmitted(false); }}
              aria-label="Close demo request dialog"
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 id="demo-title" className="text-2xl font-bold mb-2">Request NOVA Demo</h3>
            <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>See how NOVA can automate 40% of your team’s weekly overhead.</p>
            {demoSubmitted ? (
              <div className="demo-success"><CheckCircle className="w-10 h-10 text-emerald-400" /><h4>Request received!</h4><p>Our team will contact you shortly.</p><button type="button" onClick={() => { setDemoSubmitted(false); setShowDemoModal(false); }} className="mt-4 w-full py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm">Done</button></div>
            ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDemoSubmitted(true); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Work Email</label>
                <input required type="email" placeholder="alex@company.com" className={`w-full p-3 rounded-xl border text-sm focus:outline-none ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-300'}`} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Team Size</label>
                <select className={`w-full p-3 rounded-xl border text-sm focus:outline-none ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-300'}`}>
                  <option>1-10 members</option>
                  <option>11-50 members</option>
                  <option>51-200 members</option>
                  <option>200+ members</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all">
                Submit Request
              </button>
            </form>
            )}
          </div>
        </div>
      )}

      {/* --- BACK TO TOP BUTTON --- */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-xl hover:bg-indigo-500 transition-all z-40 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}