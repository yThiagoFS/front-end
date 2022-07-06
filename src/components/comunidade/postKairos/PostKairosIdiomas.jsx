import PostKairos from "./PostKairos.jsx"
import imgIdioma from "../img/imgIdiomas.png"
import idiomaRequisitos from "../img/idioma-requisitos.png
import idiomaViagem from "../img/idioma-viagem.png"
import idiomaPesquisar from "../img/idioma-pesquisar.png"

export default function PostKairosIdiomas(){

    return(
        <PostKairos title ={`Intercâmbio de Idioma`}
        imgPost  ={imgIdioma}
        description ={`É uma viagem na qual o foco principal é com que tenha um conhecimento intercultural. Para
        adquirir fluência em outro idioma, estudar no exterior e fazer cursos de idioma é a melhor
        forma de atingir seu objetivo. Inclusive, é comprovado que o intercâmbio é uma das melhores
        formas de aprendizado. As situações cotidianas, estimulam o raciocínio na nova língua e
        enriquecem, também, o entendimento de novos vocábulos, o que garante a combinação
        perfeita para um aprendizado rápido e duradouro.`}
        subtitle ={`O que é preciso para realizar o intercâmbio de idioma?`}
        firstTip ={`1 - Requisitos básicos`}
        firstTipImg ={idiomaRequisitos}
        firstTipDescription ={`Escolher o tipo de curso que deseja fazer e o destino ideal para você.`}
        secondTip={`2 - Viagem`}
        secondTipImg ={idiomaViagem}
        secondTipDescription ={`Pesquisar as documentações necessárias para fazer o curso (como passaporte, visto, etc.).`}
        thirdTip ={`3 - Pesquisar
        `}
        thirdTipImg ={idiomaPesquisar}
        thirdTipDescription ={`Fazer buscas sobre possíveis auxílios que vão te ajudar a conseguir essa oportunidade.`}/> 
        
       
    )
}
