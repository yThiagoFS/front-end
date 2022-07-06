import PostKairos from "./PostKairos.jsx"
import intercambio50 from "../img/50.jpg"
import cinquentaFirsTipImg from "../img/requisitos-basicos-img-50.png"
import disposicaoCinquenta from "../img/disposicao-cinquenta.png"
import escolherLocalCinquenta from "../img/escolher-local-cinquenta.jpg"

export default function PostKairosCinquenta(){

    return(
        <PostKairos title ={` Intercâmbio +50`}
        imgPost  ={intercambio50}
        description ={`O intercâmbio Terceira Idade, conhecido como +50, são programas que combinam aulas de
        idiomas com atividades culturais e excursões, destinados aos aventureiros da melhor idade.
        Ótimo para quem quer aprender ou aperfeiçoar o idioma de maneira leve e descontraída e
        viver uma experiência cultural única. Além de estudar, o viajante terá a oportunidade de
        conhecer lugares turísticos e ainda conviver e fazer novas amizades com pessoas da mesma
        faixa etária, nascidos de diversas partes do mundo.
        `}
        subtitle ={`O que é preciso para realizar o intercâmbio +50?`}
        firstTip ={`1 - Requisitos básicos`}
        firstTipImg ={cinquentaFirsTipImg}
        firstTipDescription ={`Ter mais que 50 anos, sem idade máxima.`}
        secondTip={`2 - Disposição`}
        secondTipImg ={disposicaoCinquenta}
        secondTipDescription ={`Disposto a ficar por mais de 2 semanas no programa de intercâmbio.
        `}
        thirdTip ={`3 - Escolher bem o local`}
        thirdTipImg ={escolherLocalCinquenta}
        thirdTipDescription ={`Ver qual o tipo de idioma mais é falado, os tipos de passeio e atividades culturais de
        acordo com o destino e ver o tipo de hospedagem, como casa de família, apartamento ou
        hotel.`}/> 
        
       
    )
}
