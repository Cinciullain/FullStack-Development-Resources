import React, {Component} from 'react';

//Così facendo con questa classe ho eliminato dal file 
/*
        {(this.state.overTen) ?
            <h3>Record di 10 battuto</h3>
            : null
        }
*/
//E messo al suo posto <HighScore />
//Ora nell'ispezione elemento appare la schermata "React", che permette di ispezionare questa classe

class HighScore extends Component{
    render(){
        //.props serve per entrare nelle proprietà dei componenti
        if(this.props.overTen)
            return(
                //Anzi che scrivere <button onClick = {(e) => this.props.onReset(e)}>Tasto di reset</button>
                //Si può scrivere come scritto sotto, quando il parametro in entrata è lo stesso di quello in uscita
                <h3>Record di 10 battuto
                    <button onClick = {this.props.onReset}>Tasto di reset</button>
                </h3>
            )
        //Gli elementi di react devono sempre restituire qualcosa
        else
            return null;
    }
}

export default HighScore; //Serve per essere usato negli altri file .js
