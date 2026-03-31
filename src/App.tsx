/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  Users, 
  Utensils, 
  ShieldCheck, 
  Zap, 
  Menu, 
  X, 
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Apple,
  Play,
  Star,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const MentionsLegales = lazy(() => import('./MentionsLegales'));
const Confidentialite = lazy(() => import('./Confidentialite'));
const CGV = lazy(() => import('./CGV'));
const DataDeletion = lazy(() => import('./DataDeletion'));

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log('Landing component mounted');
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Avantages', href: '#advantages' },
    { name: 'Contact', href: '#contact' },
  ];

  const AppStoreButtons = ({ className = "", dark = true }: { className?: string, dark?: boolean }) => (
    <div className={`flex flex-col sm:flex-row items-center gap-4 ${className}`}>
      <button className={`flex items-center gap-3 px-6 py-3 ${dark ? 'bg-black text-white hover:bg-slate-900' : 'bg-white text-slate-900 hover:bg-slate-50'} rounded-2xl transition-all hover:scale-105 shadow-lg shadow-black/10 min-w-[210px]`}>
        <Apple className="w-8 h-8" />
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold opacity-70 leading-tight">TÉLÉCHARGER SUR L'</p>
          <p className="text-lg font-bold leading-tight">App Store</p>
        </div>
      </button>
      <button className={`flex items-center gap-3 px-6 py-3 ${dark ? 'bg-black text-white hover:bg-slate-900' : 'bg-white text-slate-900 hover:bg-slate-50'} rounded-2xl transition-all hover:scale-105 shadow-lg shadow-black/10 min-w-[210px]`}>
        <Play className={`w-8 h-8 ${dark ? 'fill-white' : 'fill-current'}`} />
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold opacity-70 leading-tight">DISPONIBLE SUR</p>
          <p className="text-lg font-bold leading-tight">Google Play</p>
        </div>
      </button>
    </div>
  );

  const appFeatures = [
    {
      title: 'Menu de la Semaine',
      icon: <Utensils className="w-8 h-8" />,
      description: 'Consultez les menus détaillés de la cantine avec photos et informations nutritionnelles complètes.',
      features: [
        { text: 'Photos des plats', icon: <CheckCircle2 className="w-3 h-3" /> },
        { text: 'Allergènes listés', icon: <CheckCircle2 className="w-3 h-3" /> },
        { text: 'Scores nutritionnels', icon: <CheckCircle2 className="w-3 h-3" /> }
      ]
    },
    {
      title: 'Réservation Express',
      icon: <Zap className="w-8 h-8" />,
      description: 'Réservez ou annulez les repas de vos enfants en un clic, jusqu\'à la veille au soir.',
      features: [
        { text: 'Calendrier intuitif', icon: <CheckCircle2 className="w-3 h-3" /> },
        { text: 'Modifications instantanées', icon: <CheckCircle2 className="w-3 h-3" /> },
        { text: 'Rappels automatiques', icon: <CheckCircle2 className="w-3 h-3" /> }
      ]
    },
    {
      title: 'Paiement Sécurisé',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Rechargez votre compte via Payzone ou Apple/Google Pay en toute sécurité.',
      features: [
        { text: 'Historique des transactions', icon: <CheckCircle2 className="w-3 h-3" /> },
        { text: 'Factures téléchargeables', icon: <CheckCircle2 className="w-3 h-3" /> },
        { text: 'Solde en temps réel', icon: <CheckCircle2 className="w-3 h-3" /> }
      ]
    },
    {
      title: 'Interface Intuitive',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Une expérience utilisateur fluide et moderne, conçue spécifiquement pour les parents pressés.',
      features: [
        { text: 'Design moderne', icon: <CheckCircle2 className="w-3 h-3" /> },
        { text: 'Navigation simple', icon: <CheckCircle2 className="w-3 h-3" /> },
        { text: 'Mode sombre', icon: <CheckCircle2 className="w-3 h-3" /> }
      ]
    }
  ];

  const advantages = [
    {
      title: 'Sérénité Parentale',
      icon: <ShieldCheck className="w-6 h-6" />,
      description: 'Gérez tout depuis votre canapé. Plus de stress le matin pour les tickets de cantine ou la monnaie.',
      color: 'bg-blue-500'
    },
    {
      title: 'Zéro Gaspillage',
      icon: <Zap className="w-6 h-6" />,
      description: 'Contribuez à une démarche éco-responsable. Les écoles cuisinent exactement ce qui est réservé.',
      color: 'bg-emerald-500'
    },
    {
      title: 'Gestion Multi-Enfants',
      icon: <Users className="w-6 h-6" />,
      description: 'Un seul compte pour toute la fratrie. Suivez les repas et les soldes de chacun en un clin d\'œil.',
      color: 'bg-purple-500'
    },
    {
      title: 'Paiement Instantané',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Rechargez en quelques secondes via Payzone. Fini les chèques et les déplacements à l\'école.',
      color: 'bg-amber-500'
    }
  ];

  const PhoneMockup = ({ className = "" }: { className?: string }) => (
    <div className={`relative w-[160px] h-[320px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden flex-shrink-0 ${className}`}>
      <div className="w-full h-full bg-white flex flex-col">
        {/* Status Bar */}
        <div className="h-6 w-full bg-white flex justify-between px-6 pt-2">
          <div className="w-8 h-1.5 bg-slate-100 rounded-full"></div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-slate-100 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-slate-100 rounded-full"></div>
          </div>
        </div>
        {/* App Content Placeholder */}
        <div className="flex-1 p-4 space-y-3">
          <div className="w-full h-24 bg-blue-50 rounded-xl flex items-center justify-center">
            <Utensils className="text-blue-500/30 w-8 h-8" />
          </div>
          <div className="space-y-2">
            <div className="w-full h-2 bg-slate-50 rounded-full"></div>
            <div className="w-3/4 h-2 bg-slate-50 rounded-full"></div>
            <div className="w-1/2 h-2 bg-slate-50 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="h-12 bg-slate-50 rounded-lg"></div>
            <div className="h-12 bg-slate-50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#60B1FF] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute top-[5%] left-[5%] w-[40%] h-[40%] bg-[#319AFF] rounded-full blur-[100px] opacity-15"></div>
      </div>

      {/* 1. NAVBAR */}
      <div className="fixed top-[30px] left-0 right-0 z-50 flex justify-center px-4">
        <nav className="glass-navbar w-fit px-8 py-3 rounded-[16px] flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
              <Utensils className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">Children's<span className="text-blue-500">Kitchen</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="glass-cta text-white px-5 py-2 rounded-[12px] font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
            Télécharger
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[80px] left-4 right-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-2xl p-8 flex flex-col gap-6 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-slate-900 hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                Télécharger l'app
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* 2. HERO SECTION */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between pt-40 pb-20 gap-12">
          {/* Hero Left */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">L'application n°1 de cantine scolaire au Maroc</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[50px] sm:text-[75px] font-extrabold text-slate-900 leading-[1.05] tracking-[-2px] font-display"
            >
              La révolution de la <br />
              cantine scolaire.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-[18px] text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-[-1px] font-medium"
            >
              Gérez les repas de vos enfants en toute simplicité. Consultez les menus, réservez et payez en un clic avec notre application intuitive.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-8"
            >
              <button className="glass-cta text-white px-8 py-4 rounded-[16px] font-bold text-lg flex items-center gap-3 hover:scale-[1.02] transition-all active:scale-95 group shadow-xl shadow-blue-500/20">
                Commencer dès maintenant
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="text-blue-500 w-4 h-4" />
                </div>
              </button>

              <AppStoreButtons />
            </motion.div>
          </div>

          {/* Hero Right - Mobile Screens Mockup */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-[600px]">
              {/* Main Phone */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-0 right-0 w-[280px] h-[560px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden z-20"
              >
                <div className="w-full h-full bg-blue-50 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Utensils className="text-white w-8 h-8" />
                  </div>
                  <p className="text-blue-900 font-bold text-lg mb-2">Children's Kitchen</p>
                  <div className="w-full h-2 bg-blue-100 rounded-full mb-2"></div>
                  <div className="w-3/4 h-2 bg-blue-100 rounded-full"></div>
                </div>
              </motion.div>
              
              {/* Secondary Phone */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                animate={{ opacity: 1, x: -120, y: 60, rotate: -10 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-0 right-0 w-[280px] h-[560px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden z-10 opacity-40"
              >
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                   <Smartphone className="w-12 h-12 text-blue-300" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. TRUSTED BY SECTION */}
        <section className="py-20 border-t border-slate-100 flex flex-col items-center gap-12">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Fait confiance par les meilleures institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-400 rounded-lg"></div>
                <div className="h-4 w-24 bg-slate-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section - Maintaining Content */}
        <section id="features" className="py-32">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-display">Tout ce dont vous avez besoin.</h2>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              Une application pensée pour les parents, avec une interface fluide et des fonctionnalités essentielles.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {appFeatures.map((feature, i) => {
                const isSpecial = feature.title === 'Menu de la Semaine' || feature.title === 'Interface Intuitive';
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col ${isSpecial ? 'md:col-span-2' : ''}`}
                  >
                    {/* Tags at the top for special cards */}
                    {isSpecial && (
                      <div className="flex flex-wrap gap-3 mb-8">
                        {feature.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-100">
                            {f.icon}
                            {f.text}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">{feature.title}</h3>
                    </div>

                    <p className="text-slate-600 mb-8 text-base leading-relaxed">{feature.description}</p>
                    
                    {/* Tags at the bottom for non-special cards */}
                    {!isSpecial && (
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {feature.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-100">
                            {f.icon}
                            {f.text}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Phone mockups for special cards */}
                    {isSpecial && (
                      <div className="mt-auto pt-8 flex justify-center gap-6 sm:gap-10 overflow-hidden px-4">
                        <PhoneMockup className="rotate-[-8deg] translate-y-12 opacity-60 group-hover:rotate-[-4deg] group-hover:translate-y-8 transition-all duration-700" />
                        <PhoneMockup className="z-10 scale-110 translate-y-4 group-hover:translate-y-0 transition-all duration-700" />
                        <PhoneMockup className="rotate-[8deg] translate-y-12 opacity-60 group-hover:rotate-[4deg] group-hover:translate-y-8 transition-all duration-700" />
                        <PhoneMockup className="rotate-[15deg] translate-y-20 opacity-30 group-hover:rotate-[10deg] group-hover:translate-y-16 transition-all duration-700 hidden lg:block" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="py-32">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-slate-50 rounded-full border border-slate-100 mb-6"
            >
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pourquoi nous ?</span>
            </motion.div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-display">Pourquoi choisir <br /><span className="text-blue-500">Children's Kitchen ?</span></h2>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              Nous simplifions la vie des parents tout en optimisant la gestion des cantines scolaires au Maroc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative background element */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 ${advantage.color} opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className={`w-16 h-16 ${advantage.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-current/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                    {advantage.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">{advantage.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium">
                      {advantage.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-500 font-bold text-sm group-hover:gap-3 transition-all cursor-pointer">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="bg-slate-900 rounded-[48px] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-16 lg:p-24 bg-blue-500 text-white flex flex-col justify-between">
                <div className="space-y-10">
                  <h2 className="text-5xl font-extrabold leading-tight tracking-tight font-display">Une question sur <br /><span className="text-blue-200">l'application ?</span></h2>
                  <p className="text-xl text-blue-50 font-medium">Notre équipe est là pour vous aider à tirer le meilleur parti de Children's Kitchen.</p>
                </div>
                <div className="space-y-8 pt-16">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 font-extrabold uppercase tracking-widest mb-1">Email</p>
                      <p className="text-xl font-extrabold">hello@childrenskitchen.ma</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-16 lg:p-24 space-y-10 bg-slate-900">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Nom complet</label>
                      <input type="text" className="w-full bg-slate-800 text-white px-6 py-4 rounded-2xl border border-slate-700 focus:border-blue-500 outline-none transition-all font-bold" placeholder="Ahmed Alaoui" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Établissement</label>
                      <input type="text" className="w-full bg-slate-800 text-white px-6 py-4 rounded-2xl border border-slate-700 focus:border-blue-500 outline-none transition-all font-bold" placeholder="Nom de l'école" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Email professionnel</label>
                    <input type="email" className="w-full bg-slate-800 text-white px-6 py-4 rounded-2xl border border-slate-700 focus:border-blue-500 outline-none transition-all font-bold" placeholder="contact@ecole.ma" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Message</label>
                    <textarea className="w-full bg-slate-800 text-white px-6 py-4 rounded-2xl border border-slate-700 focus:border-blue-500 outline-none transition-all h-40 font-bold resize-none" placeholder="Décrivez votre besoin..."></textarea>
                  </div>
                  <button className="w-full bg-white text-slate-900 py-6 rounded-2xl font-extrabold text-sm uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="py-32">
          <div className="bg-slate-900 rounded-[48px] p-16 lg:p-32 text-center space-y-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent pointer-events-none"></div>
            <h2 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight font-display relative z-10">Prêt à simplifier <br />votre quotidien ?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto relative z-10">Rejoignez des milliers de parents marocains qui utilisent déjà Children's Kitchen.</p>
            <div className="flex justify-center relative z-10">
              <AppStoreButtons dark={false} />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Utensils className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">Children's<span className="text-blue-500">Kitchen</span></span>
              </div>
              <p className="text-base leading-relaxed text-slate-500 font-medium">
                L'application mobile qui révolutionne la restauration scolaire au Maroc pour les parents et les enfants.
              </p>
            </div>

            <div>
              <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-widest mb-10">Navigation</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><a href="#features" className="text-slate-500 hover:text-blue-500 transition-colors">Fonctionnalités</a></li>
                <li><a href="#advantages" className="text-slate-500 hover:text-blue-500 transition-colors">Avantages</a></li>
                <li><a href="#contact" className="text-slate-500 hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-widest mb-10">Légal</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><Link to="/confidentialite" className="text-slate-500 hover:text-blue-500 transition-colors">Confidentialité</Link></li>
                <li><Link to="/cgv" className="text-slate-500 hover:text-blue-500 transition-colors">Conditions Générales</Link></li>
                <li><Link to="/mentions-legales" className="text-slate-500 hover:text-blue-500 transition-colors">Mentions Légales</Link></li>
                <li><Link to="/data-deletion" className="text-slate-500 hover:text-blue-500 transition-colors">Suppression des données</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-widest mb-10">Réseaux</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">© 2026 Children's Kitchen Maroc. Tous droits réservés.</p>
            <div className="flex items-center gap-8">
              <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-[0.3em]">Conformité CNDP Loi 09-08</span>
              <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-[0.3em]">Hébergement Souverain</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
