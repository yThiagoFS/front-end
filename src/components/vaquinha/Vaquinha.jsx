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
import dougImg from "../comunidade/img/dougImg.jpg"
import marinaImg from "../comunidade/img/marinaImg.jpg"
import gustavoImg from "../comunidade/img/gustavoImg.jpg"
import vicImg from "../comunidade/img/vicImg.jpg"
import migImg from "../comunidade/img/imgMiguel.jpg"
import rbImg from "../comunidade/img/rb-img.jpg"


import Card from "./cards/Card"
   
function Vaquinha(){

    const [cards, setCards] = useState([
        {
            cardImg:imgPerfil,
            nome:"Thiago Ferreira", 
            tipo:"Idiomas", 
            duracao:"1 ano", 
            id:"32839212", 
            meta:"R$ 10.250,00", 
            arrecadado:"R$ 6.500,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png", 
            porcentagem:"63%"
        },
        {
            cardImg:dougImg,
            nome:"Douglas Araújo", 
            tipo:"Idiomas", 
            duracao:"6 meses", 
            id:"32839213", 
            meta:"R$ 10.000,00", 
            arrecadado:"R$ 5.930,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png", 
            porcentagem:"59%"
        },
        {
            cardImg:marinaImg,
            nome:"Marina Santos", 
            tipo:"Au Pair", 
            duracao:"3 meses", 
            id:"32839214", 
            meta:"R$ 5.000,00", 
            arrecadado:"R$ 2.578,23", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2560px-Flag_of_Portugal.svg.png", 
            porcentagem:"51%"
        },
        {
            cardImg:gustavoImg,
            nome:"Gustavo Alves", 
            tipo:"Graduação", 
            duracao:"3 anos", 
            id:"32839215", 
            meta:"R$ 15.000,00", 
            arrecadado:"R$ 3.00,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png", 
            porcentagem:"20%"
        },
        {
            cardImg:vicImg,
            nome:"Vitória Sena", 
            tipo:"Idiomas", 
            duracao:"1 semestre", 
            id:"32839216", 
            meta:"R$ 3.000,00", 
            arrecadado:"R$ 700,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png", 
            porcentagem:"23%"
        },
        {
            cardImg:migImg,
            nome:"Miguel Vital", 
            tipo:"High School", 
            duracao:"1 ano", 
            id:"32839217", 
            meta:"R$ 20.500,00", 
            arrecadado:"R$ 14.978,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png", 
            porcentagem:"73%"
        },
       {
            cardImg:rbImg,
            nome:"Ryan Brayan", 
            tipo:"Idiomas", 
            duracao:"1 ano", 
            id:"32839217", 
            meta:"R$ 10.200,00", 
            arrecadado:"R$ 6.400,00", 
            pais:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2560px-Flag_of_Chile.svg.png", 
            porcentagem:"62%"
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
