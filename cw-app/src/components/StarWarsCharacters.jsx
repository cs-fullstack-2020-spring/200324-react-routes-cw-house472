import React, { Component } from 'react'

class StarWarsCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starArray: []
        }
    }
    componentDidMount = () => {
        this.loadData();
    }
    //load method to fetch data
    loadData = async () => {

        const response = await fetch("https://swapi.co/api/people/")
        const json = await response.json();
        this.setState({ starArray: json.results })
        console.table(json) // sanity test
    }
    render() {
        return (
            <div >
                {/* Add the new list of characters to the beginning of the json array */}

                {
                    this.props.newCharacterArray.map((info) => {
                        return (
                            <div class= "characterPage" >
                                <p>Name: {info.newName} </p>
                                <p>Birth: {info.newBirth} </p>
                                <p>Gender: {info.newGender} </p>


                            </div>
                        )
                    })
                }
                {/* iterate through the json array */}
                {
                    this.state.starArray.map((name) => {
                        return (
                            <div class= "characterPage" >
                                <p>Name: {name.name}</p>
                                <p>Year of Birth: {name.birth_year}</p>
                                <p>Gender: {name.gender}</p>

                            </div>
                        )
                    })


                }
            </div>
        );
    }
}

export default StarWarsCharacters;