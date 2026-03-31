import { Utensils, ChevronLeft, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function CGV() {
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
              <Scale className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">Conditions Générales de Vente</h1>
          </div>

          <div className="text-slate-600 leading-relaxed space-y-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">1. Identification de la société</h4>
              <p>Raison sociale : Children’s Kitchen</p>
              <p>Forme juridique : SARL Associé Unique</p>
              <p>Siège social : Appartement 15, immeuble 12, Sine, avenue Allal Al Fassi, Marrakech, Maroc</p>
              <p>Registre de commerce : RC n° 74339</p>
              <p>ICE : 002565498000016</p>
              <p>Responsable légal : Children’s Kitchen</p>
              <p>Email de contact : kitchenchildren26@gmail.com</p>
              <p>Téléphone : 07 06 06 11 55</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">2. Objet</h4>
              <p>Les présentes Conditions Générales de Vente ont pour objet de définir les modalités de réservation, de paiement et de fourniture des repas scolaires proposés via l'application mobile Children’s Kitchen.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">3. Description du service</h4>
              <p>L'application Children’s Kitchen permet aux utilisateurs de : consulter les menus proposés, réserver des repas scolaires, payer en ligne les repas réservés. Les services sont destinés aux élèves, à leurs représentants légaux et aux établissements scolaires partenaires.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">4. Prix</h4>
              <p>Les prix sont indiqués en dirhams marocains (MAD), toutes taxes comprises (TTC). Le prix d'un repas est fixé à 45 DH TTC. Le prix applicable est celui affiché au moment de la validation de la commande. Children’s Kitchen se réserve le droit de modifier les prix à tout moment, sans effet rétroactif.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">5. Modalités de paiement</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Le paiement est exigible immédiatement lors de la réservation.</li>
                <li>Le paiement s'effectue exclusivement en ligne via la plateforme sécurisée Payzone.</li>
                <li>Children’s Kitchen ne stocke aucune donnée bancaire.</li>
                <li>Toute commande validée et payée est considérée comme ferme.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">6. Livraison / Exécution du service</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Les repas sont préparés et livrés au sein des établissements scolaires partenaires.</li>
                <li>La livraison est effectuée à la date choisie lors de la réservation.</li>
                <li>En cas d'absence de l'élève non signalée dans les délais, le repas est considéré comme livré.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">7. Politique d'annulation</h4>
              <p>Toute réservation peut être annulée sans frais jusqu'à 20h00 la veille du jour de la livraison du repas. Passé ce délai : aucune annulation ne sera acceptée, aucun remboursement ne pourra être effectué, le repas étant considéré comme engagé en production. Les annulations doivent être effectuées via l'application Children’s Kitchen ou selon les modalités définies par l'établissement scolaire partenaire.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">8. Remboursement</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Toute annulation effectuée dans le délai autorisé donne lieu à un remboursement intégral.</li>
                <li>Aucun remboursement ne sera accordé pour les annulations hors délai ou les absences non signalées.</li>
                <li>En cas d'annulation imputable à Children’s Kitchen, le remboursement sera effectué selon le moyen de paiement utilisé.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">9. Responsabilité</h4>
              <p>Children’s Kitchen s'engage à fournir un service conforme aux normes d'hygiène et de sécurité en vigueur. La responsabilité de la société ne saurait être engagée en cas de force majeure ou de fait imputable à l'utilisateur ou à l'établissement scolaire partenaire.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">10. Données personnelles</h4>
              <p>Les données personnelles collectées sont traitées conformément à la réglementation en vigueur et à la politique de confidentialité disponible dans l'application.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">11. Droit applicable et litiges</h4>
              <p>Les présentes Conditions Générales de Vente sont soumises au droit marocain. Tout litige relève de la compétence exclusive des tribunaux marocains.</p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-6 mb-8 font-bold">
          <Link to="/mentions-legales" className="hover:text-blue-500 transition-colors">Mentions Légales</Link>
          <Link to="/confidentialite" className="hover:text-blue-500 transition-colors">Confidentialité</Link>
          <Link to="/cgv" className="text-blue-500">CGV</Link>
          <Link to="/data-deletion" className="hover:text-blue-500 transition-colors">Suppression des données</Link>
        </div>
        <p>© 2026 Children's Kitchen Maroc. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
