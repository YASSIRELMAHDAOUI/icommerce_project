import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-medium mb-4">LuxuryBrand</h3>
            <p className="text-black leading-relaxed mb-4">
              Functional luxury goods made of premium materials to improve people's lives 
              in small but mighty ways. Obsessive attention to detail and intelligent effort.
            </p>
            <div className="flex gap-6 ml-16 mt-6">
              <a href="#" className="text-black hover:text-blue-500 ">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-black   hover:text-red-500   ">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.567-.994 3.993-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-pink-500  ">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Nouveautés
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Éditions limitées
                </a>
              </li>
            </ul>
          </div>

          {/* Service client */}
          <div>
            <h4 className="text-lg font-medium mb-4">Service Client</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Contactez-nous
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Livraison & Retours
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Guide des tailles
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors duration-200">
                  Soin des produits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Restons connectés</h4>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos dernières collections et offres exclusives.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-700 rounded-md text-white placeholder-gray-400 "
              />
              <button
                type="submit"
                className="w-full bg-gray-800 text-gray-50 py-2 px-4 rounded-md hover:bg-gray-500"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Section inférieure */}
        <div className="border-t border-gray-50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex ml-85 space-x-6 text-sm">
              <a href="#" className="text-black">
                Mentions légales
              </a>
              <a href="#" className="text-black ">
                Politique de confidentialité
              </a>
              <a href="#" className="text-black ">
                Conditions générales
              </a>
              <a href="#" className="text-black ">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bande de sécurité */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center justify-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center space-x-2 text-black text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center space-x-2 text-black text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
                <span>Livraison internationale</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-black text-sm">Paiements acceptés:</span>
              <div className="flex">
                <div className="w-8 h-5 bg-gray-50 rounded flex items-center justify-center text-xs text-black font-medium">Especes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;