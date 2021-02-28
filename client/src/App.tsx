
import { useEffect, useState } from 'react';
import './App.css';
import { Pokemon } from './components/pokemon';
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
    <div >
        {pokemonList && pokemonList.map((value: PokemonJ) => {
          return <Pokemon pokemonNumber={value.pokemon_num} pokemonName={value.pokemon_name} 
                    shiny={value.shiny === 0 ? false : true} urlImage={value.url_image} shinyUrlImage={value.shiny_url_image}>
                 </Pokemon>
        })}
    </div>
  );
}

export default App;
