import PostKairos from "./PostKairos.jsx"
import imgVoluntario from "../img/imgVoluntario.png"
import imgVoluntarioRequisitos from "../img/imgVoluntario-requisitos.jpg"
import imgVoluntarioSelf from "../img/imgVoluntario-self.jpg"
import imgVoluntarioDocumentos from "../img/imgVoluntario-documentos.png"

export default function PostKairosVoluntario(){

    return(
        <PostKairos title ={`Intercâmbio Voluntário`}
        imgPost  ={imgVoluntario}
        description ={`Intercâmbio Voluntário é uma viagem cujo objetivo é principalmente ajudar um projeto social.
        Viajando como voluntário, você terá uma maior imersão cultural e conhecerá mais de perto a
        realidade do país, além de ajudar um projeto. Normalmente você ajuda uma ONG ou
        instituição de caridade a realizar o seu serviço. Isso vai desde atender populações carentes,
        animais em situação de vulnerabilidade e até trabalhar com organização de defesa do meio
        ambiente. Esta modalidade de intercâmbio vem ganhando espaço, principalmente por
        envolver aprendizado com trabalho voluntário. As vantagens de se fazer esse tipo de
        intercâmbio são muitas, como conhecer um novo idioma, fazer amigos, globalizar o seu
        currículo e ser introduzido a uma cultura diferente da sua.`}
        subtitle ={`O que é preciso para realizar o intercâmbio Voluntário?`}
        firstTip ={`1 - Requisitos básicos`}
        firstTipImg ={imgVoluntarioRequisitos}
        firstTipDescription ={`Ter mais que 18 anos e ser estudante de graduação, pós-graduação ou ser recém-formado há até 12 meses (não podendo embarcar após 12 meses da conclusão do curso).`}
        secondTip={`2 - Se voluntariar`}
        secondTipImg ={imgVoluntarioSelf}
        secondTipDescription ={`Se conectar a uma ONG ou comunidade com vagas abertas e passar por um processo de
        seleção de vaga.`}
        thirdTip ={`3 - Documentos`}
        thirdTipImg ={imgVoluntarioDocumentos}
        thirdTipDescription ={`Ter documentos básicos como passaporte e visto (dependendo do país).`}/> 
        
       
    )
}
