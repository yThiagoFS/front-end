import React, { useState } from "react"

import "./Card.css"

import { AiFillHeart } from "react-icons/ai"

function Cards({cardImg,nome, tipo, duracao, id, meta, arrecadado, pais, porcentagem}){

    const [toogle, setToogle] = React.useState(true);
    const [cor, setCor] = React.useState('#ffffff');
    React.useEffect(() => {
      setCor((state) => toogle ? '#ffffff': '#75B9D4');
    }, [toogle]);

    return(
        <div className="card__container">

            <div className="card__contentWrapper">

                <div className="fav__btn" onClick={e => setToogle(state => !state)}>
                <AiFillHeart style={{
                    color:cor
                }}/>
                </div>

            <div className="card__header">


                <div className="card__img">
                    <img src={cardImg}/>
                </div> 

                <span className="card__username">
                    {nome}
                </span>

                <div className="tipo__duracao">
                    <p>{tipo} | {duracao}</p>
                </div>

            </div>

                <div className="card__informations">
                    <ul>
                        <li>
                            ID {id}
                        </li>
                        <li>
                           Meta: {meta}
                        </li>
                        <li>
                           Arrecadado: {arrecadado}
                        </li>
                    </ul>

                <div className="card__country">
                    <img src={pais}/>
                </div>
                
            </div>


                <div className="card__footer">


                    <div className="progress__bar">
                        <div className="porcentagem__nivel" style={{
                            width:porcentagem
                        }}>
                            <span>{porcentagem}</span>
                        </div>
                    </div>

                    <div className="card__links">
                        <span>Conheça mais | </span>
                        <span>Contribua</span>
                    </div>

                    
                </div>
            </div>

        </div>
    )
}
export default Cards