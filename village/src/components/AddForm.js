import React, { Component } from 'react';
import axios from  'axios';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      age: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    let newSmurf = {
      name:this.state.name ,
      height: this.state.height,
      age:this.state.age
      };

    axios.post("http://localhost:3333/smurfs",newSmurf)
      .then(res  => this.props.updateState(-1, res))
      .catch(err => console.log(err))
 
    this.setState({
      name: '',
      height: '',
      age: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
      <p>Add A Smurf To Village</p>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          /> <br/>
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          /> <br/>
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          /> <br/>
          <button type="submit" className="button">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
