import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from './componentes/PokeCard/PokeCard'
import styled from 'styled-components'
import Header from './componentes/Header/Header'

const Grid = styled.div`
  display: grid;
  margin: 1.5rem;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const App = () => {
  const url =
    'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
  const [pokemons, updatePokemons] = useState([])
  const [isLoading, updateIsLoading] = useState(true)
  const [errors, updateErrors] = useState(false)

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => updatePokemons(resp?.data?.pokemon))
      .catch((error) => updateErrors(error))
      .finally(() => updateIsLoading(false))
  }, [])

  if (isLoading) return <h1>Carregando...</h1>

  if (errors) return <h1>`Deu ruim: ${errors}`</h1>

  return (
    <>
      <Header />
      <Grid>
        {pokemons.map((pokemon) => (
          <PokeCard {...pokemon} />
        ))}
      </Grid>
    </>
  )
}

export default App
