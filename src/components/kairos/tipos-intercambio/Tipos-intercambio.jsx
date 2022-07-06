import React, { useState } from "react";

import "./Tipos-intercambio.css";
import imgChapeu from "./imgIntercambio/graduation-cap.png";
import imgLingua from "./imgIntercambio/lingua.png";

import imgChapeis from "./imgIntercambio/mortarboard.png";
import imgEscola from "./imgIntercambio/school.png";
import imgProfissional from "./imgIntercambio/employee.png";
import imgBebe from "./imgIntercambio/baby-boy.png";
import imgVoluntario from "./imgIntercambio/voluntario.png";
import imgTrainee from "./imgIntercambio/student.png";
import imgCinquenta from "./imgIntercambio/aniversario.png";

import img1 from "./imgIntercambio/img1.jpg"
import img2 from "./imgIntercambio/intercambio.jpg"


import {AiFillCloseCircle} from "react-icons/ai"

import { Link } from "react-router-dom";



function TiposIntercambio(){

   function closeModal(){
    const tiposContainer = document.querySelector('.tipos__container')
   
    tiposContainer.classList.remove('is-active')
   }
   function openModal(){
    const tiposContainer = document.querySelector('.tipos__container')

    tiposContainer.classList.add('is-active')
   }
    
    const [topicNav, setTopicNav] = useState(<Link to ="/PostKairosAuPair">  <button className="btn__verMais">Ver Mais</button></Link>)
    
    const [tipoModal, setTipoModal] = useState([
        {
            tipoTitle: '',
            tipoDescription: ''
        }
    ])

    function tipoAupair(){
        openModal()
   
        setTipoModal({
            tipoTitle:'Au Pair',
            tipoDescription: 'Em essência, o intercâmbio au pair é um esquema no qual o intercambista vai morar na casa de uma família-anfitriã, a host family. Lá, recebe alojamento e alimentação, além de um salário para trabalhar para essa família quase sempre cuidando das crianças.',
        })
        
         
    }

    function tipoProfissional(){
        openModal()

        setTipoModal({
            tipoTitle:'Profissional',
            tipoDescription: 'Essa é uma possibilidade de morar e trabalhar em outro país, por um tempo preestabelecido. As opções são variadas e você pode atuar em empresas, entidades sociais ou famílias, por exemplo.'
        })

        setTopicNav(<Link to ="/PostKairosProfissional">  <button className="btn__verMais">Ver Mais</button></Link>)
    }

    function tipoHighSchool(){
        openModal()

        setTipoModal({
            tipoTitle:'High School',
            tipoDescription: ' High School no exterior ou um Intercâmbio no Ensino Médio são excelentes opções para os pais que querem promover um futuro de mais oportunidades aos seus filhos. Além de se tornarem bilíngues, os alunos que cursam o ensino médio no exterior garantem oportunidades de graduação em universidades renomadas nos EUA, Inglaterra e outros destinos do mundo.'
        })

        setTopicNav(<Link to ="/PostKairosHighSchool">  <button className="btn__verMais">Ver Mais</button></Link>)

    }

    function tipoIdioma(){
        openModal()

        setTipoModal({
            tipoTitle: 'Idiomas',
            tipoDescription: 'A experiência de intercâmbio voltado a idiomas estrangeiros é bastante comum entre brasileiros, em especial quando o assunto é inglês e espanhol. Mas o que é intercâmbio de idiomas? Nesses casos, o foco da vivência no exterior é que o estudante aprenda ou “desenrole” um idioma estrangeiro.'
        })

        setTopicNav(<Link to ="/PostKairosIdiomas">  <button className="btn__verMais">Ver Mais</button></Link>)

    }
    function tipoGraduacao(){
        openModal()

        setTipoModal({
            tipoTitle:'Graduação',
            tipoDescription:'Cursar a faculdade ou parte dela em outro país é um grande diferencial para construir uma carreira sólida e próspera na atualidade e, este, é o principal objetivo do Programa Universitário! Com suporte desde a escolha do curso e aplicação até seu embarque, este intercâmbio fará você voar ainda mais alto. Conheça como funciona esta modalidade: '
        })

        setTopicNav(<Link to ="/PostKairosGraduacao">  <button className="btn__verMais">Ver Mais</button></Link>)

    }
    function tipoPosGraduacao(){
        openModal()

        setTipoModal({
            tipoTitle:'Pós-Graduação',
            tipoDescription:'Estudantes, professores ou pós-graduantos que queiram realizar cursos de pós-graduação no exterior, incluindo Mestrado e Doutorado, devem conferir as oportunidades de bolsas no exterior, oferecidas pelos órgãos nacionais e internacionais.'
        })

        setTopicNav(<Link to ="/PostKairosPosGraduacao">  <button className="btn__verMais">Ver Mais</button></Link>)

    }

    function tipoCinquenta(){
        openModal()

        setTipoModal({
            tipoTitle: '+50',
            tipoDescription:'Pois é, fazer intercâmbio depois dos 50 anos, agora, também é sinônimo de realização de um sonho antigo. A cada dia que passa, cresce consideravelmente o número de aposentados e entusiastas da melhor idade que desejam se aventurar em outros países. Isso para vivenciar experiências antes comuns apenas aos jovens.',
        })

        setTopicNav(<Link to ="/PostKairosCinquenta">  <button className="btn__verMais">Ver Mais</button></Link>)

    }

    function tipoTrainee(){
        openModal()

        setTipoModal({
            tipoTitle:'Trainee',
            tipoDescription:'O intercâmbio do tipo Trainee visa dar mais experiência ao universitário na vida profissional, seja ela ligada diretamente a sua área de estudo ou não.',
        })

        setTopicNav(<Link to ="/PostKairosTrainee">  <button className="btn__verMais">Ver Mais</button></Link>)

    }

    function tipoVoluntario(){
        openModal()

        setTipoModal({
            tipoTitle:'Voluntário',
            tipoDescription:'Conhecido também como Volunturismo, no programa de Trabalho Voluntário no Exterior você pode cuidar de animais, ajudar na conservação do meio ambiente ou desenvolver ações humanitárias na África do Sul e  tornar a sua viagem de intercâmbio ainda mais interessante, com um objetivo muito maior!',
        })

        setTopicNav(<Link to ="/PostKairosVoluntario">  <button className="btn__verMais">Ver Mais</button></Link>)

    }

    
    return(
        <>
            <div className="tiposIntercambio__content" id="intercambios" data-animation>

                <div className="trail__sideTipos" data-animation="left">

                    <div className="containerImg__trail">
                        <div className="img__container">
                            <img className="img1 img" src={img2}/>
                        </div>
                        <div className="img__container"><img className="img2 img" src={img1}/></div>
                    </div>
                    
                </div>

            <div className="content__tiposIntercambio">
                <h1 data-animation="top">Intercâmbios</h1>
                
                <div className="tipos__container" data-animation="bottom">


                <div className="modal__Tipos">

                    <span className="close__modal" onClick={closeModal}>
                        <AiFillCloseCircle className="close__icon" />
                    </span>

                    <p className="p1">{tipoModal.tipoTitle}</p>

                    <p>{tipoModal.tipoDescription}</p>

                    {topicNav}

                </div>



                    <div className="first__line line">

                        <div className="first__icon icon aupair" onClick={tipoAupair}>
                            <img src={imgBebe}/>
                        </div>

                        <h3>Au Pair</h3>

                        <div className="second__icon icon idioma" onClick={tipoIdioma}>
                            <img src={imgLingua}/>
                        </div>

                        <h3>Idiomas</h3>

                        <div className="third__icon icon trainee" onClick={tipoTrainee}>
                            <img src={imgTrainee}/>
                        </div>
                        
                        <h3>Trainee</h3>

                    </div>
                    
                    
                    <div className="second__line line">
                        
                        <div className="first__icon icon profssional" onClick={tipoProfissional}>
                            <img src={imgProfissional}/>
                            
                        </div>
                        <h3>Profissional</h3>

                        <div className="second__icon icon graduacao" onClick={tipoGraduacao}>
                            <img src={imgChapeu}/>
                        </div>
                        <h3>Graduação</h3>
                        
                        <div className="third__icon icon voluntario" onClick={tipoVoluntario}>
                            <img src={imgVoluntario}/>
                        </div>
                        <h3>Voluntário</h3>
                    </div>
                    
                    
                    <div className="third__line line">
                        <div className="first__icon icon highschool" onClick={tipoHighSchool}>
                            <img src={imgEscola}/>
                        </div>
                        
                        <h3>High School</h3>

                        <div className="second__icon icon posgraduacao" onClick={tipoPosGraduacao}>
                            <img src={imgChapeis}/>
                        </div>
                        <h3>Pós-Graduação</h3>

                        <div className="third__icon icon" onClick={tipoCinquenta}>
                            <img src={imgCinquenta}/>
                        </div>

                        <h3>+50</h3>

                    </div>

                   


                </div>

               
            </div>

            </div>
        </>
    )
}
export default TiposIntercambio;
