import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import image1 from '../assets/PHOTOOOO2.avif'
import image2 from '../assets/photooooo4.avif'
import image3 from '../assets/PHOTOOOO3.avif' 
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Images du carrousel
  const backgroundImages = [
      image1,
       image2,
       image3,
  ];

  // Stats de la marque
  const brandStats = [
    { number: '10+', label: 'Années d\'expertise' },
    { number: '5000+', label: 'Clients satisfaits' },
    { number: '100+', label: 'Produits uniques' },
    { number: '24/7', label: 'Support client' }
  ];

  // Témoignages
  const testimonials = [
    {
      text: "La qualité exceptionnelle des produits MOUNIR.STORE a transformé mon quotidien.",
      author: "Sarah M.",
      role: "Styliste"
    },
    {
      text: "Un service client impeccable et des produits qui durent dans le temps.",
      author: "Thomas L.",
      role: "Architecte"
    },
    {
      text: "Le design industriel rencontre parfaitement l'élégance moderne.",
      author: "Marie K.",
      role: "Designer"
    }
  ];

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Récupérer les produits
  useEffect(() => {
    axios.get('http://localhost:8000/api/produits')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVBAR AMÉLIORÉE */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to='/' className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <h1 className="text-xl font-light tracking-wider text-gray-900">
                  MOUNIR<span className="text-gray-500">.STORE</span>
                </h1>
              </Link>
            </div>

            {/* Liens desktop */}
            <div className="hidden md:flex items-center space-x-1 ">
              {['Accueil', 'Listes des produits', 'A propos', 'Contact us'].map((item, index) => (
                <Link
                  key={index}
                  to={index === 0 ? '/' : index === 1 ? '/listeproduit' : index === 2 ? '/propos' : '/Contact'}
                  className="relative px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-300 hover:-translate-y-2 duration-700"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-gray-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Panier + Hamburger */}
            <div className="flex items-center space-x-4">  
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                {!isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 animate-slideDown">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Accueil', 'Listes des produits', 'A propos', 'Contact us'].map((item, index) => (
                  <Link
                    key={index}
                    to={index === 0 ? '/' : index === 1 ? '/listeproduit' : index === 2 ? '/propos' : '/Contact'}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HEADER / CARROUSEL AMÉLIORÉ */}
      <header className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform ${
                index === currentSlide 
                  ? 'opacity-100 scale-105' 
                  : 'opacity-0 scale-100'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${image}')`
              }}
            />
          ))}
        </div>
        
        {/* Contrôles du carrousel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Design Industriel <br />
              <span className="font-normal">rencontre l'Élégance</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Des produits fonctionnels en matériaux luxueux qui améliorent le quotidien 
              par des détails soignés et un effort intelligent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/listeproduit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 font-medium shadow-lg hover:shadow-xl"
              >
                Découvrir la collection
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/Contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 font-medium"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* STATISTIQUES */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brandStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md  transition transform hover:scale-110 duration-700"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION VALEURS */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Notre Philosophie
            </h2>
            <div className="w-80 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Notre but est de ventre les vettements nouveaux et des vettements de bonne occasion  avec un prix prise en charge et avec un prix convenable a toutes bienvenue dans Mounir.Store
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid AMÉLIORÉ */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Nos Produits Phares
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de produits alliant design industriel et qualité artisanale
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">Aucun produit disponible pour le moment</div>
              <Link
                to="/Contact"
                className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Nous contacter
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-50">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={`http://localhost:8000/storage/${product.image}`} 
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredProduct === product.id ? 'scale-110 rotate-1' : 'scale-100'
                        }`}
                        alt={product.nom}
                      />
                    </div>
                    
                    {/* Overlay effet */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1 text-lg group-hover:text-gray-700 transition-colors duration-200">
                      {product.nom}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-light text-gray-900">{product.price} DH</span>
                      <Link 
                        to={`/product/${product.id}`}
                        className="text-sm text-gray-500 hover:text-gray-900 font-medium flex items-center group"
                      >
                        Commander
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {products.length > 0 && (
            <div className="text-center mt-16">
              <Link
                to="/listeproduit"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 font-medium shadow-lg hover:shadow-xl"
              >
                Voir tous les produits
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* TÉMOIGNAGES */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Prêt à transformer votre quotidien ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Rejoignez notre communauté de passionnés de design et de qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/listeproduit"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 font-medium"
            >
              Explorer la boutique
            </Link>
            <Link
              to="/Contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 font-medium"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER AMÉLIORÉ */}
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
                Des produits de luxe fonctionnels en matériaux premium pour améliorer le quotidien.
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
                {['Accueil', 'Collection', 'Nouveautés', 'Best Sellers', 'Éditions limitées'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service client */}
            <div>
              <h4 className="text-lg font-medium mb-4">Service Client</h4>
              <ul className="space-y-3">
                {['Contactez-nous', 'Livraison & Retours', 'Guide des tailles', 'FAQ', 'Soin des produits'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium mb-4">Newsletter</h4>
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
              <div className="flex space-x-6">
                {['Mentions légales', 'Politique de confidentialité', 'Conditions générales', 'Cookies'].map((item, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;