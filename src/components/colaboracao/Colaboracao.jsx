import "./Colaboracao.css"

import { Link } from "react-router-dom";

import {MdOutlineKeyboardBackspace} from "react-icons/md"

function Colaboracao(){
    return(
    <div className="colaboracao__content">

        <Link to="/Kairos"> <MdOutlineKeyboardBackspace className="back__icon"/> </Link>

            <div className="first__content">
                
                <p>contribua para a <br/>
                realização do sonho <br/>
                de muitos jovens!
                <span>Seja um investidor anjo!</span></p>
                
            </div>

            <div className="second__content">
                <div className="first__text">
                    <h2>Como funciona o apoio financeiro?</h2>
                    <p>O investidor anjo participa com doações de valores para a realização do intercâmbio de jovens baixa renda.</p>
                </div>
                <div className="second__text">
                    <h2>Quem pode ser um investidor anjo?</h2>
                    <p>Empresas ou pessoas físicas que se cadastrem na Kairos. </p>
                </div>

               <Link to ="/Choose"> <button className="continueOption">Ser um investidor Anjo</button> </Link>
            </div>
    </div>

    )
}
export default Colaboracao