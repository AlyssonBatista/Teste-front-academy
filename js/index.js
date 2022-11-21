const langEl = document.querySelector('.idioma');
		const link = document.querySelectorAll('a');
		const titleEl1 = document.querySelector('.title');
		const descrEl1 = document.querySelector('.description');
    const titleEl2 = document.querySelector('.title2');
		const descrEl2= document.querySelector('.description2');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');



				titleEl1.textContent = data[attr].title;
				descrEl1.textContent = data[attr].description;
        titleEl2.textContent = data[attr].title2;
				descrEl2.textContent = data[attr].description2;

			});
		});

var data = {
  "portugues": 
  {
    "title": "Iniciativa do Instituto Vertere",
    "description": 
      "Somos uma olimpíada afiliada da Sapientia, a Olimpíada do Futuro. A Sapientia é uma iniciativa realizada pelo Instituto Vertere e tem como base a Agenda 2030 da Organização das Nações Unidas – ONU. A competição aborda as disciplinas estudadas em sala de aula a partir de uma perspectiva conectada às questões do nosso tempo e enriquecida pela visão de pensadores do século 21."
  },
  "espanhol": 
  {
    "title": "Iniciativa hacer Instituto Vertere",
    "description": 
      "Somos una filial de Olimpiadas de Sapientia, las Olimpiadas del Futuro. Sapientia es una iniciativa del Instituto Vertere y se basa en la Agenda 2030 de la Organización de las Naciones Unidas – ONU. El concurso aborda los temas tratados en el aula desde una perspectiva conectada con los problemas de nuestro tiempo y enriquecida por la visión de los pensadores del siglo XXI."
  },

  "portugues2": 
  {
    "title2": "Cronograma",
    "description2": 
      "Uma olimpíada para alunos e professores da região das fronteiras entre Argentina, Brasil e Paraguai que querem colocar suas ideias sobre desenvolvimento sustentável em prática!"
  },
  "espanhol2": 
  {
    "title2": "línea de tiempo",
    "description2": 
      "¡Una Olimpiada para estudiantes y docentes de la región fronteriza entre Argentina, Brasil y Paraguay que quieran poner en práctica sus ideas sobre el desarrollo sostenible!"
  },

}