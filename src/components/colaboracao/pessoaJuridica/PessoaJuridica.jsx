import React from "react";
import "./PessoaJuridica.css"

import {MdOutlineKeyboardBackspace} from "react-icons/md"
import {BsArrowRightCircle} from "react-icons/bs"

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

import { Link } from "react-router-dom";


function Cadastro(){
   

    function visibilityInput(){
        const inputPassword = document.getElementById('passwordUser')
        if(inputPassword.type == "password"){
            inputPassword.type = "text"
        } else {
            inputPassword.type = "password"
        }
    }

    function visibilityConfirmInput(){
        const inputConfirmPassword = document.getElementById('confirmPassword')
        if(inputConfirmPassword.type == "password"){
            inputConfirmPassword.type = "text"
        } else {
            inputConfirmPassword.type = "password"
        }
    }



    return(
        <>
            <div className="pessoaJuridica__content">

                <div className="cadastro__header">
                   <Link to="/Choose"> <MdOutlineKeyboardBackspace className="back__icon"/> </Link>
                    <h1>República Federativa do Cadastro</h1>
                </div>

                <form className="cadastro__main" id="cadastroPessoaJuridica">

                    <div className="userImg">
                        <button className="userFile">

                        </button>
                    </div>

                    <div className="first__column">
                        <div className="wrapper__razaoSocial">
                            <label for="razaoSocial" >Razão Social</label>
                            <input type="text" id="razaoSocial" placeholder="Kairos Ind. e Com Ltda"></input>
                        </div>

                        <div className="wrapper__email">
                            <label for="emailUser">E-mail</label>
                            <input type="email" id="emailUser" placeholder="exemplo123@gmail.com"></input>
                        </div>

                        <div className="wrapper__dataAbertura">
                            <label for="dataAbertura">Data de Abertura</label>
                            <input type="date" id="dataAbertura" placeholder='00/00/0000'></input>
                        </div>
                    </div>

                    <div className="second__column">

                        <div className="wrapper__cnpj">
                            <label for="cnjpCompany">CNJP</label>
                            <input type="text" id="cnjpCompany" placeholder="00.000.000/0001-00"></input>
                        </div>

                        <div className="wrapper__password">
                            <label for="passwordUser">Senha</label>
                            <input type="password" id="passwordUser" placeholder='Ed[\41SJL9@!!' ></input>
                            <AiFillEye className="showPassword" onClick={visibilityInput}/>
                        </div>
                        
                        <div className="wrapper__confirmPassword">
                            <label for="confirmPassword">Confirme a senha</label>
                            <input type="password" id="confirmPassword" placeholder='Ed[\41SJL9@!!'></input>
                            <AiFillEye className="showPassword" onClick={visibilityConfirmInput}/>
                        </div>

                        <button type="submit" className="submitCadastro">
                            Finalizar
                            <BsArrowRightCircle className="arrowBtn"/>
                        </button>

                    </div>

                    


                </form>

                <div className="cadastro__footer">

                </div>

            </div>
        </>
    )
}

export default Cadastro
