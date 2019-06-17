import React, { Component } from 'react';
import Smurf from './Smurf';
import UpdateForm from './UpdateForm';

class Smurfs extends Component {

  render() {
    return (
      <div className="Smurfs">
        <h1 className="Header">Smurf Village</h1>
        <ul>
          <div className="SmurfLayout">
            {this.props.smurfs.map(smurf => {
              return (
                this.props.editList.findIndex(editId => editId === smurf.id) === -1 ?
                <Smurf
                    deleteHandler = {this.props.deleteHandler}
                    editHandler = {this.props.editHandler}
                    name = {smurf.name}
                    id = {smurf.id}
                    age = {smurf.age}
                    height = {smurf.height}
                    key = {smurf.id}
                  />
                  :
                  <UpdateForm
                    name = {smurf.name}
                    id = {smurf.id}
                    age = {smurf.age}
                    height = {smurf.height}
                    key = {smurf.id}
                    updateState = {this.props.updateState}
                  />
              );
            })}
        </div>
        </ul>
      </div>
    ); 
  }
}
   
Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;