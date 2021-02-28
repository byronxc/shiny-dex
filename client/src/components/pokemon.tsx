import React, { Component } from "react";

export interface IPokemonProps {
    pokemonName: string;
    pokemonNumber: number;
    shiny: number;
    urlImage: string;
    shinyUrlImage: string;
}

export class Pokemon extends Component<IPokemonProps, {}> {
    render() {
        return (
          <div>
            <img alt="Pokemon Avatar" src={this.props.urlImage} />
            <p>Name: {this.props.pokemonName} < br/>Number: {this.props.pokemonNumber}</p>
          </div>    
        )
    }
}