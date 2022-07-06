import React, { useState } from "react"

import "./Comunidade.css"

import kairosLogo from "./img/kairos-logo.png"
import imgPerfil from "./img/minhaImg.jpg"
import Posts from "./post/Posts"
import imgPost1 from "./img/imgPost1.png"
import imgGabriel from "./img/imgGabriel.jpg"
import imgRb from "./img/rb-img.jpg"
import imgRbProfile from "./img/imgRbProfile.jpg"
import portugalImg from "./img/portugalImg.jpg"
import userPortugal from "./img/userPortugal.jpg"
import imagemTailandia from "./img/mTailandia.jpg"
import imgMulher from "./img/img-mulher.jpg"
import slide1Img from "./img/slides1img.jpg"

import { CgProfile } from "react-icons/cg"

import { RiMoneyDollarCircleFill, RiBookmarkLine } from "react-icons/ri"

import { BsGearWide, BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"



import { Link } from "react-router-dom";

import Slider from "../slider/Slider.tsx"

import { SwiperProps, SwiperSlide } from "swiper/react"

import Modal from "react-modal"



function Comunidade(){

    const [btnTeste, setBtnTeste] = useState( <button className="btn__login" onClick={handleOpenModal}>Entrar</button>)

    function openModalConfig(){
        const modalConfig = document.querySelector('.modal__config')
        if(modalConfig.classList.contains('is-active')){
            modalConfig.classList.remove('is-active')
        } else {
            modalConfig.classList.add('is-active')

        }
    }

    const [post, setPost] = useState([
        {
            imgPost:imgPost1,
            userImg:imgGabriel,
            caption:'#TBT do dia em que cheguei na Noruega!! Foi uma experiência incrível, lembro como se fosse hoje em como fiquei espantado com as diferenças culturais.',
            userNick:'@gab.augusto'
        },
        {
            imgPost:imgRb,
            userImg:imgRbProfile,
            caption:'Havai é simplesmente incrível!! Melhor lugar que já visitei até o momento, recomendo!',
            userNick:'@ryan.bf'
        },
        {
            imgPost:portugalImg,
            userImg:userPortugal,
            caption:'Sabiam que aqui em Portugal, as atrações mais populares são acessíveis a pé? Ou seja, não compensa alugar um carro, pois é dificil para estacionar e gasta muito tempo!',
            userNick:'@lucasSilvaB'
        },
        {
            imgPost:imagemTailandia,
            userImg:imgMulher,
            caption:'Hoje foi dia de conhecer o Parque Nacional de Khao Sok aqui na Tailândia. #Asia #TrabalharFora',
            userNick:'@gabss_silva'
        },
        {
            imgPost:imgPost1,
            userImg:imgGabriel,
            caption:'#TBT do dia em que cheguei na Noruega!! Foi uma experiência incrível, lembro como se fosse hoje em como fiquei espantado com as diferenças culturais.',
            userNick:'@gab.augusto'
        },
        {
            imgPost:imgPost1,
            userImg:imgGabriel,
            caption:'#TBT do dia em que cheguei na Noruega!! Foi uma experiência incrível, lembro como se fosse hoje em como fiquei espantado com as diferenças culturais.',
            userNick:'@gab.augusto'
        },
        
    ])

   

    const settings = {
        spaceBetween: 50,
        slidesPerView: 4,
        navigation:true,
        autoplay:{
            delay:3500,
            disableOnInteracion:false
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

function changeState(){
        setIsOpen(false)
    
     setBtnTeste(<div className="userProfile" onClick={openModalConfig}>
        <div className="userProfile__img">
               <img src={kairosLogo}/>
        </div>

        <div className="modal__config">

           <Link to ="/Perfil"> <div className="wrapper__profile item">
                <CgProfile/>
                <span>Perfil</span>
            </div> </Link>

            <Link to ="/Vaquinha"><div className="wrapper__vaquinha item">
                <RiMoneyDollarCircleFill/>
                <span>Apoio</span>
            </div>
            </Link>

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
   
    return(
        <>
            <div className="comunidade__content">

                <div className="comunidade__header">

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

                

                <ul className="timeline">
                {post.map((post) => 
                <Posts
                imgPost={post.imgPost}
                userImg={post.userImg}
                caption={post.caption}
                userNick={post.userNick}
                />)}
                </ul>

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
                                    <div className="entrar__btn" onClick={changeState}>Entrar</div>
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
        </>
    )
}
export default Comunidade
