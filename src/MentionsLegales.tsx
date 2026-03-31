import { Utensils, ChevronLeft, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
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

      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-50 rounded-2xl">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">Mentions Légales</h1>
          </div>

          <div className="text-slate-600 leading-relaxed space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Éditeur de l'application</h4>
              <p>Children’s Kitchen</p>
              <p>SARL Associé Unique</p>
              <p>Siège social : Appartement 15, immeuble 12, Sine, avenue Allal Al Fassi, Marrakech, Maroc</p>
              <p>Registre de commerce : RC n° 74339</p>
              <p>ICE : 002565498000016</p>
              <p>Responsable légal : Children’s Kitchen</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Contact</h4>
              <p>Email : kitchenchildren26@gmail.com</p>
              <p>Téléphone : 07 06 06 11 55</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Hébergement</h4>
              <p>L'application Children’s Kitchen est hébergée sur des serveurs sécurisés répondant aux standards de sécurité et de fiabilité en vigueur.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Propriété intellectuelle</h4>
              <p>L'ensemble des contenus présents dans l'application (textes, visuels, logos, interfaces, fonctionnalités) est la propriété exclusive de Children’s Kitchen. Toute reproduction, représentation ou exploitation non autorisée est strictement interdite.</p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-6 mb-8 font-bold">
          <Link to="/mentions-legales" className="text-blue-500">Mentions Légales</Link>
          <Link to="/confidentialite" className="hover:text-blue-500 transition-colors">Confidentialité</Link>
          <Link to="/cgv" className="hover:text-blue-500 transition-colors">CGV</Link>
          <Link to="/data-deletion" className="hover:text-blue-500 transition-colors">Suppression des données</Link>
        </div>
        <p>© 2026 Children's Kitchen Maroc. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
