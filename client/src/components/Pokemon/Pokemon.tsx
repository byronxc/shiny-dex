import { Component } from "react";
import Axios from "axios";
import './Pokemon.scss';

export interface IPokemonProps {
  pokemonName: string;
  pokemonNumber: number;
  shiny: boolean;
  urlImage: string;
  shinyUrlImage: string;
}

interface PokemonState {
  isShiny: boolean;
  isPokemonNumber: number;
  isShowPokemon: boolean;
}

export class Pokemon extends Component<IPokemonProps, PokemonState> {
  constructor(props: IPokemonProps) {
    super(props);
    this.state = {
      isShiny: this.props.shiny,
      isPokemonNumber: this.props.pokemonNumber,
      isShowPokemon: true
    };

    this.toggleShiny = this.toggleShiny.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
  }

  toggleShiny = () => {
    this.setState(state => ({
      isShiny: !state.isShiny,
      isPokemonNumber: state.isPokemonNumber
    }));
    Axios.post("http://localhost:3001/api/update", {
      shinyNumber: this.state.isPokemonNumber,
      shinyState: !this.state.isShiny
    }).then(() => {
      console.log("Successful insert");
    })
  };

  toggleDelete = () => {
    this.setState(state => ({
      isPokemonNumber: state.isPokemonNumber,
      isShowPokemon: !state.isShowPokemon
    }));
    Axios.post("http://localhost:3001/api/delete", {
      shinyNumber: this.state.isPokemonNumber
    }).then(() => {
      console.log("Successful insert");
    })
  };

  render() {
    return (
      <div className="pokemon-dex">
        {this.state.isShowPokemon
          ?
          <div className="pokemon-entry">
            <img alt="Pokemon Avatar" id="pokemon-image" src={this.state.isShiny ? this.props.shinyUrlImage : this.props.urlImage } />
            <span>#{this.props.pokemonNumber} {this.props.pokemonName}</span>
            <div className="buttons"> 
              <button onClick={() => this.toggleShiny()}>Shiny</button>
              <button onClick={() => this.toggleDelete()}>Delete</button>
            </div>
          </div>
          :
          null}
      </div>
    )
  }
}