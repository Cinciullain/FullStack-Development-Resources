import React, {Component} from 'react';

class Button extends Component{
    render(){
        return(
            <div className = {`colonna-${this.props.colonne}`}>
                <button className = "bottone-calc" onClick = {() => this.props.azione(this.props.simbolo)}>{this.props.simbolo}</button>
            </div>
        );
    }
}

export default Button;