import { Utensils, ChevronLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Confidentialite() {
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
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">Politique de Confidentialité</h1>
          </div>

          <div className="text-slate-600 leading-relaxed space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">1. Collecte des données personnelles</h4>
              <p>Dans le cadre de l'utilisation de l'application Children’s Kitchen, les données suivantes peuvent être collectées :</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>nom et prénom,</li>
                <li>coordonnées (email, numéro de téléphone),</li>
                <li>informations relatives aux réservations de repas,</li>
                <li>données de paiement traitées par un prestataire externe.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">2. Utilisation des données</h4>
              <p>Les données collectées sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>la gestion des réservations et des paiements,</li>
                <li>la communication avec les utilisateurs,</li>
                <li>le respect des obligations légales et réglementaires.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">3. Paiement sécurisé</h4>
              <p>Les paiements sont traités par la plateforme sécurisée Payzone. Children’s Kitchen ne conserve aucune donnée bancaire.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">4. Conservation des données</h4>
              <p>Les données personnelles sont conservées pendant la durée strictement nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, conformément à la législation en vigueur.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">5. Droits des utilisateurs</h4>
              <p>Les utilisateurs disposent d'un droit : d'accès à leurs données, de rectification, de suppression. Toute demande peut être adressée à l'adresse suivante : kitchenchildren26@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">6. Sécurité des données</h4>
              <p>Children’s Kitchen met en œuvre toutes les mesures techniques et organisationnelles nécessaires afin de garantir la sécurité et la confidentialité des données personnelles.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">7. Droit applicable</h4>
              <p>La présente politique de confidentialité est régie par le droit marocain.</p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-6 mb-8 font-bold">
          <Link to="/mentions-legales" className="hover:text-blue-500 transition-colors">Mentions Légales</Link>
          <Link to="/confidentialite" className="text-blue-500">Confidentialité</Link>
          <Link to="/cgv" className="hover:text-blue-500 transition-colors">CGV</Link>
          <Link to="/data-deletion" className="hover:text-blue-500 transition-colors">Suppression des données</Link>
        </div>
        <p>© 2026 Children's Kitchen Maroc. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
