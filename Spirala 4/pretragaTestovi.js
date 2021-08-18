let assert = chai.assert;

//početno loadanje predmeta
window.onload = function () {
   let domElements = document.querySelectorAll("tr.predmet");
   this.postaviElemente(domElements)
}

//test koji ispituje da li se prikazuju svi predmeti za prazan string kao searchParam
describe('pretragaPredmet()', function () {
   it('Treba prikazati sve predmete jer je unesen prazan string.', function () {
      //poziv funkcije
      pretragaPredmet("");

      let tabela = document.getElementsByTagName("table");
      let redovi = tabela[0].rows;

      //redovi.length je uvijek 22, a ispituje se koliko redova ima atribut hidden setovan na true jer su ti redovi onda sakriveni
      //predmeta na stranici godine.html ima ukupno 18, a dodatna četiri reda su naslovi za godinu "Prva godina", "Druga godina" i za headere "Naziv predmeta", "Opis" i "Profesor"
      //zato je uvijek kao rezultat testa dato 4 + brojPrikazanihPredmeta
      assert.equal(redovi.length, 22, "Broj redova treba biti 22 za prazan string kao input.");
   })
})

//test koji ispituje da li se prikazuje prazna lista predmeta ako je uneseno ime nastavnika koje ne postoji
describe('pretragaNastavnik()', function () {
   it('Ne treba prikazati nijedan predmet jer je unesen nastavnik koji ne postoji na listi.', function () {
      //poziv funkcije
      pretragaNastavnik("amira");

      let tabela = document.getElementsByTagName("table");
      let redovi = tabela[0].rows;
      let sakriveni = 0;
      for (i = 0; i < redovi.length; i++) {
         if (redovi[i].hidden == true) sakriveni++;
      }

      //redovi.length je uvijek 22, a ispituje se koliko redova ima atribut hidden setovan na true jer su ti redovi onda sakriveni
      //predmeta na stranici godine.html ima ukupno 18, a dodatna četiri reda su naslovi za godinu "Prva godina", "Druga godina" i za headere "Naziv predmeta", "Opis" i "Profesor"
      //zato je uvijek kao rezultat testa dato 4 + brojPrikazanihPredmeta
      assert.equal(redovi.length - sakriveni, 4, "Broj redova treba biti 4 jer nema nijedan predmet prikazan za uneseno ime nastavnika.")
   })
})

//test koji ispituje da li se pretrazuju predmeti po punom imenu i prezimenu nastavnika
describe('pretragaNastavnik()', function () {
   it('Trebaju se prikazivati samo predmeti nastavnika čije puno ime i prezime je uneseno.', function () {
      //poziv funkcije
      pretragaNastavnik("vedran ljubović");

      let tabela = document.getElementsByTagName("table");
      let redovi = tabela[0].rows;

      let sakriveni = 0;
      for (i = 0; i < redovi.length; i++) {
         if (redovi[i].hidden == true) sakriveni++;
      }

      //redovi.length je uvijek 22, a ispituje se koliko redova ima atribut hidden setovan na true jer su ti redovi onda sakriveni
      //predmeta na stranici godine.html ima ukupno 18, a dodatna četiri reda su naslovi za godinu "Prva godina", "Druga godina" i za headere "Naziv predmeta", "Opis" i "Profesor"
      //zato je uvijek kao rezultat testa dato 4 + brojPrikazanihPredmeta
      assert.equal(redovi.length - sakriveni, 5, "Broj redova treba biti 5, postoji jedan predmet za ime nastavnika Vedran Ljubović");
   })
})

//test koji ispituje pretragu predmeta po godini 2
describe('pretragaGodina()', function () {
   it('Trebaju biti sakriveni svi predmeti koji nisu na drugoj godini kada se pozove funkcija pretragaGodina(2).', function () {
      //poziv funkcije
      pretragaGodina(2);

      let tabela = document.getElementsByTagName("table");
      let redovi = tabela[0].rows;

      let sakriveni = 0;
      for (i = 0; i < redovi.length; i++) {
         if (redovi[i].hidden == true) sakriveni++;
      }

      //redovi.length je uvijek 22, a ispituje se koliko redova ima atribut hidden setovan na true jer su ti redovi onda sakriveni
      //predmeta na stranici godine.html ima ukupno 18, a dodatna četiri reda su naslovi za godinu "Prva godina", "Druga godina" i za headere "Naziv predmeta", "Opis" i "Profesor"
      //zato je uvijek kao rezultat testa dato 4 + brojPrikazanihPredmeta
      assert.equal(redovi.length - sakriveni, 12, "Broj redova treba biti 12 za poziv funkcije pretragaGodina(2).")
   })
})

