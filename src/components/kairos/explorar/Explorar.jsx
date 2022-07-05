
import React, { useState } from "react";
import "./Explorar.css"

import logoKairosBranco from "./imgExplorar/kairos-explorar-logo.png";
import logoKairosAzul from "./imgExplorar/kairos-logo.png";

import img1 from "./imgExplorar/img1.png"
import img2 from "./imgExplorar/img2.png"
import img3 from "./imgExplorar/img3.png"
import img4 from "./imgExplorar/img4.png"


import irelandFlag from "./imgExplorar/irlanda-flag.png"
import euaFlag from "./imgExplorar/eua-flag.png"
import canadaFlag from "./imgExplorar/canada-flag.png"
import australiaFlag from "./imgExplorar/australia-flag.png"
import englandFlag from "./imgExplorar/england-flag.png"
import nzFlag from "./imgExplorar/nz-flag.png"
import portugalFlag from "./imgExplorar/portugal-flag.png"


import canadaImg from "./imgExplorar/canada-img.jpg"
import irelandImg from "./imgExplorar/irlanda-img.jpg"
import euaImg from "./imgExplorar/eua-img.jpg"
import australiaImg from "./imgExplorar/australia-img.jpg"
import portugalImg from "./imgExplorar/portugal-img.jpg"
import nzImg from "./imgExplorar/nz-img.jpg"
import englandImg from "./imgExplorar/londres-img.jpg"






