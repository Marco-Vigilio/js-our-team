/****
 * 
 * 
 * *Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
 * *Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

* * MILESTONE 0:
* * Creare l’array di oggetti con le informazioni fornite.

* * MILESTONE 1:
* * Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

* * MILESTONE 2:
* *Stampare le stesse informazioni su DOM sottoforma di stringhe

* *BONUS 1:
* *Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:

Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
:githubparrot: :githubparrot: :githubparrot: Buon lavoro! :githubparrot: :githubparrot: :githubparrot:
 * 
 * 
 */


let team = [
    {
        name: "Wayne Barnett",
        role: "ounder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    },
];

//console.log(team);

//VISUALIZZATO IN CONSOLE
for (let index = 0; index < team.length; index++) {
    console.log(team[index].name , team[index].role, team[index].photo);
    
}

//VISUALIZZATO IN PAGINA
/*
let table = document.querySelector("tbody");

for (let i = 0; i < team.length; i++) {
    const tr  = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.append(team[i].name);

    const tdRole = document.createElement("td");
    tdRole.append(team[i].role);


    const tdPhoto = document.createElement("td");
    const picture = team[i].photo;
    const img = document.createElement("img");
    img.src = `img-our-team/img/${picture}`;
    tdPhoto.append(img);

    tr.append(tdName);
    tr.append(tdRole);
    tr.append(tdPhoto);

    table.append(tr);
}
*/

//INSERISCO UN'ALTRO UTENTE AL MIO TEAM

/*
let nome = prompt("Insert your name");
let ruolo = prompt("Insert your role");
let foto = prompt("Insert your link photo");
team.push(Person(nome, ruolo, foto));

console.log(team);

function Person(UserName, UserRole, UserPhoto){
    let person;
    person = {
        name: UserName,
        role: UserRole,
        photo: UserPhoto
    }
    return person;
}
*/


let boxItems = document.querySelector("div.items");


let divItem;
let nameSpan;
let roleSpan;
let picture;
let img;

for (let index = 0; index < 2; index++) {
    let divRow = document.createElement("div");
    divRow.classList.add("row" ,"flex", "flex-space-bet");
    
    for (let index = 0; index < team.length; index++) {

        divItem = document.createElement("div");
        divItem.classList.add("item");
    
        img = document.createElement("img");
    
        nameSpan = document.createElement("span");
        nameSpan.classList.add("name");
        roleSpan = document.createElement("span");
    
        nameSpan.append(team[index].name);
        roleSpan.append(team[index].role);
    
        picture = team[index].photo;
        img.src = `img-our-team/img/${picture}`
    
        boxItems.append(divRow);
        divRow.append(divItem);
        divItem.append(img);
        divItem.append(nameSpan);
        divItem.append(roleSpan);
    }
}

