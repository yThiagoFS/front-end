import React, { useState } from "react";

import "./Home.css"

import imgLogo from "../img/kairos-logo.png";
import img1 from "./img/img1.jpg";


import Slider from "../slider/Slider.tsx"

import { SwiperProps, SwiperSlide } from "swiper/react"


import Modal from "react-modal"




import { FcGoogle } from "react-icons/fc"
import { BsFacebook, BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs"

import {
    BrowserRouter as Router,
    StaticRouter,
    Route,
    Link

} from "react-router-dom";


function HomePage() {

    const [btnTeste, setBtnTeste] = useState(<button className="btn__login" onClick={handleOpenModal}>Entrar</button>)

    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }
    function handleCloseModal() {
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            border: 'none',
            maxWidth: '550px',
            height: '90%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
            backgroundColor: '#f6f6f6',
            borderRadius: '20px'
        }

    }


    const settings = {
        spaceBetween: 50,
        slidesPerView: 1,
        navigation: true,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 3500,
            disableOnInteracion: false
        }
    }



    return (
        <>
            <header className="header__content">
                <nav className="nav">

                    <Link to ="/"> <div className="logoImg"><img src={imgLogo} />
                    </div> </Link>

                    <ul className="navlist">

                        <li>
                            <a href="#intercambios">Intercâmbios</a>
                        </li>
                        <li>
                            <a href="#explorar">Explorar</a>
                        </li>
                        <li>
                            <Link to="/Comunidade"> Comunidade </Link>
                        </li>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>

                    </ul>

                    <div className="container__btn">{btnTeste}</div>
                </nav>
            </header>



            <div className="home__content">


                <div className="content">

                    <div className="wrapper__home__content">

                        <Slider settings={settings}>
                            <SwiperSlide>

                                <h1>O que é intercâmbio?</h1>
                                <p>Um Intercâmbio é uma viagem que você irá passar um período fora do seu país de origem a fim de conhecer outro lugar com objetivos profissionais, acadêmicos ou pessoais. </p>

                            </SwiperSlide>
                            <SwiperSlide>

                                <h1>Por que fazer Intercâmbio é importante? </h1>
                                <p>Fazer intercâmbio permite a você desenvolver diversas habilidades que vão além de um novo idioma. Você enriquece sua bagagem cultural, possui mais autonomia para tomar decisões, desenvolve a sua independência, aprende uma nova cultura. E todas essas mudanças serão relevantes para o seu desenvolvimento pessoal e profissional. </p>

                            </SwiperSlide>
                            <SwiperSlide>

                                <h1>Quanto custa um Intercâmbio?</h1>
                                <p>Existem opções para todos os gostos e todos os bolsos, com diversas formas de pagamento e parcelamento. O preço pode variar bastante conforme o país e a cidade para onde você quer ir, a época em que pretende viajar, quanto tempo desejar ficar e do tipo de programa do qual você quer participar. </p>

                            </SwiperSlide>

                            <SwiperSlide>

                                <h1>Onde fazer intercâmbio?</h1>
                                <p>Para escolher o programa de intercâmbio certo, você deverá levar em consideração o idioma do país, o clima da cidade de acordo com a época da sua viagem e o seu objetivo durante esse período. </p>

                            </SwiperSlide>

                        </Slider>


                        <div className="cadastro__btnContainer">

                            <div className="btn__wrapper">

                                <Link to="/Cadastro">
                                    <button id="btnCadastro" className="cadastro__btn">Cadastre-se
                                        <span>

                                        </span>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>




                </div>

                <div className="blue__side">
                    <div className="content__blueSide">

                        <div className="img__home">
                            <img src={img1} />
                        </div>

                        <div className="blue__btnContainer">

                            <div className="btn__wrapperColaboracao">
                                <Link to="/Colaboracao">
                                    <button type="submit" id="btnColaborador" className="colaborador__btnBlue">Seja um Colaborador!
                                        <span>
                                        </span>
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>


                {/*Modal do Formulário */}
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
                                <button type="submit" className="entrar__btn">Entrar</button>
                            </div>
                            <span className="or">ou</span>
                            <div className="accounts__login">
                                <div className="google__account">
                                    <a href="#"> <FcGoogle className="google__icon" /> </a>
                                </div>
                                <div className="facebook__account">
                                    <a href="#"><BsFacebook className="facebook_icon" /> </a>
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


            </div>

        </>
    )
}


export default HomePage;
