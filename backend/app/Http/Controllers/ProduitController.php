<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produit;
use Illuminate\Support\Facades\Storage;

class ProduitController extends Controller
{
    // Liste tous les produits
    public function index()
    {
        $produits = Produit::all();
        return response()->json($produits);
    }

    // Ajouter un produit avec image
    public function store(Request $request)
    {
        // Validation
        $request->validate([
            'nom' => 'required|string|max:255',
            'price' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Upload de l'image
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('produits', 'public');
        } else {
            $imagePath = null;
        }

        // Création du produit
        $produit = Produit::create([
            'nom' => $request->nom,
            'price' => $request->price,
            'image' => $imagePath, // stocke le chemin
        ]);

        return response()->json([
            'message' => 'Produit créé avec succès',
            'produit' => $produit
        ]);
    }

    // Afficher un produit
    public function show($id)
    {
        $produit = Produit::findOrFail($id);
        return response()->json($produit);
    }

    // Supprimer un produit (et son image)
    public function destroy($id)
    {
        $produit = Produit::findOrFail($id);

        // Supprimer l'image du stockage
        if ($produit->image) {
            Storage::disk('public')->delete($produit->image);
        }

        $produit->delete();

        return response()->json(['message' => 'Produit supprimé avec succès']);
    }
}