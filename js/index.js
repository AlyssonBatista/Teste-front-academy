const langEl = document.querySelector('.idioma','.lista');
const link = document.querySelectorAll('a','strong');


const titleEl = document.querySelector('.titulo');
const descrEl = document.querySelector('.descricao');
const li1 = document.querySelector('.li1');
const li2 = document.querySelector('.li2');
const li3 = document.querySelector('.li3');
const li4 = document.querySelector('.li4');

const titleE2 = document.querySelector('.titulo2');
const descrE2 = document.querySelector('.descricao2');

const titleE3 = document.querySelector('.titulo3');
const descrE3 = document.querySelector('.descricao3');
const bota = document.querySelector('.botaoInscricao');
const regula = document.querySelector('.regulamento');

const titleE4 = document.querySelector('.titulo4');
const bota2 = document.querySelector('.botaoInscricao2');

const realiza = document.querySelector('.footerRea');
const apoio = document.querySelector('.footerApo');


link.forEach(el => {
  el.addEventListener("click", () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    titleEl.textContent = data[attr].titulo;
    descrEl.textContent = data[attr].descricao;
    li1.textContent =data[attr].li1;
    li2.textContent =data[attr].li2;
    li3.textContent =data[attr].li3;
    li4.textContent =data[attr].li4;

    titleE2.textContent = data[attr].titulo2;
    descrE2.textContent = data[attr].descricao2;

    titleE3.textContent = data[attr].titulo3;
    descrE3.textContent = data[attr].descricao3;
    bota.textContent = data[attr].botaoInscricao;
    regula.textContent = data[attr].regulamento;

    titleE4.textContent = data[attr].titulo4;
    bota2.textContent = data[attr].botaoInscricao2;

    realiza.textContent = data[attr].footerRea;
    apoio.textContent = data[attr].footerApo;




  });
});

var data = {
  "portugues":
  {
    "titulo": "Cronograma",
    "descricao":
      " Uma olimpíada para alunos e professores da região das fronteiras entre Argentina, Brasil e Paraguai que querem colocar suas ideias sobre desenvolvimento sustentável em prática!",
    "li1": "Inscrições: até 26 de novembro",
    "li2": "Entrega dos projeteis: 25 e 26 de novembro",
    "li3": "Divulgação dos finalistas: 28 de novembro",
    "li4": "Apresentação final: 2 de dezembro",

    "titulo2": "Iniciativa do Instituto Vertere",
    "descricao2": "Somos uma olimpíada afiliada da Sapientia, a Olimpíada do Futuro. A Sapientia é uma iniciativa realizada pelo Instituto Vertere e tem como base a Agenda 2030 da Organização das Nações Unidas – ONU. A competição aborda as disciplinas estudadas em sala de aula a partir de uma perspectiva conectada às questões do nosso tempo e enriquecida pela visão de pensadores do século 21.",

    "titulo3": "Intercâmbio de aprendizados",
    "descricao3": "Chegamos à Tríplice Fronteira para celebrar a expansão das olimpíadas do Instituto Vertere para os países de língua espanhola da América do Sul!",
    "botaoInscricao": "Inscrições abertas até 24 de novembro",
    "regulamento": "Acesse o regulamento",
    
    "titulo4": "Inscreva-se gratuitamente",
    "botaoInscricao2": "QUERO ME INSCREVER",
    
    
    "footerRea": "Realização:",
    "footerApo": "Apoio:",

  },
  "espanhol":
  {
    "titulo": "línea de tiempo",
    "descricao":
      "¡Una Olimpiada para estudiantes y docentes de la región fronteriza entre Argentina, Brasil y Paraguay que quieran poner en práctica sus ideas sobre el desarrollo sostenible!",
    "li1": "Inscripción: hasta el 26 de noviembre",
    "li2": "Entrega de proyectiles: 25 y 26 de noviembre",
    "li3": "Divulgación de finalistas: 28 de noviembre",
    "li4": "Presentación final: 2 de diciembre",

    "titulo2": "Iniciativa del Instituto Vertere",
    "descricao2": "Somos una filial de Olimpiadas de Sapientia, las Olimpiadas del Futuro. Sapientia es una iniciativa del Instituto Vertere y se basa en la Agenda 2030 de la Organización de las Naciones Unidas – ONU. El concurso aborda los temas tratados en el aula desde una perspectiva conectada con los problemas de nuestro tiempo y enriquecida por la visión de los pensadores del siglo XXI.",

    "titulo3": "intercambio de aprendizaje",
    "descricao3": "¡Llegamos a la Triple Frontera para celebrar la expansión del Instituto Vertere Olympics a los países de habla hispana de América del Sur!",
    "botaoInscricao": "Inscripciones abiertas hasta el 24 de noviembre",
    "regulamento": "Accede al reglamento",

    "titulo4": "Registrate gratis",
    "botaoInscricao2": "QUIERO SUSCRIBIRME",

    "footerRea": "Realización:",
    "footerApo": "Apoyo:",
   
  },
   
}