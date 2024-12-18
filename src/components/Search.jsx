// src/components/Search.jsx
import { useState } from 'react';
import Substitute from './Substitute'; // Importation du composant Substitute

function Search() {
  const [query, setQuery] = useState(''); // État pour stocker la recherche
  const [product, setProduct] = useState(null); // État pour stocker le produit trouvé

  const handleSearch = async () => {
    try {
      // Appel API OpenFoodFacts (à adapter avec une vraie URL)
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${query}.json`);
      const data = await response.json();

      // Vérifie si le produit existe
      if (data.status === 1) {
        setProduct({
          description: data.product.product_name || 'Pas de description disponible',
          purchasePlace: 'Lieu d’achat non spécifié',
          link: `https://fr.openfoodfacts.org/produit/${data.code}`,
        });
      } else {
        setProduct(null);
        alert('Produit non trouvé. Vérifiez le code-barres.');
      }
    } catch (error) {
      console.error('Erreur lors de la recherche du produit :', error);
    }
  };

  return (
    <div>
      <h2>Rechercher un aliment</h2>
      <input
        type="text"
        placeholder="Entrez un code-barres"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>

      {/* Affiche le composant Substitute si un produit est trouvé */}
      {product && <Substitute product={product} />}
    </div>
  );
}

export default Search;

