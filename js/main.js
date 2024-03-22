
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