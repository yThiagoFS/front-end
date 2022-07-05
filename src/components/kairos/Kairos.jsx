import React from "react";
import HomePage from "../home/Home.jsx";
import TiposIntercambio from "./tipos-intercambio/Tipos-intercambio";
import Explorar from "./explorar/Explorar";
import SobreNos from "./sobre-nos/Sobre-nos";

function Kairos(){
        return(
                <>
                <HomePage/>
                <TiposIntercambio/>
                <Explorar/>
                <SobreNos/>
                </>
        )
}

export default Kairos