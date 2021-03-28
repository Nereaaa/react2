import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharComponent from './CharComponent'

class CharList extends React.Component{

  render(){
      return(
        <div className="p-3 m-3">
          {
          this.props.texto.split("").map((char,i) =>
          <CharComponent parent={this.props.parent} indice={i} letra={char}></CharComponent>)
          }
          
        </div>
      );
  }
}

export default CharList;