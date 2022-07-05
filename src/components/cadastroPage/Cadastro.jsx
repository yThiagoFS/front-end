import React, { useState } from "react";
import "./Cadastro.css"

import {MdOutlineKeyboardBackspace} from "react-icons/md"
import {BsArrowRightCircle} from "react-icons/bs"

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

import { Link } from "react-router-dom";


function Cadastro(){
    const botao__cadastro = document.querySelector(".submitCadastro")
    const nomeUser = document.getElementById('nameUser')
    const emailUser = document.getElementById('emailUser')
    const passwordUser= document.getElementById('passwordUser')
    const dataNasc = document.getElementById('dataNasc')




    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        data_nascimento: ''
      });

      const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      });


      const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });



      
      
      
      const addUser = async e => {
          e.preventDefault();
            var verificacao = false 
            const confirmSenha = document.getElementById('confirmPassword')
            const senha = document.getElementById('passwordUser')
            const textError = document.querySelector('.textoErrado')
            if(confirmSenha.value != senha.value){
                textError.classList.add('active')
            }
            else{
                verificacao = true
                textError.classList.remove('active')
                senha = ''
            }
            
        if(verificacao){
            fetch("http://localhost:8080/usuario",
            {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "Post",
            body: JSON.stringify({
                nome: nomeUser.value,
                senha: passwordUser.value,
                email: emailUser.value,
                data_nascimento: dataNasc.value
            })
        })
        .then(function (res) {
            console.log(res)
            console.log('AAAAAAAAAAAA '+res.status)
            console.log(dataNasc.value)

            if (res.status ) {
                setStatus({
                  type: 'success',
                  mensagem: "Usuário cadastrado com sucesso!"
                });
                setUser({
                  name: '',
                  email: '',
                  password: '',
                  data_nascimento:''
                });
              } else {
                setStatus({
                  type: 'error',
                  mensagem: "Erro: Usuário não cadastrado com sucesso!"
                });
              }
        } )
        .catch(function (res) {console.log(res) })


      }
        }
        


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
       
            <div className="cadastro__content">

                <div className="cadastro__header">
                   <Link to="/Kairos"> <MdOutlineKeyboardBackspace className="back__icon"/> </Link>
                    <h1>República Federativa do Cadastro</h1>
                </div>

                <form className="cadastro__main" id="cadastro">

                    <div className="userImg">
                        <button className="userFile">

                        </button>
                    </div>

                    <div className="first__column">
                        <div className="wrapper__userName">
                            <label for="nameUser" >Nome Completo</label>
                            <input type="text" id="nameUser" placeholder="Nome"  onChange={valueInput} name="name" value={user.name}></input>
                        </div>

                        <div className="wrapper__email">
                            <label for="emailUser">E-mail</label>
                            <input type="email" id="emailUser" placeholder="exemplo123@gmail.com" name="email" onChange={valueInput} value={user.email}></input>
                        </div>

                        <div className="wrapper__dataNasc">
                            <label for="dataNasc">Data de Nascimento</label>
                            <input type="date" id="dataNasc" placeholder='00/00/0000' name="data" onChange={valueInput} value={user.data}></input>
                        </div>
                    </div>

                    <div className="second__column">

                        <div className="wrapper__password">
                            <label for="passwordUser">Senha</label>
                            <input type="password" id="passwordUser" placeholder='Ed[\41SJL9@!!' name="password" onChange={valueInput} value={user.password}></input>
                            <AiFillEye className="showPassword" onClick={visibilityInput}/>
                        </div>
                        
                        <div className="wrapper__confirmPassword">
                            <label for="confirmPassword">Confirme a senha</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Ed[\41SJL9@!!' ></input>
                            <AiFillEye className="showPassword" onClick={visibilityConfirmInput} />
                            <p class="textoErrado">Senha incorreta</p>
                        </div>

                        <button type="submit" onClick={addUser} className="submitCadastro">
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