// src/pages/Welcome.jsx (ou dans App.jsx si vous préférez)
import { Link } from 'react-router-dom';

function Welcome() {
  console.log('Welcome component rendered');
  return (
    <div>
      <h1>Bienvenue sur Open Food Fact</h1>
      <p>Test de rendu React</p>
      
      {/* Liens vers les pages Login et Register */}
      <Link to="/login">Se connecter</Link> <br />
      <Link to="/register">S inscrire</Link>
    </div>
  );
}

export default Welcome;
