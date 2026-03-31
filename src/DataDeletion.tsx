import { Utensils, ChevronLeft, Trash2, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function DataDeletion() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header Minimal */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Utensils className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 font-display">Children's<span className="text-blue-500">Kitchen</span></span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-500 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] border border-slate-200 p-8 sm:p-12 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-50 rounded-2xl">
              <Trash2 className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">Suppression des données</h1>
          </div>

          {!submitted ? (
            <div className="space-y-8">
              <p className="text-slate-600 leading-relaxed">
                Conformément à la réglementation sur la protection des données, vous avez le droit de demander la suppression de vos données personnelles de nos systèmes.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 space-y-4">
                <h3 className="font-bold text-blue-900 flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Comment procéder ?
                </h3>
                <p className="text-blue-800 text-sm">
                  Vous pouvez nous envoyer une demande directe à <a href="mailto:kitchenchildren26@gmail.com" className="font-bold underline">kitchenchildren26@gmail.com</a> ou remplir le formulaire ci-dessous.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Nom complet</label>
                  <input required type="text" className="w-full bg-slate-50 text-slate-900 px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 outline-none transition-all font-bold" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Email associé au compte</label>
                  <input required type="email" className="w-full bg-slate-50 text-slate-900 px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 outline-none transition-all font-bold" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Raison de la demande (optionnel)</label>
                  <textarea className="w-full bg-slate-50 text-slate-900 px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 outline-none transition-all h-32 font-bold resize-none" placeholder="Pourquoi souhaitez-vous supprimer vos données ?"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-extrabold flex items-center justify-center gap-3 hover:bg-red-600 transition-all">
                  <Send className="w-5 h-5" /> Envoyer la demande de suppression
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Demande envoyée !</h2>
              <p className="text-slate-600">
                Votre demande de suppression de données a bien été reçue. Notre équipe traitera votre demande dans les plus brefs délais (généralement sous 30 jours).
              </p>
              <Link to="/" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors">
                Retour à l'accueil
              </Link>
            </div>
          )}
        </motion.div>
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-6 mb-8 font-bold">
          <Link to="/mentions-legales" className="hover:text-blue-500 transition-colors">Mentions Légales</Link>
          <Link to="/confidentialite" className="hover:text-blue-500 transition-colors">Confidentialité</Link>
          <Link to="/cgv" className="hover:text-blue-500 transition-colors">CGV</Link>
          <Link to="/data-deletion" className="text-blue-500">Suppression des données</Link>
        </div>
        <p>© 2026 Children's Kitchen Maroc. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
