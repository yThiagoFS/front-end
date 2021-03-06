import PostKairos from "./PostKairos.jsx"
import imgProfissional from "../img/imgProfissional.jpg"
import imgProfissionalRequisito from "../img/imgProfissional-requisito.png"
import imgProfissionalOportunidades from "../img/imgProfissional-oportunidades.jpg"
import imgProfissionalPesquisa from "../img/imgProfissional-Pesquisa.jpg"

export default function PostKairosProfissional(){

    return(
        <PostKairos title ={`Intercâmbio Profissional`}
        imgPost  ={imgProfissional}
        description ={`Esse tipo de intercâmbio tem como uma possibilidade de morar e trabalhar em outro país, por
        um tem preestabelecido. As opções são várias e você pode atuar em empresas, entidades
        sociais ou famílias, por exemplo. Você terá que usar parte das suas reservas financeiras para
        ajudas nas despesas quando estiver lá fora. Ou seja, considere como principal ganho
        intercâmbio profissional a oportunidade de uma experiência no exterior, conhecendo lugares,
        pessoas e costumes que vão contribuir para o seu crescimento pessoal, podendo turbinar a
        sua carreira também.`}
        subtitle ={`O que é preciso para realizar o intercâmbio profissional?`}
        firstTip ={`1 - Requisitos básicos`}
        firstTipImg ={imgProfissionalRequisito}
        firstTipDescription ={`Escolher o tipo de intercâmbio profissional é uma atividade laboral, você precisa pensar
        melhor nessa dinâmica para que ela aconteça. Decidir isso depois de chegar ao destino não é
        uma boa ideia.`}
        secondTip={`2 - Avaliar as oportunidades`}
        secondTipImg ={imgProfissionalOportunidades}
        secondTipDescription ={`Buscar uma agência ou empresas focadas em intercâmbios profissionais para analisar
        quais são as possibilidades disponíveis. Essas organizações geralmente já têm contatos no
        exterior para mandar os brasileiros que pretendem trabalhar fora.
        `}
        thirdTip ={`3 - Pesquisar sobre o destino`}
        thirdTipImg ={imgProfissionalPesquisa}
        thirdTipDescription ={`Todo lugar tem o seu encanto, mas alinhar as suas expectativas é muito importante para evitar
        frustações, todos os detalhes são relevantes, desde o clima predominante até o valor da
        moeda local. Pense no idioma, na infraestrutura da cidade, nas diferenças de cultura, nas
        alternativas de moradia, entre outros.
        `}/> 
        
       
    )
}
