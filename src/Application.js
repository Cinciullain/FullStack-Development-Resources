import React, {Component} from 'react';
import HighScore from './HighScore';

class Application extends Component{
    //Viene eseguito solo quando viene instanziata la pagina, una sola volta
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    //Gestisce il clock del bottone
    handleCLick = () => { //Dichiarazione del metodo: "nomeMetodo = () => {} ""
        console.log("Clicked"); //Punta sulla console
        this.setState({count: this.state.count + 1})
    }

     /*
    //È deprecato, trovare una alternativa
    componentWillMount(props, state){}

    componentDidMount(props, state){
        console.log("Mounted with", props, state);
    }

    //Viene chiamato prima di essere montato, ricevendo le proprietà. È deprecato, trovare alternativa
    componentWillReceiveProps(props){}

    componentWillUpdate(props, state){
        if(this.props.name !== props.name){}    
    }
    
    */

    //Modo più sicuro per gestire l'aggiornamento dei componenti
    componentDidUpdate(props, state){
        //Fa vedere alla console lo stato precedente e quello attuale, dopo essere aggiornato
        //console.log("Updated from", state, "to", this.state);

        if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
            console.log("10 superato");
            this.setState({overTen: true});
        }
    }

    //Funzione per gestire la chiamata di "onReset" in highscore
    resetCount = (e) => {
        console.log("Event", e); //Per controllare da ispezione pagina il trigger del bottone
        this.setState({
            count: 0,
            overTen: false
        });
    }
    
    //Restituisce su browser HTML, testo o simili
    render(){
        let testo = "Test";
        let {count} = this.state;

        return(
            <div>
                <h1>{testo}, h1</h1>
                <h1>Hai premuto il bottone {count} volte</h1>
                <HighScore 
                    overTen = {this.state.overTen}
                    onReset = {this.resetCount}
                /> 
                <span>{testo}, span</span>
                <span>
                    <button onClick = {(e) => this.handleCLick()}>Bottone</button>
                </span>
            </div>
        );
    }

}

export default Application; //Serve per index.js