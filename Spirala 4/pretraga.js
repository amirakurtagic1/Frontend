//globalna varijabla koja cuva sve predmete i popunjava se pri loadanju stranice
predmeti = null;

//funkcija koja pretrazuje predmete po imenu nastavnika
function pretragaNastavnik(searchParam) {
   //case sensitive - toLowerCase string pretvara u mala slova
   searchParam = searchParam.toLowerCase();

   //ako je searchParam prazan string, svi predmeti trebaju biti prikazani
   if (searchParam == "") {
      this.predmeti.forEach(element => {
         element.hidden = false;
      });

      return;
   }

   //svaki predmet je sastavljen iz redova,
   //jedan red ima svoje ćelije,
   //svaka ćelija ima svoj inner text atribut,
   //a od toga koja je ćelija ovisi po čemu se filtrira
   //npr. ćelija [0] je naziv predmeta,
   //ćelija [2] je naziv nastavnika
   for (i = 0; i < this.predmeti.length; i++) {
      let el = this.predmeti[i];
      let cell = el.cells;
      let nastavnik = cell[2].innerText.toLowerCase();
      el.hidden = false;
      //string.includes(param: string) vraća true ako string koji se pretražuje sadrži
      //string koji je proslijeđen kao parametar
      if (!nastavnik.includes(searchParam)) {
         el.hidden = true;
      }
   }
}

//funkcija koja pretražuje predmete po nazivu predmeta
function pretragaPredmet(searchParam) {
   searchParam = searchParam.toLowerCase();
   if (searchParam == "") {
      this.predmeti.forEach(element => {
         element.hidden = false;
      });

      return;
   }

   for (i = 0; i < this.predmeti.length; i++) {
      let el = this.predmeti[i];
      let cell = el.cells;
      let predmet = cell[0].innerText.toLowerCase();
      let opis = cell[1].innerText.toLowerCase();
      el.hidden = false;
      if (predmet.includes(searchParam) || opis.includes(searchParam)) {
         el.hidden = false;
      }
      else {
         el.hidden = true;
      }
   }
}

//funkcija koja pretražuje predmete po godini na kojoj su
function pretragaGodina(searchParam) {
   if (!((searchParam == '1') || (searchParam == '2'))) {
      this.predmeti.forEach(element => {
         element.hidden = false;
      });

      return;
   }

   for (i = 0; i < this.predmeti.length; i++) {
      let el = this.predmeti[i];
      let cell = el.cells;
      let godina = cell[3].innerText.toLowerCase();
      el.hidden = false;
      if (godina.includes(searchParam)) {
         el.hidden = false;
      }
      else {
         el.hidden = true;
      }
   }
}

//funkcija koja popunjava globalnu varijablu pri loadanju stranice
function postaviElemente(elementi) {
   this.predmeti = elementi;
}

