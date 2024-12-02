import React, { useEffect, useState } from 'react';
import { fetchFactoryInfo } from '../api';

const Home = () => {
  const [factory, setFactory] = useState(null);

  useEffect(() => {
    fetchFactoryInfo().then(data => setFactory(data));
  }, []);

  return (
    <div>
      <h2>Bienvenue dans l'usine {factory?.name}</h2>
      <p>{factory?.description}</p>
      <p>Localisation : {factory?.location}</p>
    </div>
  );
};

export default Home;
