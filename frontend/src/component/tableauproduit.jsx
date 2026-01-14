import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/produits");
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Erreur lors du chargement des produits.");
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/produits/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.log(err);
      alert("Erreur lors de la suppression !");
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <p className="text-red-700">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Liste des Produits</h1>
        <p className="text-gray-600 mt-2">Gérez tous vos produits en un seul endroit</p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="py-5 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                  ID
                </th>
                <th className="py-5 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                  Image
                </th>
                <th className="py-5 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                  Produit
                </th>
                <th className="py-5 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                  Prix
                </th>
                <th className="py-5 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {products.map((product) => {
                const imageUrl = product.image
                  ? `http://localhost:8000/storage/${product.image}`
                  : "https://via.placeholder.com/80?text=No+Image";

                return (
                  <tr 
                    key={product.id} 
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-700 font-medium rounded-lg">
                        #{product.id}
                      </span>
                    </td>

                    <td className="py-5 px-6">
                      <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-100 shadow-sm">
                        <img
                          src={imageUrl}
                          alt={product.nom}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>

                    <td className="py-5 px-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{product.nom}</h3>
                        {product.description && (
                          <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                            {product.description}
                          </p>
                        )}
                      </div>
                    </td>
                    
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 font-semibold rounded-lg border border-green-100">
                        {product.price} DH
                      </span>
                    </td>

                    <td className="py-5 px-6">
                      <div className="flex items-center space-x-3">
                        <Link
                          to={`/edit-product/${product.id}`}
                          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                          Modifier
                        </Link>

                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="inline-flex items-center justify-center px-4 py-2 bg-red-50 text-red-700 font-medium rounded-lg border border-red-100 hover:bg-red-100 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-500">Commencez par ajouter votre premier produit</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsTable;