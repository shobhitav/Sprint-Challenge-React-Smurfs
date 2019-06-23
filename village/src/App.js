import React, { Component } from 'react';
import axios from  'axios';
import './App.css';
import AddForm from './components/AddForm';
import Smurfs from './components/Smurfs';
import { BrowserRouter as Router , Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      editList: []
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res  => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  deleteHandler = id => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => this.setState({smurfs: res.data}))
    .catch(error => console.log(error));
  }

  editHandler = id => {
    this.setState({editList: this.state.editList.concat(id)});
  }

  updateState = (id, res) => {
    console.log(res.data);
    this.setState({ smurfs: res.data, editList: this.state.editList.filter(editId => editId !== id) });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="NavBar">
            <NavLink exact={true} to="/" className="inactive" activeClassName="active">Home</NavLink>
            <NavLink exact={true} to="/smurf-form" className="inactive" activeClassName="active">Add</NavLink> 
          </div>
          <Route path="/" render = { props => <Smurfs {...props} smurfs={this.state.smurfs} deleteHandler={this.deleteHandler} editHandler={this.editHandler} editList={this.state.editList} updateState={this.updateState} />} exact/>    
          <Route path="/smurf-form" render = { props => <AddForm {...props} updateState={this.updateState} />} />
        </div>
      </Router>  
    );  
  }
}

export default App;
