import PostKairos from "./PostKairos.jsx"
import graduacaoImg from "../img/graduacaoImg.png"
import graduacaoRequisitos from "../img/graduacao-requisitos.jpg"
import graduacaoPesquisar from "../img/graduacao-pesquisar.jpg"
import graduacaoFaculdade from "../img/graduacaoFaculdade.png"

export default function PostKairosGraduacao(){

    return(
        <PostKairos title ={`Intercâmbio Graduação`}
        imgPost  ={graduacaoImg}
        description ={`O intercâmbio na faculdade permite que estudantes universitários tenham a oportunidade de
        ter uma experiência acadêmica em instituições de outros países. O programa pode durar 3, 6
        ou 12 meses. Durante o período, é possível focar na melhora do idioma ou em terminar o
        curso superior que iniciou no Brasil. O processo exige dedicação por parte da pessoa
        interessada, mas todo esforço é recomendado. Pois, esse será seu momento único de
        crescimento pessoal e profissional, melhorar o currículo e ampliar as oportunidades no
        mercado de trabalho.
        `}
        subtitle ={`O que é preciso para realizar o intercâmbio Graduação?
        `}
        firstTip ={`1 - Requisitos básicos`}
        firstTipImg ={graduacaoRequisitos}
        firstTipDescription ={`Saber para qual país você deseja ir, e se onde você estiver hospedado é próximo a instituição,
        quanto custa viver no lugar e ter a informação do idioma mais falado no local.
        `}
        secondTip={`2 - Pesquisar sobre a Instituição`}
        secondTipImg ={graduacaoPesquisar}
        secondTipDescription ={`Quais matérias a universidade oferece para que você possa fazer e saber o local onde ela fica a
        faculdade.`}
        thirdTip ={`3 - Falar com a faculdade`}
        thirdTipImg ={graduacaoFaculdade}
        thirdTipDescription ={`Se estiver matriculado em uma faculdade brasileira, é importante consultar se sua instituição
        tem convênios e quais são as políticas internas.`}/> 
        
    )
}
