import React, {Component} from 'react'

class AddCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newName : "",
            newBirth: "",
            newGender: ""

         }
    }
    // handle the button click
    handleSubmission = (event) => {
        event.preventDefault();
        this.props.updateNewCharacterArray(this.state) 
        
        this.setState({
            newName : "",
            newBirth: "",
            newGender: ""

        })

    }
    //reset the forms after button click
    handleChange = (event) =>{
        if(event.target.name == "name") {
            this.setState({newName : event.target.value})
        }else if(event.target.name == "birth"){
            this.setState({newBirth : event.target.value})
        }else if(event.target.name == "gender"){
            this.setState({newGender : event.target.value})
        }
    }
    

    
    render() { 
        return (  
            <div>
                <form action="">
                    <fieldset id= "form">
                        <legend id = "legend">New Character</legend>

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange = {this.handleChange} value = {this.state.newName} />
                   
                        <label htmlFor="birth">Birth</label>
                        <input type="text" name="birth" id="birth" onChange = {this.handleChange} value = {this.state.newBirth} />
                   
                        <label htmlFor="gender">Gender</label>
                        <input type="text" name="gender" id="gender" onChange = {this.handleChange} value = {this.state.newGender} />
                   
                        <button onClick = {this.handleSubmission} >Submit</button>
                    </fieldset>
                            {/* iterate through the form array of new characters */}
                            {
                                this.props.newCharacterArray.map((info) =>{
                                    return(
                                        <div>
                                            <p>Name: {info.newName} </p>
                                            <p>Birth: {info.newBirth} </p>
                                            <p>Gender: {info.newGender} </p>


                                        </div>
                                    )
                                } )
                            }


                </form>
            </div>
        );
    }
}
 
export default AddCharacter;