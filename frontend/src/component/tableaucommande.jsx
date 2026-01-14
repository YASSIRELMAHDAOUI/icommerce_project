import React, { useEffect, useState } from "react";
import axios from "axios";

function TableauCommandes() {
  const [commandes, setCommandes] = useState([]);

  // Charger les commandes
  const fetchCommandes = () => {
    axios
      .get("http://127.0.0.1:8000/api/commandes")
      .then((response) => {
        setCommandes(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement :", error);
      });
  };

  useEffect(() => {
    fetchCommandes();
  }, []);

  // Supprimer commande
  const handleDelete = (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette commande ?")) {
      return;
    }

    axios
      .delete(`http://127.0.0.1:8000/api/commandes/${id}`)
      .then(() => {
        // Mettre à jour la liste localement
        setCommandes(commandes.filter((cmd) => cmd.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression :", error);
      });
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Gestion des Commandes
          </h1>
          <p className="text-gray-600">
            {commandes.length} commande{commandes.length !== 1 ? "s" : ""} au total
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                    ID
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                    Produit
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                    Client
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                    Contact
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                    Adresse
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                    Quantité
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {commandes.map((cmd) => (
                  <tr 
                    key={cmd.id} 
                    className="hover:bg-blue-50 transition-colors duration-150 ease-in-out"
                  >
                    <td className="py-4 px-6 border-r border-gray-100">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        #{cmd.id}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {cmd.produit ? cmd.produit.nom : "—"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100">
                      <div className="text-sm text-gray-900 font-medium">
                        {cmd.firstName} {cmd.lastName}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100">
                      <div className="text-sm space-y-1">
                        <div className="text-gray-900">{cmd.email}</div>
                        {cmd.phone && (
                          <div className="text-gray-600">{cmd.phone}</div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100">
                      <div className="text-sm text-gray-600 max-w-xs truncate">
                        {cmd.address}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r border-gray-100">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-semibold">
                        {cmd.quantity}
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleDelete(cmd.id)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 transform hover:-translate-y-0.5"
                      >
                        <svg 
                          className="w-4 h-4 mr-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {commandes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg 
                  className="w-16 h-16 mx-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1" 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Aucune commande
              </h3>
              <p className="text-gray-500">
                Les commandes apparaîtront ici lorsqu'elles seront créées.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 text-sm text-gray-500 text-center">
          Toutes les commandes sont affichées ici. Cliquez sur "Supprimer" pour retirer une commande.
        </div>
      </div>
    </div>
  );
}

export default TableauCommandes;