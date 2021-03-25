import React, { Component } from "react";
import Axios from "axios";
import './Addpokemon.scss';

export class AddPokemon extends Component<{}> {
    state = {
        number: 0,
        name: '',
        shiny: 0,
        urlImage: '',
        shinyUrlImage: ''
    }

    handleChangeName = (event: any) => {
        this.setState({ name: event.target.value });
    }

    handleChangeNumber = (event: any) => {
        this.setState({ number: event.target.value });
    }

    handleChangeShiny = (event: any) => {
        this.setState({ shiny: event.target.value });
    }

    handleChangeUrl = (event: any) => {
        this.setState({ urlImage: event.target.value });
    }

    handleChangeUrlShiny = (event: any) => {
        this.setState({ shinyUrlImage: event.target.value });
    }


    handleSubmit = () => {
        Axios.post("http://localhost:3001/api/insert", {
            shinyNumber: this.state.number,
            shinyName: this.state.name,
            shinyState: this.state.shiny,
            url: this.state.urlImage,
            urlShiny: this.state.shinyUrlImage
        }).then(() => {
            console.log("Successful insert");
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <label>Number: </label>
                            <input type="number" name="number" onChange={this.handleChangeNumber} />
                        </li>
                        <li>
                            <label>Name: </label>
                            <input type="text" aria-label="Name:" name="name" placeholder="Ex Riolu" onChange={this.handleChangeName} />
                        </li>
                        <li>
                            <label>Shiny: </label>
                            <select name="shiny" onChange={this.handleChangeShiny}>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </li>
                        <li>
                            <label>Image URL: </label>
                            <input type="text" name="urlImage" onChange={this.handleChangeUrl}></input>
                        </li>
                        <li>
                            <label>Shiny Image URL: </label>
                            <input type="text" name="shinyUrlImage" onChange={this.handleChangeUrlShiny}></input>
                        </li>
                        <li>
                            <input type="submit" value="Add" />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}