function Explorar (){

    const [logoKairos, setLogoKairos] = useState({
        logoKairosImg: logoKairosBranco
    })
    
    const [showContent, setShowContent] = useState(false, [{
        countryTitle:'Canadá'
    }]);


    function openModalCountries(){
        const modalCountry = document.querySelector('.countries__modal')

        if(modalCountry.classList.contains('is-active')){
            modalCountry.classList.remove('is-active')
        } else{
            modalCountry.classList.add('is-active')
        }
    }

    function handleContent(e){
        setShowContent(!showContent)
    }

    const [content, setContent] = useState({
        countryFlag:'',
        countryImg:'',
        nomePais: '',
        temperatura: '',
        idiomas: '',
        moeda: '',
        cidade1:'',
        cidade2:'',
        cidade3:'',
        cidade4:'',
        cidade5:'',
        cidade6:'',
        cidade7:'',
        cidade8:'',
        costume1:'',
        costume2:'',
        costume3:'',
        costume4:'',
        costume5:'',
        informacoesAdicionais:'',
    })

    function openModal(){
        const explorarContent = document.querySelector('.explorar__content')
                if(explorarContent.classList.contains('is-active')){
                    explorarContent.classList.remove('is-active')
                    setLogoKairos({logoKairosImg: logoKairosBranco})
                    document.body.style.overflowY = 'scroll';
                } else {
                    explorarContent.classList.add('is-active')
                    setLogoKairos({logoKairosImg: logoKairosAzul})
                    document.body.style.overflowY = 'hidden';
                }
        }
    
    function irlanda(){
        openModal()
        setContent({
        countryFlag:irelandFlag,
        countryImg:irelandImg,
        nomePais: 'Irlanda',
        temperatura: '8°C a 20°C',
        idiomas: 'Lingua Irlandesa e Inglês',
        moeda: 'Euro',
        cidade1:'Galway',
        cidade2:'Cork',
        cidade3:'Limerick',
        cidade4:'Bray',
        cidade5:'Kilkenny',
        cidade6:'Dublin',
        cidade7:'Ennis',
        cidade8:'Sligo',
        costume1:'O café da manhã é praticamente um almoço.',
        costume2:'Máquina de lavar roupas na cozinha.',
        costume3:'Todo dia é dia de beber na Irlanda.',
        costume4:'Dizem "thank you" por tudo e para todos.',
        costume5:'Banho diário não é costume na Irlanda.',
        informacoesAdicionais:'A capital da Irlanda é Dublin, uma cidade com aproximadamente 1 milhão de habitantes. O idioma oficial do país é o gaélico irlandês e inglês. A Irlanda não tem uma religião oficial, mas a grande maioria da população é católica. O governo irlandês atua em uma democracia parlamentar e o país todo conta com cerca de 5 milhões de habitantes. As informações não param por aí Por ser parte da União Europeia, a moeda utilizada na Irlanda é o euro.Em relação ao clima, é importante estar preparado para sentir as quatro estações do ano em apenas um dia. Parece mentira, mas na Irlanda isso realmente acontece. Porém, durante o ano todo é muito frio e, sim, chove bastante. As temperaturas dificilmente ultrapassam os 20 graus. Mas nada que uma capa de chuva e um casaco reforçado não resolvam, viu?',
        })
    }

    function eua(){
        openModal()
        setContent({
            countryFlag:euaFlag,
            countryImg:euaImg,
            nomePais: 'Estados Unidos da América',
            temperatura: '-13°C a 25,7°C',
            idiomas: 'Inglês e Espanhol',
            moeda: 'Dólar',
            cidade1:'Nova Iorque',
            cidade2:'Miami',
            cidade3:'Orlando',
            cidade4:'Los Angeles',
            cidade5:'Las Vegas',
            cidade6:'São Francisco',
            cidade7:'Washington D.C',
            cidade8:'Boston',
            costume1:'Pontualidade e hora marcada.',
            costume2:'Café da manhã calórico.',
            costume3:'Consumismo.',
            costume4:'Gorjetas.',
            costume5:'Todos param para o ônibus escolar.',
            informacoesAdicionais:'Os Estados Unidos têm aproximadamente 5.000 faculdades e universidades. Juntas, elas concedem mais de 2 milhões de diplomas por ano, de acordo com o NCES (Centro Nacional de Estatísticas da Educação). No famoso ranking mundial da Timed Higher Education, os Estados Unidos ocupam 14 das 20 primeiras posições. Na lista de melhores reputações mundiais, as universidades do país estão em 13 lugares do top 20. Os Estados Unidos ainda é a maior potência educacional do mundo.',
            })
        }

    function canada(){
        openModal()
        setContent({
        countryFlag:canadaFlag,
        countryImg:canadaImg,
        nomePais: 'Canadá',
        temperatura: '-30°C a 35°C',
        idiomas: 'Francês e inglês',
        moeda: 'Dólar Canadense',
        cidade1:'Toronto',
        cidade2:'Vancouver',
        cidade3:'Montereal',
        cidade4:'Ottawa',
        cidade5:'Calgary',
        cidade6:'Quebec City',
        cidade7:'Niagara Falls',
        cidade8:'Winnipeg',
        costume1:'Nada de sapatos dentro de casa.',
        costume2:'Acordo subentendido.',
        costume3:'Respeite o espaço pessoal.',
        costume4:'Não pergunte apenas por educação.',
        costume5:'Acostume-se a jantar cedo.',
        informacoesAdicionais:'O Canadá possui um território extenso e é banhado por três oceanos: Atlântico, Pacífico e Glacial Ártico. A população canadense é de cerca de 38 milhões de habitantes. O território canadense é pouco povoado. Esse país possui grandes reservas de recursos naturais diversos, como petróleo, gás natural e madeira.',
        })
    }

    function australia(){
        openModal()
        setContent({
        countryFlag:australiaFlag,
        countryImg:australiaImg,
        nomePais: 'Austrália',
        temperatura: '5ºC a 20ºC',
        idiomas: 'Inglês',
        moeda: 'Dólar Australiano',
        cidade1:'Sydney',
        cidade2:'Melbourne ',
        cidade3:'Adelaide ',
        cidade4:'Perth',
        cidade5:'Gold Coast',
        cidade6:'Brisbane',
        cidade7:'Niagara Falls',
        cidade8:'Winnipeg',
        costume1:'Algumas pessoas andam descalço na rua sem nenhum problema.',
        costume2:'Na Austrália você pode levar a sua própria bebida no restaurante.',
        costume3:'Fique à esquerda tanto na calçada quanto na escada rolante.',
        costume4:'Tudo fecha às 17h.A exceção é na quinta-feira que vai até às 20h..',
        costume5:'Acostume-se a jantar cedo.',
        informacoesAdicionais:'O “Continente-Ilha”, é o maior país da Oceania, ocupando todo o Continente-Ilha e várias ilhas adjacentes. Por ser uma país afastado dos outros fisicamente, a Austrália possui diversas características únicas na flora, na fauna e na cultura, sem contar com os mais de 200 mil aborígenes que vivem ainda hoje na Austrália, em culturas isoladas. Sempre é válido lembrar que a Austrália é isolada territorialmente do resto do mundo, o que faz, com que muita coisa seja vista somente nessa terra, como a flora e a fauna. O país, é quase do tamanho do Brasil em extensão territorial, e como o Brasil, a Austrália merece ser conhecida até seus mínimos detalhes. São muitas belezas oferecidas por todo o país, e atividades que em nenhum outro lugar do mundo seriam iguais. Então já sabe, venha conhecer essa terra de belezas únicas!'
        })
    }

    function england(){
        openModal()
        setContent({
        countryFlag:englandFlag,
        countryImg:englandImg,
        nomePais: 'Inglaterra',
        temperatura: '6°C a 30°C',
        idiomas: 'Inglês',
        moeda: 'Libra estrelinha',
        cidade1:'Londres ',
        cidade2:'Brighton ',
        cidade3:'Cambridge ',
        cidade4:'Liverpool',
        cidade5:'Manchester ',
        cidade6:'Oxford ',
        cidade7:'Bath',
        cidade8:'Cambridge',
        costume1:'Os ingleses são conhecidos por serem muito educados. Então você vai cansar de escutar a palavra “sorry” vinda dos ingleses. ',
        costume2:'Os ingleses amam tudo relacionado a família real. ',
        costume3:'O café da manhã dos ingleses são a refeição mais “forte” deles.',
        costume4:'Os feriados são transferidos para segunda-feira. Assim a semana apenas começa na terça-feira. ',
        costume5:'Os ingleses são conhecidos por dirigirem do lado esquerdo da pista.',
        informacoesAdicionais:`Seja qual for a cidade que você vá, prepare-se para boas surpresas quando for a Inglaterra, pois os costumes ingleses são vistos como os mais educados e são uma referência cultural no mundo todo. A experiência de viver uma temporada na Inglaterra traz, ao intercambista, uma nova forma de ver o mundo, novos hábitos e muito conhecimento multicultural.
        Levando em consideração as dicas sobre os tipos de intercâmbio e as regiões mais cobiçadas da Inglaterra, fica mais fácil escolher qual o programa que mais é adequado ao seu perfil e quais as regiões que podem ser mais atrativas para a sua decisão. Fazer um intercâmbio na Inglaterra é sem sombra de dúvidas uma imersão em uma das culturas mais fascinantes do mundo! Então venha-se planejar conosco.`,
        })
    }

    function nz(){
        openModal()
        setContent({
        countryFlag:nzFlag,
        countryImg:nzImg,
        nomePais: 'Nova Zelândia',
        temperatura: '7C a 23°C',
        idiomas: 'Inglês e Idioma Maori',
        moeda: 'Dólar neozelandês',
        cidade1:'Auckland',
        cidade2:'Queenstown',
        cidade3:'Mt Maunganui',
        cidade4:'Christchurch',
        cidade5:'Wellington',
        cidade6:'Dunedin',
        cidade7:'Tuapo',
        cidade8:'Nelson',
        costume1:'Amor pela natureza.',
        costume2:'Paixão pelo rugby.',
        costume3:'Educação e respeito.',
        costume4:'Receptividade e bom-humor.',
        costume5:'O povo Maori se cumprimenta com um “hongi”.',
        informacoesAdicionais:`A Nova Zelândia é um país de clima temperado com fortes raízes europeias. As pessoas que vão à Nova Zelândia, vão em busca de uma nova forma de ver a vida.
        Com todas as possibilidades que o país oferece, um Intercâmbio na Nova Zelândia é sem dúvida uma das melhores opções para quem pensa em estudar ou trabalhar fora do Brasil por um tempo. 
         
        O alto padrão de qualidade de vida e do ensino neozelandês são atrativos para quem quer fazer o High School na Nova Zelândia.
         
        Se o seu intercâmbio na Nova Zelândia tem como foco aprender inglês, há também uma série de ótimas escolas para estrangeiros, geralmente com uma quantidade menor de brasileiros do que os destinos mais tradicionais, e para quem pensa em ficar por mais tempo por lá também pode participar do programa de Trabalhar e Estudar uma das principais opções de intercâmbio na Nova Zelândia. Então não perca essa oportunidade!`,
        })
    }


    function portugal(){
        openModal()
        setContent({
        countryFlag:portugalFlag,
        countryImg:portugalImg,
        nomePais: 'Portugal',
        temperatura: '5°C a  27°C',
        idiomas: 'Português',
        moeda: 'Euro',
        cidade1:'Lisboa',
        cidade2:'Porto',
        cidade3:'Coimbra',
        cidade4:'Braga',
        cidade5:'Calgary',
        cidade6:'Quebec City',
        cidade7:'Niagara Falls',
        cidade8:'Winnipeg',
        costume1:'Durante o verão os portugueses vão muito a festivais de música. ',
        costume2:'Os portugueses amam fazer duas coisas fumar e tomar café ao mesmo tempo.',
        costume3:'Em Portugal tem-se o hábito de tomar sopa como refeição principal. ',
        costume4:'Os portugueses têm o hábito de tomar vinhos durante as refeições.',
        costume5:'Os portugueses têm o hábito de comer salgados frios. ',
        informacoesAdicionais:'Portugal tem sido cada vez mais buscado por brasileiros e há algumas razões para que isso aconteça. A primeira razão é que os portugueses falam o mesmo idioma que o nosso, a comunicação é muito mais fácil, boa parte das atrações são de graça, o tempo costuma estar agradável durante boa parte do ano, e comidas e vinhos de produção local são deliciosos. O fato de falarmos o mesmo idioma certamente é um grande atrativo para que muitos Brasileiros se interessem em fazer Intercâmbio em Portugal! O maior atrativo é para estudantes que pretendem ingressar em um curso superior no país, já que as universidades e faculdades portuguesas facilitado esse processo.  Portugal possui uma das mais antigas universidades da Europa, a Universidade de Coimbra criada em 1290. Além de ser um dos países mais seguros para se viver no Mundo, Portugal oferece uma vasta opção de universidades públicas, privadas e politécnicas.',
        })
    }

    

    return(
        <>
        <div className="explorar__content" id="explorar">

            <div className="explorar__header">

            <div className="kairosLogo">
                <img src={logoKairos.logoKairosImg}/>
            </div>

            <h1>Explorar</h1>

            </div>

        <div className="img__side">

            <div className="explorar__modal">

                <div className="explorar__modalContent">

                            <div className="headerModal">

                                <div className="wrapper__HeaderTitle">

                                    <h2 className="country__Title">{content.nomePais}</h2>
                                    
                                    <div className="wrapper__countryFlag">
                                        
                                        <img src={content.countryFlag}/>

                                    </div>

                                </div>


                            </div>

                            <div className="mainModal">
                            <div className="first__content">

                                <div className="wrapper__countryImg">
                                    <img src={content.countryImg}/>
                                </div>

                                <ul className="country__informations">
                                    <li>{content.temperatura} <span>Temperatura</span></li>
                                    <li> {content.idiomas} <span>Idioma</span></li>
                                    <li> {content.moeda} <span>Moeda</span></li>
                                    
                                </ul>

                                </div>

                                
                            <div className="principais__cidades">
                                <h2>Principais Cidades</h2>
                                <ul>
                                    <li>{content.cidade1}</li>
                                    <li>{content.cidade2}</li>
                                    <li>{content.cidade3}</li>
                                    <li>{content.cidade4}</li>
                                    <li>{content.cidade5}</li>
                                    <li>{content.cidade6}</li>
                                    <li>{content.cidade7}</li>
                                    <li>{content.cidade8}</li>
                                </ul>
                            </div>

                            <div className="costumes">
                                
                                <h2>Costumes</h2>
                                <ul>
                                    <li>{content.costume1}</li>
                                    <li>{content.costume2}</li>
                                    <li>{content.costume3}</li>
                                    <li>{content.costume4}</li>
                                    <li>{content.costume5}</li>

                                </ul>
                            </div>

                            <div className="aditional__information">
                                <h2>Informações Adicionais</h2>
                                <p>{content.informacoesAdicionais}</p>
                            </div>
                            
                           
                            </div>

                  
                    
                </div>

            </div>

            <div className="img__wrapper">
                <div>
                    <div className="img img1">
                        <img src={img1}/>
                    </div>
                    <div className="img img2">
                        <img src={img2}/>
                    </div>
                </div>

                <div>
                    <div className="img img3">
                        <img src={img3}/>
                    </div><div className="img img4">
                        <img src={img4}/>
                    </div>
                </div>
            </div>
            
        </div>

            <div className="clip-pathBG">

            </div>
        <div className="explorar__contentWrapper">


            <div className="countries__container">
                <div className="countries__wrapper">
                    <a href="#explorar">
                        <div className="country canada" onClick={canada} onMouseOver={handleContent}>
                            <img src={canadaFlag}/>
                        </div>
                    </a>
                    <a href="#explorar">
                        <div className="country irlanda" onClick={irlanda}>
                            <img src={irelandFlag}/>
                        </div>
                    </a>
                    <a href="#explorar">
                        <div className="country eua" onClick={eua}>
                            <img src={euaFlag}/>
                        </div>
                    </a>
                    <a href="#explorar">
                        <div className="country australia" onClick={australia}>
                            <img src={australiaFlag}/>
                        </div>
                    </a>
                    <span>

                    </span>
                </div>

                <div className="wrapper__input">

                    <input type="text" className="search__explorarInput" placeholder="Pesquisar" onClick={openModalCountries}></input>

                    <div className="countries__modal">
                            <a href="#explorar">
                                <div className="country uk" onClick={england}>
                                    <img src={englandFlag}/>
                                </div>
                            </a>
                            <a href="#explorar">
                                <div className="country nz" onClick={nz}>
                                    <img src={nzFlag}/>
                                </div>
                            </a>
                            <a href="#explorar">
                                <div className="country portugal" onClick={portugal}>
                                    <img src={portugalFlag}/>
                                </div>
                            </a>
                    </div>

                </div>
                {/*<div className="country uk" onClick={uk}>
                    <img src={ukFlag}/>
                </div>
                <div className="country nz" onClick={nz}>
                    <img src={nzFlag}/>
                </div>
                <div className="country malta" onClick={malta}>
                    <img src={maltaFlag}/>
                </div>
                <div className="country africaS" onClick={africaS}>
                    <img src={africaSFlag}/>
                </div>
                <div className="country portugal" onClick={portugal}>
                    <img src={portugalFlag}/>
                </div>
                <div className="country argentina" onClick={argentina}>
                    <img src={argentinaFlag}/>
                </div>*/}
            </div>

        </div>

        </div>
       
        </>
    )
}


export default Explorar;