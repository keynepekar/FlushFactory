import React, { useEffect, useState } from 'react';
import { fetchFactoryInfo } from '../api';
import '../styles/Home.scss';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [factory, setFactory] = useState(null);

  useEffect(() => {
    fetchFactoryInfo().then(data => setFactory(data));
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <Helmet>
          <title>Accueil | FlushFactory</title>
          <meta name="description" content="Découvrez FlushFactory : l'usine du futur." />
        </Helmet>
        <h1>Bienvenue à {factory?.name}</h1>
        <p className="home-description">{factory?.description}</p>
        <p className="home-location">📍 Localisation : {factory?.location}</p>
      </header>

      <section className="home-about">
        <h2>À propos de {factory?.name}</h2>
        <p>
          {factory?.name} est une usine moderne située au cœur des Hauts-de-France. Elle
          utilise des technologies de pointe pour garantir une production durable et
          respectueuse de l'environnement.
        </p>
        <img
          src="https://cdn-0001.qstv.on.epicgames.com/iHnBiMDPIxlqwPvpxu/image/landscape_comp.jpeg"
          alt="FlushFactory"
          className="home-image"
        />
        <p className="home-image-source">Crédit image : Epic Games</p>
      </section>

      <section className="home-stats">
        <h2>Quelques chiffres</h2>
        <ul>
          <li>🔧 Réacteurs en service : 3</li>
          <li>🌍 Durabilité : 90% de matériaux recyclés</li>
          <li>👨‍🔬 Employés : 120 experts</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
