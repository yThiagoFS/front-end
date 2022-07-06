import React from "react"
import "./Sobre-nos.css";

import imgInstagram from "./img/instagram-logo.jpg"
import imgGitHub from "./img/github-logo.png"
import imgLinkedin from "./img/linkedin-logo.png"
import kairosLogo from "./img/kairos-logo.png"

import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs"




function SobreNos(){
    return(
        <div className="sobreNos__content" id="sobre">
            
            <div className="sobre">
                
                <div className="text__sobre">
                    <h1>Sobre</h1>
                </div>
            
                <div className="mission__container">
                    <div className="mission">
                        <h2>Missão</h2>
                        <p>Acolher e gerar segurança nos usuários através da informação e desmistificação de mitos e inseguranças em relação à vida no exterior.</p>
                    </div>
                    <div className="vision">
                        <h2>Visão</h2>
                        <p>Ser referência nacional no encorajamento dos jovens à viajar, diminuindo a falta de informação e organizando-a de forma acessível em uma única plataforma.</p>
                    </div>
                </div>
                
                <div className="value_container">
                    <div className="value">
                        <h2>Valores</h2>
                        <ul>
                            <li>Informação</li>
                            <li>Motivação</li>
                            <li>Liberdade</li>
                            <li>Transparência</li>
                            <li>Acessibilidade</li>
                        </ul>
                    </div>
                </div>
                <div className="direitos_reservados">
                    <p>&copy; 2022 Kairos</p>
                    <p>Todos os Direitos Reservados</p>
                </div>
            </div>

            <div className="social__midia">

                <div className="container__kairosLogo">
                    <img src={kairosLogo}/>
                </div>
                <div className="container__img">

                    <BsLinkedin className="icon"/>

                    <BsGithub className="icon"/>

                    <BsInstagram className="icon"/>

                </div>


            </div>
        </div>
        
    )
}

export default SobreNos;
