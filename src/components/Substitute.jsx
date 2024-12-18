function Substitute({ product }) {
    return (
      <div>
        <h3>Substitut proposé</h3>
        <p><strong>Description :</strong> {product.description}</p>
        <p><strong>Lieu d'achat :</strong> {product.purchasePlace}</p>
        <a href={product.link} target="_blank" rel="noopener noreferrer">
          Voir sur OpenFoodFacts
        </a>
      </div>
    );
  }
  
  export default Substitute;
  