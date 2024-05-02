
// le menu burger //

const btn_ouverture_burger = document.querySelector("#ouverture_menu"); //const sur les ouverture et fermeture//
const btn_fermeture_burger = document.querySelector("#fermeture_menu"); 


btn_ouverture_burger.addEventListener("click", ouvrirMenu); // mise en place de l'évènement au click sur le btn burger//
function ouvrirMenu(){ //évènement //
    //console.log("le btn marche :)");//
    document.querySelector("#menu").setAttribute ("class", "ouvert"); //créer une nouvelle classe sur l'élément sélectionné//
    //document.querySelector("#menu").classList.add("ouvert"); autre façon de faire qui marche aussi//
    document.querySelector (".burger").style.transform = "translateX(100px)" ; //mise en place du transform//
    document.querySelector (".burger").style.transition = "all 2s" ; // application des transition pour le transform//
}

btn_fermeture_burger.addEventListener("click", fermerMenu); // mise en place de l'évènement au click sur le btn burger//
function fermerMenu(){ //évènement //
    document.querySelector("#menu").classList.remove("ouvert"); // au click sur menu remove la classe ouvert//
    document.querySelector (".burger").style.transform = "translateX(0px)" ;
    document.querySelector (".burger").style.transition = "all 2s" ;
}

// fin menu burber //

//début animation page Présentation //

const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".presentation__text--heading span");
const btn = document.querySelector(".presentation__btn");
const btnHeading = document.querySelector(".presentation__btn span");

const colors = ["#64FF57", "#4F4481", "#2368FB", "#FF321A", "#FE86FF", "#04EEFF", "#FFCD01"];

const techs = ["Présentation", "Boutons", "Burger", "Toggle", "Effet JS", "3D", "Contact"];

const url = ["index.html", "boutons.html", "burger.html", "toggle.html", "effetJs.html", "3D.html", "contact.html"]

let current = 1;

const textStyle = () => {
    heading.style.color = colors[current - 1]; // changement couleur et contenue du heading //
    heading.textContent = techs[current - 1];
    btnHeading.textContent = techs[current - 1]; // changement couleur et contenue du heading bouton //
    btnHeading.style.color = colors[current - 1];
    btn.style.backgroundColor = colors[current - 1]; // changement couleur du bouton //
    const btnHref = btn.getAttribute("href");  // changement de l'url du boutons //
    btn.setAttribute("href", url[current -1]);
    // fin du changement //
}

let interval = setInterval(() =>{
    boxes.forEach((box) => {
        if(current > boxes.length) current =1;
        if(box.classList[1].split("-")[1] * 1 === current){ 
            box.classList.add("active"); // ajoute la class active 
        } else{
            box.classList.remove("active"); // retire la class active //
        }
    });
    textStyle(); // appelle de text style //
    current++; // incrémentation //
}, 5000); // interval 5s //

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        boxes.forEach((cube) => {
            cube.classList.remove("active");
        });
        box.classList.add("active");

        current = box.classList[1].split("-") [1] * 1;

        textStyle();

        clearInterval(interval);
    });
});


//bouton copier//

const copyButtonLabel = "Copier Code SCSS";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "Code copier";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}