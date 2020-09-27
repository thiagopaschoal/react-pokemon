import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './componentes/Header/Header';
import Layout from './componentes/Layout/Layout';
import PokeCard from './componentes/PokeCard/PokeCard';

const App = () => {
  const url =
    'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
  const [pokemons, updatePokemons] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);
  const [errors, updateErrors] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => updatePokemons(resp?.data?.pokemon))
      .catch((error) => updateErrors(error))
      .finally(() => updateIsLoading(false));
  }, []);

  if (isLoading) return <h1>Carregando...</h1>;

  if (errors) return <h1>`Deu ruim: ${errors}`</h1>;

  return (
    <>
      <Header />
      <Layout>
        {pokemons.map((pokemon) => (
          <PokeCard {...pokemon} />
        ))}
      </Layout>
    </>
  );
};

export default App;
