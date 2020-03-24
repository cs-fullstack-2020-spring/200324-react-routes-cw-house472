import React, { Component } from 'react'
import AddCharacter from './AddCharacter'
import StarWarsCharacters from './StarWarsCharacters'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCharacterArray: []
        }
    }
    //callback function
    updateNewCharacterArray = (newArray) => {
        this.state.newCharacterArray.push(newArray)
        this.setState({ newCharacterArray: this.state.newCharacterArray })
    }
    render() {
        return (
            <div>
                {/* create links to pages */}
                <Router>
                    <Link to='/AppContainer'>Home</Link>
                    <Link to='/StarWarsCharacters'>Star Wars Characters</Link>
                    <Route path='/StarWarsCharacters' >
                        <StarWarsCharacters newCharacterArray={this.state.newCharacterArray}
                            updateNewCharacterArray={this.updateNewCharacterArray} />
                    </Route>


                </Router>
                {/*  push callback function down to AddCharacter */}
                <AddCharacter newCharacterArray={this.state.newCharacterArray}
                    updateNewCharacterArray={this.updateNewCharacterArray} />
                <img src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" alt="" />
            </div>
        );
    }
}

export default AppContainer;