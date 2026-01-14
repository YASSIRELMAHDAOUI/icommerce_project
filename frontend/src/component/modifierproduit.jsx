import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Valeurs initiales définies pour éviter controlled -> uncontrolled
  const [nom, setNom] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/produits/${id}`);
        const p = res.data;

        // Attention aux noms de champs venant du backend (ici 'nom', 'variant', 'price', 'image')
        setNom(p.nom ?? "");
        setPrice(p.price ?? "");
        setOldImage(p.image ?? "");
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger le produit.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageChange = (e) => {
    const f = e.target.files && e.target.files[0];
    setImageFile(f || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("variant", variant);
    formData.append("price", price);
    if (imageFile) formData.append("image", imageFile);

    try {
      // 1) Essayer la méthode recommandée : POST avec spoof _method=PUT (fonctionne souvent avec Laravel)
      await axios.post(
        `http://localhost:8000/api/produits/${id}?_method=PUT`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Produit modifié avec succès !");
      navigate("/admin/listeproduit");
      return;
    } catch (err) {
      console.warn("Post with _method failed, trying axios.put...", err?.response?.status);
      // si échec, on essaie une vraie requête PUT (certaines configurations serveur ne supportent pas multipart PUT)
    }

    try {
      // 2) Alternative : PUT (peut échouer si serveur refuse multipart on PUT)
      await axios.put(
        `http://localhost:8000/api/produits/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Produit modifié avec succès !");
      navigate("/admin/listeproduit");
    } catch (err) {
      console.error("PUT failed:", err);
      setError("Erreur lors de la mise à jour du produit.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center mt-5">Chargement...</p>;

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Modifier le produit</h2>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nom</label>
          <input
            type="text"
            name="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

 
        <div>
          <label className="block mb-1">Prix</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Image (laisser vide pour garder l'image existante)</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
          { (imageFile && URL.createObjectURL(imageFile)) || (oldImage && `http://localhost:8000/storage/${oldImage}`) ? (
            <img
              src={ imageFile ? URL.createObjectURL(imageFile) : `http://localhost:8000/storage/${oldImage}` }
              alt="preview"
              className="w-32 h-32 object-cover rounded mt-2"
            />
          ) : null}
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-60"
        >
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
