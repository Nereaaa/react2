import React from 'react';
import './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import CharList from './components/Chars/CharList';
import ValidationComponent from './components/Chars/ValidationComponent';


class App extends React.Component {
  
  constructor(props){
    super(props); 
    this.state = {
      texto:'',
      longitud: 0
    }
  }

  actualizarCampos = (event) => {
    this.setState({
      texto: event.target.value,
      longitud: event.target.value.split('').length
    })
  }

  borrarLetra(index){
    this.setState({
      texto: this.state.texto.split("").filter( (char,i) => i !== index).join(""),
      longitud: this.state.longitud - 1
    })
  }

  render(){
    return (
      <div className="App">
        <div className="container-sm p-5 text-center">
          <Form>
            <Form.Control type="text" placeholder="Introduzca texto" value={this.state.texto} onChange={this.actualizarCampos}/>
          </Form>
          <label className="p-3">Número de carácteres introducidos: {this.state.longitud} </label>
          <ValidationComponent parent={this} longitud={this.state.longitud}></ValidationComponent>
          <div className="container-sm p-2">
            <CharList parent={this} texto={this.state.texto}></CharList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
