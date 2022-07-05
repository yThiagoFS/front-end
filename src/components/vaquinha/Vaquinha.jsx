import "./Vaquinha.css"


import React, { useState } from "react"



import { CgProfile } from "react-icons/cg"

import { RiMoneyDollarCircleFill, RiBookmarkLine } from "react-icons/ri"

import { BsGearWide, BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"



import { Link } from "react-router-dom";

import Slider from "../slider/Slider.tsx"

import { SwiperProps, SwiperSlide } from "swiper/react"

import Modal from "react-modal"

import kairosLogo from "../comunidade/img/kairos-logo.png"
import imgPerfil from "../comunidade/img/minhaImg.jpg"


import Card from "./cards/Card"
   
function Vaquinha(){

    const [cards, setCards] = useState([
        {
            cardImg:imgPerfil,
            nome:"Miguel VItal", 
            tipo:"Idiomas", 
            duracao:"10 meses", 
            id:"32839212", 
            meta:"R$ 7.500,00", 
            arrecadado:"R$ 4.978,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png", 
            porcentagem:"30%"
        },
        {
            cardImg:imgPerfil,
            nome:"Thiago Ferreira", 
            tipo:"Idiomas", 
            duracao:"6 meses", 
            id:"32839212", 
            meta:"R$ 7.500,00", 
            arrecadado:"R$ 4.978,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png", 
            porcentagem:"60%"
        },
        {
            cardImg:imgPerfil,
            nome:"Thiago Ferreira", 
            tipo:"Idiomas", 
            duracao:"6 meses", 
            id:"32839212", 
            meta:"R$ 7.500,00", 
            arrecadado:"R$ 4.978,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png", 
            porcentagem:"80%"
        },
        {
            cardImg:imgPerfil,
            nome:"Thiago Ferreira", 
            tipo:"Idiomas", 
            duracao:"6 meses", 
            id:"32839212", 
            meta:"R$ 7.500,00", 
            arrecadado:"R$ 4.978,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png", 
            porcentagem:"30%"
        },
        {
            cardImg:imgPerfil,
            nome:"Thiago Ferreira", 
            tipo:"Idiomas", 
            duracao:"6 meses", 
            id:"32839212", 
            meta:"R$ 7.500,00", 
            arrecadado:"R$ 4.978,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png", 
            porcentagem:"60%"
        },
        {
            cardImg:imgPerfil,
            nome:"Thiago Ferreira", 
            tipo:"Idiomas", 
            duracao:"6 meses", 
            id:"32839212", 
            meta:"R$ 7.500,00", 
            arrecadado:"R$ 4.978,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png", 
            porcentagem:"80%"
        }
    ])

    
    const [btnTeste, setBtnTeste] = useState( <button className="btn__login" onClick={handleOpenModal}>Entrar</button>)

    function changeBtn(){
        setBtnTeste(<div className="userProfile" onClick={openModalConfig}>
        <div className="userProfile__img">
               <img src={kairosLogo}/>
        </div>

        <div className="modal__config">

           <Link to ="/"> <div className="wrapper__profile item">
                <CgProfile/>
                <span>Perfil</span>
            </div> </Link>

            <div className="wrapper__vaquinha item">
                <RiMoneyDollarCircleFill/>
                <span>Vaquinhas</span>
            </div>

            <div className="wrapper__salvos item">
                <RiBookmarkLine/>
                <span>Salvos</span>
            </div>

            <div className="wrapper__config item">
                <BsGearWide/>
                <span>Configurações</span>
            </div>

            <div className="logout__btn item">
                <span>Sair</span>
            </div>
        </div>

       
    </div>)
    }

    function openModalConfig(){
        const modalConfig = document.querySelector('.modal__config')
        if(modalConfig.classList.contains('is-active')){
            modalConfig.classList.remove('is-active')
        } else {
            modalConfig.classList.add('is-active')

        }
    }

    const customStyles ={
        content:{
            border:'none',
            maxWidth: '550px',
            height:'90%',
            left:'50%',
            top:'50%',
            transform: 'translate(-50%, -50%)',
            overflow:'hidden',
            backgroundColor:'#f6f6f6',
            borderRadius:'20px'
        }
        
    }
    
    

    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal(){
        setIsOpen(true)
    }
    function handleCloseModal(){
        setIsOpen(false)
    }
    return(
     <div className="vaquinha__content">

                <div className="vaquinha__header">

                   <Link to="/Kairos"> <div className="kairosLogo">
                        <img src={kairosLogo}/>
                    </div> </Link>

                    <form className="searchForm" id="searchForm">
                        <input className="searchInput" type="text" placeholder="Pesquisar"></input>
                        <span className="searchIcon">

                        </span>
                    </form>
                    
                    {btnTeste}

                </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                ariaHideApp={false}
                >
                    
                            <form id="login__form">
                            <div className="content__form__wrapper">
                                <div className="texts">
                                        <h2>Bem-vindo</h2>
                                        <h2>de volta!</h2>
                                </div>
                                <div className="form__inputs">
                                    <div>
                                        <label for="email__login">Informe seu e-mail:</label>
                                        <input type="email" id="email__login"></input>
                                    </div>
                                    <div>
                                        <label for="password__login">Digite sua senha</label>
                                        <input type="password" id="password__login"></input>
                                    </div>
                                    <div className="entrar__btn" onClick={changeBtn}>Entrar</div>
                                </div>
                                <span className="or">ou</span>
                                <div className="accounts__login">
                                    <div className="google__account">
                                        <a href="#"> <FcGoogle className="google__icon"/> </a>
                                    </div>
                                    <div className="facebook__account">
                                        <a href="#"><BsFacebook className="facebook_icon"/> </a>
                                    </div>
                                    
                                </div>
                                <div className="login__options">
                                  <Link to="/Cadastro"><span><a href="#">Não tem conta?</a></span>
                                  </Link>
                                    <span><a href="#">Esqueceu sua senha?</a></span>
                                </div>
                        
                            </div>
                        </form>
                    
                   
                </Modal>


                <div className="vaquinha__main">

                    {cards.map((cards) => (
                    <Card cardImg ={cards.cardImg} 
                    nome ={cards.nome} 
                    tipo ={cards.tipo} 
                    duracao ={cards.duracao} 
                    id ={cards.id} 
                    meta ={cards.meta} 
                    arrecadado ={cards.arrecadado} 
                    pais ={cards.pais} 
                    porcentagem ={cards.porcentagem}/>
                    ))}
                    
                </div>
    </div>
    )
}
export default Vaquinha;