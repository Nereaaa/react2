import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ValidationComponent extends React.Component{
    render(){
        let mensaje = null;
        if(this.props.longitud<=5){
            mensaje = <label className="text-center">Texto demasiado corto</label>;
        }else{
            mensaje = <label className="text-center">Texto suficientemente largo</label>; 
        }
        return(
            <div className="p-3 m-3">
               {mensaje}
            </div>
        );
    }
}