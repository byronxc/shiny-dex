import React, { Component } from "react";
import Axios from "axios";

export class AddPokemon extends Component<{}> {
    state = {
        number: 0,
        name: '',
        shiny: 1,
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

    handleChangeUrlShiny= (event: any) => {
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
            <div >
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <label>Number: </label>
                            <input  type="number" name="number" onChange={this.handleChangeNumber}/>
                        </li>
                        <li>
                            <label>Name: </label>
                            <input type="text" name="name" placeholder="Ex Rioulu" onChange={this.handleChangeName} />
                        </li>
                        <li>
                        <select name="shiny" onChange={this.handleChangeShiny}>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        </li>
                        <li>
                            <label>Url Picture: </label>
                            <input type="text" name="urlImage"  onChange={this.handleChangeUrl}></input>
                        </li>
                        <li>
                            <label>Shiny Url Picture: </label>
                            <input type="text" name="shinyUrlImage" onChange={this.handleChangeUrlShiny}></input>
                        </li>
                        <li>
                            <input type="submit" value="Submit"/>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}