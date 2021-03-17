import React, {Component} from 'react';

class Application extends Component{

    //Restituisce su browser HTML, testo o simili
    render(){
        let testo = "Test";

        return(
            <div>
            <h1>{testo}, h1</h1>
            <span>{testo}, span</span>
            </div>
        );
    }
}

export default Application; //Serve per index.js