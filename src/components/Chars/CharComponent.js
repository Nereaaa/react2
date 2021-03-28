import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ponclase from '../../hoc/Ponclase';
import clases from './CharComponent.module.css';
import Button from 'react-bootstrap/Button';


class CharComponent extends React.Component{

    render(){
        return(
            <Ponclase clases={clases.CharComponent}>
                <div>
                    <Button variant="light" onClick={()=> this.props.parent.borrarLetra(this.props.indice)}>{this.props.letra}</Button>
                </div> 
            </Ponclase>
          
        );
    }
}
export default CharComponent;