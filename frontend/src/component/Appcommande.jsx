// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home'
import ContactUs from './contact';
import About from './apropos';
import ProductDetail from './detail';
import ProductsList from './productsliste';
import Admin from './admin';
import Ajouterproduit from './ajouterproduit';
import ProductsTable from './tableauproduit';
import EditProduct from './modifierproduit';
import TableauCommandes from './tableaucommande';

function Appcommande() {
  return (
    <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/listeproduit' element={<ProductsList />}/>
          <Route path="/product/:id" element={<ProductDetail  />} />
          <Route path="/Contact" element={<ContactUs/>} />
          <Route path="/propos" element={<About/>} />
          
         <Route path='/admin' element={<Admin />}>
           <Route path='ajouterproduit' element={<Ajouterproduit />} />
           <Route path='listeproduit' element={<ProductsTable />} />
           <Route path='commandesliste' element={<TableauCommandes />} />
        </Route>
        <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
     
     </Router>
  );
}

export default Appcommande;