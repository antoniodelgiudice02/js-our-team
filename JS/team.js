const nomeText = document.querySelectorAll('nome-text')
const roleText = document.querySelectorAll('role-text')
const image = document.querySelectorAll('image')
const cardContainer = document.getElementById('card-container')

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

function printDom(index) {
  cardContainer.innerHTML += `
  <div class="card">
    <div class="text-center"><span class="nome-text">${team[index].name}</span></div>
    <div class="text-center"><span class="role-text">${team[index].role}</span></div>
    <div class="text-center"><img class="image" src="./img/${team[index].image}" alt=""></div>
  </div>
`
}



for (i = 0; i < team.length; i++) {
  printDom(i);
  console.log(team[i].name)
  console.log(team[i].role)
  console.log(team[i].image)
}


