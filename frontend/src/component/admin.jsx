import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

function Admin() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-black flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-15">Admin</h1>
        <nav className="flex flex-col gap-2">

  <Link
    to="commandesliste"
    className="hover:bg-gray-400 rounded px-3 py-2 flex items-center gap-2"
  >
    <FaAddressBook className="text-lg" /> 
    <span>Listes commandes</span>
  </Link>


  <Link
    to="ajouterproduit"
    className="hover:bg-gray-400 rounded px-3 py-2 flex items-center gap-2"
  >
    <FaCar className="text-lg" /> 
    <span>Ajouter produit</span>
  </Link>

  <Link
    to="listeproduit"
    className="hover:bg-gray-400 rounded px-3 py-2 flex items-center gap-2"
  >
    <FaUser className="text-lg" /> 
    <span>Listes produits</span>
  </Link>
</nav>

      </aside>

      {/* Contenu principal */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Top Navbar */}
        <div className="bg-gradient-to-r from-black to-white text-white shadow rounded-xl p-4 mb-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">Bienvenue 👋</h2>
          <Link to="/">
            <button className="bg-red-500 text-white gap-3 px-4 py-2 rounded-lg hover:scale-120 duration-700">
              <CiLogout />
            </button>
          </Link>
        </div>

        {/* Zone dynamique qui change selon le lien cliqué */}
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
