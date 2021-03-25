
import { useEffect, useState } from 'react';
import './App.scss';
import { Pokemon } from './components/Pokemon/Pokemon';
import { AddPokemon } from './components/Addpokemon/Addpokemon';
import Axios from "axios";

export interface PokemonJ {
  pokemon_num: number;
  pokemon_name: string;
  shiny: number;
  url_image: string;
  shiny_url_image: string;
}

function App() {
  const [pokemonList, setPokemon] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setPokemon(response.data)
    })
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Shiny Dex</h1>
      </header>
      <AddPokemon></AddPokemon>
      <section>
      {pokemonList && pokemonList.map((value: PokemonJ) => {
        return <Pokemon pokemonNumber={value.pokemon_num} pokemonName={value.pokemon_name}
          shiny={value.shiny === 0 ? false : true} urlImage={value.url_image} shinyUrlImage={value.shiny_url_image}>
        </Pokemon>
      })}
      </section>
    </div>
  );
}

export default App;
