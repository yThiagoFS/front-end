import PostKairos from "./PostKairos.jsx"
import imgHighSchool from "../img/highschool.jpg"
import highSchoolRequisito from "../img/highschool-requisitos.png"
import highSchoolVontade from "../img/highSchool-vontade.jpg"
import highSchoolDisciplina from "../img/highSchool-disciplina.jpg"

export default function PostKairosHighSchool(){

    return(
        <PostKairos title ={`Intercâmbio High School`}
        imgPost  ={imgHighSchool}
        description ={`O intercâmbio High School é um programa de experiência internacional no qual o jovem
        estudante cursa parte do ensino médio no exterior, vivendo como um local e tornando-se um
        cidadão do mundo.
        Em vez de aprender apenas uma língua, como nos intercâmbios de cursos de idiomas, o
        estudante aprende matemática, história, geografia, ciências, enfim, todas as disciplinas que
        cursamos durante o ensino médio, e, o principal, uma escola nova, podendo escolher também
        as suas matérias eletivas, como música, culinária, teatro, esportes, antes, entre outras.`}
        subtitle ={`O que é preciso para realizar o intercâmbio Graduação?
        `}
        firstTip ={`1 - Requisitos básicos`}
        firstTipImg ={highSchoolRequisito}
        firstTipDescription ={`O intercâmbio High School pode ser feito por jovens de tenham entre 15 e 18 anos e meio até
        a data do embarque. Também é necessário estar cursando o Ensino Médio no Brasil ou ter acabado de se formar.`}
        secondTip={`2 - Vontade`}
        secondTipImg ={highSchoolVontade}
        secondTipDescription ={`Além das regras exigidas por cada país, o intercambista precisa querer viver essa aventura, ou
        seja, é necessário embarcar com um espírito positivo, ser flexível, ter muita disposição e principalmente vontade de aprender.`}
        thirdTip ={`3 - Disciplina`}
        thirdTipImg ={highSchoolDisciplina}
        thirdTipDescription ={`As matérias a serem escolhidas são divididas em cinco áreas e é necessário cursar pelo menos
        uma de cada área, sendo elas: ciências biológicas, práticas educativas, ciências exatas, estudos sociais e comunicação e expressão.`}/> 
        
    )
}
