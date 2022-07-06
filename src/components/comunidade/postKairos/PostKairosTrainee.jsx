import PostKairos from "./PostKairos.jsx"
import imgTrainee from "../img/imgTrainee.png"
import imgTraineeRequisitos from "../img/imgTrainee-requisitos.jpg"
import imgTraineeIdioma from "../img/imgTrainee-idioma.jpg"
import imgTraineeViagem from "../img/imgTrainee-viagem.jpg"


export default function PostKairosTrainee(){

    return(
        <PostKairos title ={"Intercâmbio Trainee"}
        imgPost  ={intercambioAuPair}
        description ={"O intercâmbio do tipo Trainee visa dar mais experiência ao universitário na vida profissional, seja ela ligada diretamente a sua área de estudo ou não. T fluência em outra língua e vivência no exterior são cada vez mais exigidos dos profissiona recém-formados. Você vai ter a oportunidade de aperfeiçoar o seu inglês enquanto desenvol várias habilidades profissionais no dia a dia de uma empresa internacional, além  fazer contato com pessoas do mundo todo e conhecer uma nova cultura. Você ganhará u bagagem que vai ser um grande diferencial no momento de ingressar no mercado de trabalho. "}
        subtitle ={"O que é preciso para realizar o intercâmbio Trainee?"}
        firstTip ={"1 - Requisitos básicos"}
        firstTipImg ={imgTraineeRequisitos}
        firstTipDescription ={"Ter mais que 18 anos e ser estudante de graduação, pós-graduação ou ser recém-formado há até 12 meses (não podendo embarcar após 12 meses da conclusão do curso)."}
        secondTip={"2 - Proficiência no idioma"}
        secondTipImg ={imgTraineeIdioma }
        secondTipDescription ={"O conhecimento de inglês avançado é essencial. A entrevista por telefone com a Organização e/ou empregador também pode ser necessária."}
        thirdTip ={"3 - Viagem"}
        thirdTipImg ={imgTraineeViagem}
        thirdTipDescription ={`Apresentar referências não familiares, exame médico, cópia de documento pessoais e
        atestado de antecedentes criminais, com um passaporte válido e visto de permanência`}/> 
        
       
    )
}
