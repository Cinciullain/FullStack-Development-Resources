/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import Button from './components/Button';
import "./css/style.css";

class App extends Component{
	constructor(props){
		super(props);


		this.state = {
			corrente: '0',
			precedenti: []
		}
	}

	//Resetta l'input inserito
	reset = () => {
		this.setState({risultato: '0'});
	}

	//Aggiunge il simbolo selezionato 
	modificaCorrente = (simbolo) => {
		console.log("Simbolo");
		if(["/", "-", "+", "X"].indexOf(simbolo) > -1){
			let {precedenti} = this.state;
			precedenti.push(this.state.corrente + simbolo);
			this.setState({precedenti});
		}
		else
			this.setState({corrente: this.state.corrente + simbolo});
	}

	render(){
		//Array dei bottoni dell calcolatrice
		const bottoni = [
			{simbolo: 'C', colonne: 3, azione: this.reset},
			{simbolo: '/', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '7', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '8', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '9', colonne: 1, azione: this.modificaCorrente},
			{simbolo: 'X', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '4', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '5', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '6', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '-', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '1', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '2', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '3', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '+', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '0', colonne: 2, azione: this.modificaCorrente},
			{simbolo: '.', colonne: 1, azione: this.modificaCorrente},
			{simbolo: '=', colonne: 1, azione: this.modificaCorrente},
		]

		return (
			<div className="App">
				{this.state.precedenti.length > 0 ?
					<div className = "memorizza-valore">{this.state.precedenti[this.state.precedenti.length - 1]}</div>
				: null}
				<input className = "risultato" type = "text" value = {this.state.corrente}/>
				
				{bottoni.map((btn, i) =>{
					return <Button key = {i} simbolo = {btn.simbolo} colonne = {btn.colonne} azione = {(simbolo) => btn.azione(simbolo)} />
				})}
			</div>
		  );
	}
}

export default App;
