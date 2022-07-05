import "./Choose.css"

import { Link } from "react-router-dom"

import { MdOutlineKeyboardBackspace } from "react-icons/md"

export default function Choose() {
    return (
        <div className="colaboracao__content">

            <Link to="/Colaboracao"> <MdOutlineKeyboardBackspace className="back__icon" /> </Link>

            <div className="first__content">

                <p>É muito bom ter <br />
                    você por aqui <br />
                    <span>ajudando a realizar <br />
                        sonhos ;&#41; </span></p>

            </div>

            <div className="second__content">

                <div className="options__container">

                    <h2>Para começar seu cadastro, nos diga: qual o seu perfi?</h2>

                    <div className="options__wrapper">

                        <div className="option1 option">
                            <Link to="/PessoaFisica">
                                <button type="button" className="pessoaFisica">
                                </button>
                            </Link>

                            <h3>Pessoa física</h3>
                        </div>

                        <div className="option2 option">

                            <Link to="/PessoaJuridica">
                                <button type="button" className="pessoaJuridica">
                                </button>
                            </Link>



                            <h3>Pessoa Juridica</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}