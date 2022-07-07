import React from "react"
import "./Inicio.css";
import logo from "../img/kairos-logo-removebg.png";
import logoBranca from "../comunidade/img/kairos-logo.png"
import  {IoIosArrowDroprightCircle} from "react-icons/io"

import { Link } from "react-router-dom";

function Inicio(){


    return(
		<>
        <div className="wrapper__inicio">

			<div className="diagonalEsq"></div>
			<div className="diagonalDir"></div>
			<div className='menu_inicio'>
				<p>Kairos, o intercâmbio <br/> de verdade!</p>
			</div>
				<div id="imgLogo"></div>
		
			<div className='footer_inicio'> 
				<form className="form_inicio">
					Eu quero vivenciar 
					<select>
						<option value="1" selected>Experiência</option>
						<option value="2">Au Pair</option>
						<option value="3">Trabalho</option>
						<option value="4">Graduação</option>
					</select>
					<br />
					no
					<select>
						<option value="1" selected>País</option>
						<option value="2">Canadá</option>
						<option value="3">Portugal</option>
						<option value="4">EUA</option>
						<option value="2">Irlanda</option>
					</select>
					pelo período de
					<select>
						<option value="1" selected>tempo</option>
					 	<option value="1">6 meses.</option>
					 	<option value="2">1 ano.</option>
					 	<option value="3">2 anos.</option>
					</select>
					<div className="wrapper_button">
						<Link to ="/Kairos"><button className="submit_button"><IoIosArrowDroprightCircle className="icon_arrow"/> Planejar!</button></Link>
					</div>
					<div className="nl-overlay"></div>
				</form>
			</div>
		</div>
		</>
    )
}

export default Inicio
