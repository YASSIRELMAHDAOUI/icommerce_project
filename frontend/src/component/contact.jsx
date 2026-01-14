import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
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
                 
                 <div className="flex items-center space-x-4">
                   <Link 
                     to="/listeproduit"
                     className="hidden md:inline-flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 hover:-translate-y-2 duration-700"
                   >
                     Nos produits
                   </Link>

                 </div>
               </div>
             </div>
           </nav>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Suivez-nous sur les réseaux sociaux ou contactez-nous directement pour toute question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className='bg-gray-50 rounded-lg p-8'>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Informations de contact</h2>
              
              <div className="space-y-4 ml-2">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-gray-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Notre studio</h3>
                    <p className="text-gray-600">123 Industrial Avenue<br />Toronto, ON M5V 2T6<br />Canada</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-gray-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+1 (416) 555-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-gray-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@industrial-fashion.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-gray-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Heures d'ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 10h - 18h<br />
                      Samedi: 11h - 17h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p>Carte interactive</p>
                <p className="text-sm">123 Industrial Avenue, Toronto</p>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux - Remplace le formulaire */}
          <div className="bg-gray-50 rounded-lg p-8 mt-6">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Suivez-nous</h2>
            
            <div className="space-y-8">
              {/* Instagram */}
              <a 
                href="https://instagram.com/yourbrand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-lg hover:opacity-90 transition-opacity duration-200 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Instagram</h3>
                  <p className="text-white/90 mt-1">@industrial_fashion</p>
                  <p className="text-white/80 text-sm mt-2">Découvrez nos dernières collections et coulisses</p>
                </div>
                <div className="ml-auto text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/14165557890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-gradient-to-r from-green-600 via-white to-green-600 rounded-lg hover:opacity-90 transition-opacity duration-200 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6">
                  <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                  <p className="text-white/90 mt-1">+1 (416) 555-7890</p>
                  <p className="text-white/80 text-sm mt-2">Service client direct et rapide</p>
                </div>
                <div className="ml-auto text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/yourbrand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-gradient-to-r from-blue-600 via-white to-blue-600 rounded-lg hover:opacity-90 transition-opacity duration-200 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6">
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Facebook</h3>
                  <p className="text-white/90 mt-1">Industrial Fashion</p>
                  <p className="text-white/80 text-sm mt-2">Événements, nouvelles et communauté</p>
                </div>
                <div className="ml-auto text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              {/* Autres contacts */}
              <div className="pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Autres moyens de contact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="mailto:hello@industrial-fashion.com"
                    className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email</span>
                  </a>
                  <a 
                    href="tel:+14165557890"
                    className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Téléphone</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section (inchangée) */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">Foire aux questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Livrez-vous à l'international ?</h3>
                <p className="text-gray-600 text-sm">Oui, nous livrons dans le monde entier. Les frais de port et délais varient selon la destination.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Quelle est votre politique de retour ?</h3>
                <p className="text-gray-600 text-sm">Nous acceptons les retours sous 30 jours pour les articles non utilisés dans leur état d'origine.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Puis-je visiter votre studio ?</h3>
                <p className="text-gray-600 text-sm">Oui, notre studio torontois est ouvert aux visiteurs pendant les heures d'ouverture sur rendez-vous.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Acceptez-vous les commandes sur mesure ?</h3>
                <p className="text-gray-600 text-sm">Nous acceptons un nombre limité de commandes personnalisées. Contactez-nous pour discuter de vos besoins.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Comment entretenir mes produits ?</h3>
                <p className="text-gray-600 text-sm">Chaque produit est livré avec des instructions d'entretien spécifiques pour assurer sa longévité.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Avez-vous un programme de vente en gros ?</h3>
                <p className="text-gray-600 text-sm">Oui, nous travaillons avec des détaillants sélectionnés. Envoyez-nous un email pour les demandes de gros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (inchangé) */}
      <footer className="bg-gray-50 text-black mt-10">
        {/* ... (le reste du footer reste inchangé) ... */}
      </footer>
    </div>
  );
};

export default ContactUs;