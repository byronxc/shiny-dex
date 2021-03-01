import React, { Component } from "react";
import Axios from "axios";
import {useState } from 'react';

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
}

export class Pokemon extends Component<IPokemonProps, PokemonState> {
    constructor(props: IPokemonProps) {
      super(props);
      this.state = {
        isShiny: this.props.shiny, 
        isPokemonNumber: this.props.pokemonNumber
      };
      this.toggleShiny = this.toggleShiny.bind(this);
    }
     
    toggleShiny = () => {
      this.setState(state => ({
        isShiny: !state.isShiny,
        isPokemonNumber: state.isPokemonNumber
      }));
      Axios.post("http://localhost:3001/api/insert", {
        shinyNumber: this.state.isPokemonNumber,
        shinyState: !this.state.isShiny
      }).then(()=>{
        console.log("Successful insert");
      })
    };

    render() {
        return (
          <div>
            <img alt="Pokemon Avatar" src={this.state.isShiny === false ? this.props.urlImage : this.props.shinyUrlImage} />
            <p>Name: {this.props.pokemonName} < br/>Number: {this.props.pokemonNumber}</p>
            <button onClick={() => this.toggleShiny()}>shiny</button>
          </div>    
        )
    }
}