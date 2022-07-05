import { useState } from "react"

import "./Perfil.css"

import kairosLogo from "../img/kairos-logo.png"
import comunidadeIcon from "./img/comunidade__icon.png"
import kairosLogoPerfil from "./img/kairos-logo-perfil.png"


import img1Destaque from "./img/img1-destaque.png"
import img2Destaque from "./img/img2-destaque.png"
import img3Destaque from "./img/img3-destaque.png"
import img4Destaque from "./img/img4-destaque.png"
import { Link } from "react-router-dom";




function Perfil(){

    const [perfilContent, setPerfilContent] = useState(
        {
        userImg:kairosLogoPerfil,
        userName: '@Kairos',
        userCountry:'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png',
        userBio:'A plataforma que faz você voar!',
    }
    )
    return(
        <div className="perfil__content">
            <div className="perfil__contentHeader">
               
                   <Link to ="/Kairos" className="kairosLogo"> 
                        <img src={kairosLogo}/>
                    </Link>

                <div className="link__comunidade">
                        <span>Acesse a comunidade</span>
                    <Link to ="/Comunidade"><div className="img__wrapper">
                        <img src={comunidadeIcon}/>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="perfil__contentMain">
                <div className="perfilUser__wrapper">
                    <div className="perfilUser__header">
                        <div className="start__items">
                            <div className="userImg">
                                <img src={perfilContent.userImg}/>
                            </div>
                            <span>
                                {perfilContent.userName}
                            </span>
                        </div>

                        <div className="userCountry">
                            <img src={perfilContent.userCountry}/>
                        </div>

                    <span className="split__line">

                    </span>

                    </div>

                    <div className="perfilUser__bio">
                        <p>{perfilContent.userBio}</p>

                        <span className="split__line">

                        </span>
                    </div>

                <div className="perfilUser__options">
                    <ul>
                       <Link to="/Vaquinha"> <li>Apoio</li> </Link>
                        <li>Privacidade</li>
                        <li>Configurações</li>
                    </ul>
                </div>

                </div>

                <div className="destaques__wrapper">
                    <h2>Destaques</h2>

                    <div className="firstLine__options">
                        <div className="first__item">
                            <div className="item">
                                <img src={img1Destaque}/>
                            </div>
                            <span>Intercâmbios</span>
                        </div>
                        
                        <div className="second__item">
                            <div className="item">
                                <img src={img2Destaque}/>
                            </div>  
                            <span>Paises mais procurados</span>

                        </div>
                    </div>

                    <div className="secondLine__options">
                        <div className="first__item ">
                            <div className="item">
                                <img src={img3Destaque}/>
                            </div>  
                            <span>Viajantes da semana</span>

                        </div>
                        <div className="second__item ">
                            <div className="item">
                                <img src={img4Destaque}/>
                            </div>  
                            <span>Descontos e parceirias</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Perfil;