import React, {Component} from 'react'
import Pokemon from './Pokemon/Pokemon'

import './PokemonFinder.css'

export default class PokemonFinder extends Component {
  constructor() {
    super()

    this.state = {
      userInput: "",
      pokemonName: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

  }

  handleChange(text) {
    this.setState({
      userInput: text
    })
  }
  
  handleSearch() {
    this.setState({
      pokemonName: this.state.userInput,
      userInput: ""
    })
  }
  

  render() {

    return (
      <div>
        <div className="pokemon-container">
          <Pokemon name={this.state.pokemonName} />
        </div>
     
      <div className="input-container">
        <input className="console" type="text" placeholder="Enter a pokemon: " value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)}/>
        <button onClick={this.handleSearch}>Find!</button>
      </div>
      </div>
    )
  }
}