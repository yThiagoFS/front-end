import { useState, useEffect } from "react";

import Modal from "react-modal";

import imgPerfil from "../img/minhaImg.jpg"
import kairosLogo from "../img/kairos-logo.png"
import kairosLogoPerfil from "../img/kairos-logo-perfil.png"

import "./PostKairos.css"


import { CgProfile } from "react-icons/cg"
import { RiMoneyDollarCircleFill, RiBookmarkLine } from "react-icons/ri"
import { ImArrowUp } from "react-icons/im"
import { FaRegPaperPlane } from "react-icons/fa"
import { BsGearWide, BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

import { Link } from "react-router-dom";




function PostKairos({title,imgPost,description,subtitle,firstTip,firstTipImg,firstTipDescription,secondTip,secondTipImg,secondTipDescription,thirdTip,thirdTipImg,thirdTipDescription}){


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    function openModalConfig(){
        const modalConfig = document.querySelector('.modal__config')
        if(modalConfig.classList.contains('is-active')){
            modalConfig.classList.remove('is-active')
        } else {
            modalConfig.classList.add('is-active')

        }
    }

    const [btnTeste, setBtnTeste] = useState( <button className="btn__login" onClick={handleOpenModal}>Entrar</button>)

    function changeBtn(){
        setBtnTeste(<div className="userProfile" onClick={openModalConfig}>
        <div className="userProfile__img">
               <img src={imgPerfil}/>
        </div>

        <div className="modal__config">

           <Link to ="/Perfil"> <div className="wrapper__profile item">
                <CgProfile/>
                <span>Perfil</span>
            </div> </Link>

            <div className="wrapper__vaquinha item">
                <RiMoneyDollarCircleFill/>
                <span>Apoio</span>
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

    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal(){
        setIsOpen(true)
    }
    function handleCloseModal(){
        setIsOpen(false)
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
    return(
        <>

    <div className="comunidade__contentKairos">

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

           {/* <div className="userProfile" onClick={openModalConfig}>
                <div className="userProfile__img">
                        <img src={imgPerfil}/>
                </div>

                <div className="modal__config">

                    <div className="wrapper__profile item">
                        <CgProfile/>
                        <span>Perfil</span>
                    </div>

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

            
            </div> */}

        </div>

        <ul className="timeline">
        <li>
                    <div className="wrapper__userProfilePost">
                        <div className="user__img">
                            <img src={kairosLogoPerfil}/>
                        </div>

                        <span className="userName">@Kairos</span>

                        <div className="wrapper__postOptions">
                        <ImArrowUp className="icon__post"/>
                        <FaRegPaperPlane className="icon__post"/>
                        <RiBookmarkLine className="icon__post"/>
                        </div>
                    </div>

                    <div className="wrapperPost">
                        <h2>{title}</h2>
                        <div className="container__img">
                            <img src={imgPost}/>
                        </div>
                        <p className="description">
                        {description}
                        </p>

                        <h2>{subtitle}</h2>

                            <ul className="containter__tips">
                                <li>
                                    <h3>{firstTip}</h3>
                               

                                <div className="img__li">
                                    <img src={firstTipImg}/>
                                </div>

                                <p className="tip__description">
                                {firstTipDescription}
                                </p>

                                 </li>

                                 <li><h3>{secondTip}</h3>
                               

                                <div className="img__li">
                                    <img src={secondTipImg}/>
                                </div>

                                <p className="tip__description">
                                {secondTipDescription}
                                </p>

                                 </li>

                                 <li>
                                    <h3>{thirdTip}</h3>
                               

                                <div className="img__li">
                                    <img src={thirdTipImg}/>
                                </div>

                                <p className="tip__description">
                                {thirdTipDescription}


                                </p>

                                 </li>
                            </ul>

                    </div>
               </li>
        </ul>

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

        </div>

        </>
    )
}
export default PostKairos