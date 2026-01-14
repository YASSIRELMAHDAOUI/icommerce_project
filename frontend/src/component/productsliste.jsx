import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/produits");
        setProducts(response.data);
        setFilteredProducts(response.data);
        
        // Trouver le prix maximum pour le filtre
        const maxPrice = response.data.reduce((max, product) => 
          Math.max(max, parseFloat(product.price) || 0), 0
        );
        setPriceRange([0, maxPrice]);
        
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement des produits.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrer et trier les produits
  useEffect(() => {
    let result = [...products];

    // Filtre par recherche
    if (searchTerm) {
      result = result.filter(product =>
        product.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtre par prix
    result = result.filter(product => {
      const price = parseFloat(product.price) || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Tri
    switch(sortBy) {
      case "price-asc":
        result.sort((a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0));
        break;
      case "price-desc":
        result.sort((a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0));
        break;
      case "name-asc":
        result.sort((a, b) => a.nom.localeCompare(b.nom));
        break;
      case "name-desc":
        result.sort((a, b) => b.nom.localeCompare(a.nom));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, searchTerm, sortBy, priceRange]);

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
  };

  // Obtenir le prix maximum
  const maxPrice = products.reduce((max, product) => 
    Math.max(max, parseFloat(product.price) || 0), 0
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600">Chargement des produits...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">⚠️</div>
          <p className="text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation améliorée */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div>
                <h1 className="text-lg font-light tracking-wide text-gray-900">
                  MOUNIR<span className="text-gray-500">.STORE</span>
                </h1>
                <p className="text-xs text-gray-500">Retour à l'accueil</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4 hover:-translate-y-2 duration-700">
              <Link 
                to="/Contact"
                className="hidden md:inline-flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header avec filtres */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                Notre Collection
              </h1>
              <p className="text-gray-600">
                 produits disponibles
                {searchTerm && ` pour "${searchTerm}"`}
              </p>
            </div>

            {/* Barre de recherche*/}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64  py-3 pl-11 mr-40 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-300 transition-all duration-200"
                />
                <svg 
                  className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-600 mb-6">Essayez de modifier vos critères de recherche</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSortBy("default");
                setPriceRange([0, maxPrice]);
              }}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Voir tous les produits
            </button>
          </div>
        ) : (
          <>
            {/* Grille de produits améliorée */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => {
                const imageUrl = product.image
                  ? `http://localhost:8000/storage/${product.image}`
                  : "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";

                return (
                  <div
                    key={product.id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Image container */}
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img 
                        src={imageUrl} 
                        alt={product.nom}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                        }`}
                      />
                    </div>

                    {/* Product info */}
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="font-medium text-gray-900 text-lg mb-1 group-hover:text-gray-700 transition-colors duration-200 line-clamp-1">
                          {product.nom}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-light text-gray-900">{product.price} DH</span>
                        </div>
                        
                        {/* Rating stars */}
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      {/* Action button */}
                      <Link
                        to={`/product/${product.id}`}
                        className="mt-4 w-50 inline-flex items-center justify-center px-4 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-2 duration-700 font-medium"
                      >
                        Commander maintenant
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </>
        )}
      </main>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Ne manquez pas nos nouveautés
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour être informé des nouveaux produits et offres exclusives.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

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
                    <Link 
                      to={index === 0 ? '/' : '#'} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                      {item}
                    </Link>
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

            {/* Contact */}
            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>123 Rue du Commerce, 75001 Paris</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+33 1 23 45 67 89</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@mounir.store</span>
                </li>
              </ul>
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

export default ProductsList;