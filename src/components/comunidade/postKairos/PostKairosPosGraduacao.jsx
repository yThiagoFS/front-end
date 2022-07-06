import PostKairos from "./PostKairos.jsx"
import imgPosGraduacao from "../img/imgPosGraduacao.jpg"
import imgPosGraduacaoEntender from "../img/imgPosGraduacao-entender.jpg"
import imgPosGraduacaoInstituicoes from "../img/imgPosGraduacao-instituicoes.jpg"
import imgPosGraduacaoPesquisa from "../img/imgPosGraduacao-pesquisa.jpg"

export default function PostKairosPosGraduacao(){

    return(
        <PostKairos title ={`Intercâmbio de Pós-graduação`}
        imgPost  ={imgPosGraduacao}
        description ={`A Pós-graduação é um termo genérico que se refere a todos aqueles cursos que exigem que você seja portador de um diploma de graduação, ou em outras palavras você não pode fazer um de pós-graduação sem ter concluído a sua graduação primeiro. 
        Caso você já tenha concluído a graduação no Brasil, isso é ótimo, porque os diplomas expedidos aqui no Brasil são válidos nacionalmente, desde que você tenha feito a sua graduação em uma instituição que seja reconhecida pelo Ministério da Educação. Porém você deve prestar atenção a um detalhe: 
        Nem todos os diplomas expedidos no Brasil são válidos para o exterior, então você deve entrar em contato com a instituição que você deseja estudar no exterior e verificar se o diploma que você possui no Brasil é válido para aquela instituição.   
        `}
        subtitle ={`O que você precisa para fazer Pós-graduação no exterior?`}
        firstTip ={`1 - Entenda o que você deseja para a sua vida profissional e pessoal. `}
        firstTipImg ={imgPosGraduacaoEntender}
        firstTipDescription ={`Antes de tudo questione-se: O que você espera aprender na pós-graduação no exterior? Quais objetivos eu quero atingir na minha carreira? Faça esse tipo de pergunta a si mesmo. `}
        secondTip={`2 -	Pesquise por instituições `}
        secondTipImg ={imgPosGraduacaoInstituicoes}
        secondTipDescription ={`Pesquisar as documentações necessárias para fazer o curso (como passaporte, visto, etc.).`}
        thirdTip ={`3 - Pesquisar
        `}
        thirdTipImg ={imgPosGraduacaoPesquisa}
        thirdTipDescription ={`Fazer buscas sobre possíveis auxílios que vão te ajudar a conseguir essa oportunidade.`}/> 
        
       
    )
}