//test koji ispituje da li su prikazani svi predmeti ako se funkciji pretragaGodina() proslijedi bilo sta drugo osim 1 ili 2
describe('pretragaGodina()', function () {
   it('Trebaju biti prikazani svi predmeti za poziv funkcije pretragaGodina(5).', function () {
      //poziv funkcije
      pretragaGodina(5);

      let tabela = document.getElementsByTagName("table");
      let redovi = tabela[0].rows;

      let sakriveni = 0;
      for (i = 0; i < redovi.length; i++) {
         if (redovi[i].hidden == true) sakriveni++;
      }

      //redovi.length je uvijek 22, a ispituje se koliko redova ima atribut hidden setovan na true jer su ti redovi onda sakriveni
      //predmeta na stranici godine.html ima ukupno 18, a dodatna četiri reda su naslovi za godinu "Prva godina", "Druga godina" i za headere "Naziv predmeta", "Opis" i "Profesor"
      //zato je uvijek kao rezultat testa dato 4 + brojPrikazanihPredmeta
      assert.equal(sakriveni, 0, 'Broj sakrivenih redova je nula za poziv funkcije pretragaGodina(5).');
   })
})

//test koji ispituje da li se pretrazuju predmeti po nazivu predmeta, a po parcijalnom stringu kao searchParam
describe('pretragaPredmet()', function () {
   it('Trebaju biti prikazana tri predmeta za poziv funkcije pretragaPredmet("mat")', function () {
      //poziv funkcije
      pretragaPredmet("mat");

      let tabela = document.getElementsByTagName("table");
      let redovi = tabela[0].rows;

      let sakriveni = 0;
      for (i = 0; i < redovi.length; i++) {
         if (redovi[i].hidden == true) sakriveni++;
      }

      //redovi.length je uvijek 22, a ispituje se koliko redova ima atribut hidden setovan na true jer su ti redovi onda sakriveni
      //predmeta na stranici godine.html ima ukupno 18, a dodatna četiri reda su naslovi za godinu "Prva godina", "Druga godina" i za headere "Naziv predmeta", "Opis" i "Profesor"
      //zato je uvijek kao rezultat testa dato 4 + brojPrikazanihPredmeta
      assert.equal(redovi.length - sakriveni, 7, 'Broj sakrivenih treba biti 15, postoje tri predmeta za poziv funkcije pretragaPredmet("mat").')
   })
})

//test koji ispituje da li se pretrazuju predmeti po imenu nastavnika, a po parcijalnom stringu kao searchParam
describe('pretragaNastavnik()', function () {
   it('Trebaju biti prikazana dva predmeta za poziv funkcije pretragaNastavnik("ve")', function () {
      //poziv funkcije
      pretragaNastavnik("ve");

      let tabela = document.getElementsByTagName("table");
      let redovi = tabela[0].rows;

      let sakriveni = 0;
      for (i = 0; i < redovi.length; i++) {
         if (redovi[i].hidden == true) sakriveni++;
      }

      //redovi.length je uvijek 22, a ispituje se koliko redova ima atribut hidden setovan na true jer su ti redovi onda sakriveni
      //predmeta na stranici godine.html ima ukupno 18, a dodatna četiri reda su naslovi za godinu "Prva godina", "Druga godina" i za headere "Naziv predmeta", "Opis" i "Profesor"
      //zato je uvijek kao rezultat testa dato 4 + brojPrikazanihPredmeta
      assert.equal(redovi.length - sakriveni, 6, 'Broj predmeta koji se prikazuju je dva za poziv funkcije pretragaNastavnik("ve").')
   })
})

//test koji ispituje da li se vrate svi predmeti koji nemaju uneseno ime nastavnika
describe('pretragaNastavnik()', function () {
   it('Trebaju biti prikazani svi predmeti koji nemaju uneseno ime nastavnika (tj. "-" je umjesto imena), takvih ima 9.', function () {
      //poziv funkcije
      pretragaNastavnik("-");

      let tabela = document.getElementsByTagName("table");
      let redovi = tabela[0].rows;

      let sakriveni = 0;
      for (i = 0; i < redovi.length; i++) {
         if (redovi[i].hidden == true) sakriveni++;
      }

      //redovi.length je uvijek 22, a ispituje se koliko redova ima atribut hidden setovan na true jer su ti redovi onda sakriveni
      //predmeta na stranici godine.html ima ukupno 18, a dodatna četiri reda su naslovi za godinu "Prva godina", "Druga godina" i za headere "Naziv predmeta", "Opis" i "Profesor"
      //zato je uvijek kao rezultat testa dato 4 + brojPrikazanihPredmeta
      assert.equal(redovi.length - sakriveni, 13, 'Broj predmeta koji nemaju uneseno ime nastavnika, tj. unesen je znak "-" umjesto imena je devet za poziv funkcije pretragaNastavnik("-").')
   })
})