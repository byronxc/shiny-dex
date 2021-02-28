import React, { Component } from "react";

export interface IPokemonProps {
    pokemonName: string;
    pokemonNumber: number;
    shiny: boolean;
    urlImage: string;
    shinyUrlImage: string;
}
interface PokemonState {
  isShiny: boolean;
}

export class Pokemon extends Component<IPokemonProps, PokemonState> {
    constructor(props: IPokemonProps) {
      super(props);
      this.state = {isShiny: this.props.shiny};
      this.toggleShiny = this.toggleShiny.bind(this);
    }

    toggleShiny() { 
      debugger
      this.setState(state => ({
        isShiny: !state.isShiny
      }));
    }

    render() {
        return (
          <div>
            <img alt="Pokemon Avatar" src={this.state.isShiny === false ? this.props.urlImage : this.props.shinyUrlImage} />
            <p>Name: {this.props.pokemonName} < br/>Number: {this.props.pokemonNumber}</p>
            <button onClick={this.toggleShiny}>shiny</button>
          </div>    
        )
    }
}