import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg'

class Home extends Component{

    render(){
        return(
            <div>
                <Header
                    title = "Prova titolo"
                    subtitle = "Prova sottotitolo"
                    buttonText = "Prova testo bottone"
                    link = "/services"
                    showButton = {true}
                    image = {image}
                />
            </div>
        );
    }
}

export default Home;