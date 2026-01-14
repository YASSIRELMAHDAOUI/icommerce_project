import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation améliorée */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-light tracking-wide text-gray-900">
                  Retour à l'accueil
                </h1>
                <p className="text-xs text-gray-500">Continuer la navigation</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4 ">
              <Link 
                to="/listeproduit"
                className="hidden md:inline-flex items-center px-4 py-2 text-gray-700 hover:text-gray-900  hover:-translate-y-2 duration-700"
              >
                Nos produits
              </Link>

            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              À propos de <span className="font-medium">MOUNIR.STORE</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Où le design industriel rencontre l'élégance de la mode pour créer 
              des pièces uniques qui améliorent votre quotidien.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophie Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Notre Philosophie</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Chez <span className="font-medium text-gray-900">MOUNIR.STORE</span>, nous croyons que le design industriel 
                  et la mode partagent une passion commune pour la fonctionnalité, la durabilité et l'esthétique épurée. 
                  Chaque pièce est conçue comme une fusion entre la robustesse industrielle et l'élégance contemporaine.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Notre approche combine <span className="italic text-gray-900">"l'Attention Obsessionnelle"</span> et 
                  <span className="italic text-gray-900">"l'Effort Intelligent"</span> pour créer des accessoires qui 
                  améliorent la vie quotidienne de manière subtile mais significative.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-gray-700">Design fonctionnel et esthétique</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-gray-700">Matériaux luxueux et durables</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-gray-700">Fabrication artisanale</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-gray-700">Innovation continue</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Notre atelier"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Les principes qui guident chaque décision de design et de fabrication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Innovation Technique</h3>
              <p className="text-gray-600 text-center">
                Nous repoussons les limites des matériaux et des techniques de fabrication 
                pour créer des pièces uniques qui défient les conventions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Durabilité</h3>
              <p className="text-gray-600 text-center">
                Chaque création est conçue pour durer, en utilisant des matériaux de qualité 
                et des méthodes de production responsables.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Artisanat</h3>
              <p className="text-gray-600 text-center">
                Un savoir-faire artisanal méticuleux combiné à une attention obsessionnelle 
                du détail caractérise chaque pièce que nous créons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Notre Processus de Création</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              De l'idée initiale à la pièce finie, chaque étape est soigneusement orchestrée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-light text-gray-900 mb-4">01</div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Conception</h3>
              <p className="text-gray-600 text-sm">
                Esquisses et modélisation 3D pour fusionner design industriel et esthétique fashion
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-light text-gray-900 mb-4">02</div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Sélection des Matériaux</h3>
              <p className="text-gray-600 text-sm">
                Choix méticuleux de matériaux luxueux et durables qui définissent notre identité
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-light text-gray-900 mb-4">03</div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Fabrication</h3>
              <p className="text-gray-600 text-sm">
                Techniques artisanales combinées à des procédés industriels de précision
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-light text-gray-900 mb-4">04</div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Contrôle Qualité</h3>
              <p className="text-gray-600 text-sm">
                Inspection rigoureuse pour garantir l'excellence de chaque pièce avant expédition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Rejoignez Notre Vision</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Découvrez une collection où chaque pièce raconte une histoire d'innovation, 
            de passion et d'excellence artisanale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/listeproduit"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 font-medium shadow-lg hover:shadow-xl"
            >
              Découvrir la Collection
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              to="/Contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 font-medium"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Footer amélioré */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand & Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold">M</span>
                </div>
                <h3 className="text-2xl font-medium">MOUNIR<span className="text-gray-400">.STORE</span></h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Produits de luxe fonctionnels en matériaux premium pour améliorer le quotidien.
                Attention obsessionnelle aux détails et effort intelligent.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'Facebook'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="text-lg font-medium mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/listeproduit" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    Collection
                  </Link>
                </li>
                <li>
                  <Link to="/propos" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service client */}
            <div>
              <h4 className="text-lg font-medium mb-4">Service Client</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    Contactez-nous
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    Livraison & Retours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    Guide des tailles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                    Soin des produits
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium mb-4">Restons connectés</h4>
              <p className="text-gray-400 mb-4">
                Inscrivez-vous pour recevoir nos dernières collections et offres exclusives.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>

          {/* Section inférieure */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} MOUNIR.STORE. Tous droits réservés.
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {['Mentions légales', 'Politique de confidentialité', 'Conditions générales', 'Cookies'].map((item, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bande de sécurité */}
        <div className="bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                  <span>Livraison internationale</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Garantie 2 ans</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm">Paiements acceptés:</span>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center text-xs text-white font-medium">Carte</div>
                  <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center text-xs text-white font-medium">Espèces</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;