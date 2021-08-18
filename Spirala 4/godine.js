var script = document.createElement("script");
script.src = './pretraga.js';
document.head.appendChild(script);

window.onload = function () {
   let domElements = document.querySelectorAll("tr.predmet");
   this.postaviElemente(domElements)
}

//dohvaćanje html elementa za input pretrage po nazivu predmeta
const searchParamPredmet = document.getElementById("predmetSearchParam");

//dohvaćanje html elementa za input pretrage po imenu nastavnika
const searchParamNastavnik = document.getElementById("nastavnikSearchParam");

//dohvaćanje html elementa za input pretrage po godini
const searchParamGodina = document.getElementById("godinaSearchParam");

//funkcija koja se poziva na promjenu inputa u polju "Pretraži po predmetu.."
function pretraziPoPredmetu() {
   //gleda se 'change' event u input elementu
   searchParamPredmet.addEventListener('change', (event) => {
      //poziv funkcije iz modula Pretraga
      pretragaPredmet(searchParamPredmet.value);
   })
}

//funkcija koja se poziva na promjenu inputa u polju "Pretraži po nastavniku.."
function pretraziPoNastavniku() {
   //gleda se 'change' event u input elementu
   searchParamNastavnik.addEventListener('change', (event) => {
      //poziv funkcije iz modula Pretraga
      pretragaNastavnik(searchParamNastavnik.value);
   })
}

//funkcija koja se poziva na promjenu inputa u polju "Pretraži po godini.."
function pretraziPoGodini() {
   //gleda se 'change' event u input elementu
   searchParamGodina.addEventListener('change', (event) => {
      //poziv funkcije iz modula Pretraga
      pretragaGodina(searchParamGodina.value);
   })
}