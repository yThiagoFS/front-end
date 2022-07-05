import './style.css'
import React, { useState } from "react";


import Inicio from "./components/inicio/Inicio.jsx";
import Kairos from "./components/kairos/Kairos.jsx";
import Cadastro from "./components/cadastroPage/Cadastro";
import Colaboracao from "./components/colaboracao/Colaboracao";
import Choose from "./components/colaboracao/Choose";
import CadastroPessoaFisica from "./components/colaboracao/pessoaFisica/PessoaFisica";
import CadastroPessoaJuridica from "./components/colaboracao/pessoaJuridica/PessoaJuridica";
import Comunidade from "./components/comunidade/Comunidade"
import PostKairosAuPair from "./components/comunidade/postKairos/PostKairosAuPair"
import PostKairosProfissional from "./components/comunidade/postKairos/PostKairosProfissional"
import PostKairosHighSchool from "./components/comunidade/postKairos/PostKairosHighSchool"
import PostKairosIdiomas from "./components/comunidade/postKairos/PostKairosIdiomas"
import PostKairosGraduacao from "./components/comunidade/postKairos/PostKairosGraduacao"
import PostKairosPosGraduacao from "./components/comunidade/postKairos/PostKairosPosGraduacao"
import PostKairosTrainee from "./components/comunidade/postKairos/PostKairosTrainee.jsx"
import PostKairosVoluntario from "./components/comunidade/postKairos/PostKairosVoluntario"
import PostKairosCinquenta from "./components/comunidade/postKairos/PostKairosCinquenta"
import Vaquinha from "./components/vaquinha/Vaquinha"
import Perfil from "./components/comunidade/perfil/Perfil"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";


function App(){

    return(
        
        
        <Router>

            <Routes>

                <Route path="/" element={<Inicio/>}/>
                <Route path="/Kairos" element={<Kairos/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Colaboracao" element={<Colaboracao/>}/>
                <Route path="/PessoaFisica" element={<CadastroPessoaFisica/>}/>
                <Route path="/PessoaJuridica" element={<CadastroPessoaJuridica/>}/>
                <Route path="/Comunidade" element={<Comunidade/>}/>
                <Route path="/PostKairosAuPair" element={<PostKairosAuPair/>}/>
                <Route path="/PostKairosProfissional" element={<PostKairosProfissional/>}/>
                <Route path="/PostKairosHighSchool" element={<PostKairosHighSchool/>}/>
                <Route path="/PostKairosIdiomas" element={<PostKairosIdiomas/>}/>
                <Route path="/PostKairosGraduacao" element={<PostKairosGraduacao/>}/>
                <Route path="/PostKairosPosGraduacao" element={<PostKairosPosGraduacao/>}/>
                <Route path="/PostKairosTrainee" element={<PostKairosTrainee/>}/>
                <Route path="/PostKairosVoluntario" element={<PostKairosVoluntario/>}/>
                <Route path="/PostKairosCinquenta" element={<PostKairosCinquenta/>}/>
                <Route path="/Vaquinha" element={<Vaquinha/>}/>
                <Route path="/Perfil" element={<Perfil/>}/>
                <Route path="/Choose" element={<Choose/>}/>
                
                    
                
            </Routes>    

        </Router>
        
        
        
    )
}

export default App;