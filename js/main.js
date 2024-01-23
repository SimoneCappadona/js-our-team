// Array contenente i membri del team
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg",
  },
];

// Stampa in console le info del team
for (let i = 0; i < team.length; i++) {
  for (let teamEl in team[i]) {
    console.log(teamEl + " : " + team[i][teamEl]);
  }
  console.log("");
}
// Stampa in pagina le info del team
const container = document.getElementById("container");
for (let i = 0; i < team.length; i++) {
  // ContainerCard <div>
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");
  // card <div>
  const card = document.createElement("div");
  card.classList.add("card");
  cardContainer.appendChild(card);
  // Img
  const image = document.createElement("img");
  image.src = team[i].image;
  card.appendChild(image);
  // Name Team
  const name = document.createElement("div");
  name.classList.add("name");
  name.textContent = team[i].nabe;
  card.appendChild(name);
  // Role Team
  const role = document.createElement("div");
  role.classList.add("role");
  role.textContent = team[i].role;
  card.appendChild(role);
  // Append to CardContainer
  container.appendChild(cardContainer);
}
