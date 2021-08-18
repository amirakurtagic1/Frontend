
imageWidth = "";
imageHeight = "";
buttonPrvaGodina = false;
buttonDrugaGodina = false;

function uvecajSliku(id) {
   this.imageWidth = document.getElementById("slikaZaUvecat" + id).width;
   this.imageHeight = document.getElementById("slikaZaUvecat" + id).height;

   let width = document.getElementById("widthAndHeight" + id).offsetWidth;
   let height = document.getElementById("widthAndHeight" + id).offsetHeight;

   document.getElementById("slikaZaUvecat" + id).width = width.toString();
   document.getElementById("slikaZaUvecat" + id).height = height.toString();
   document.getElementById("slikaZaUvecat" + id).style.marginTop = "150px";
   document.getElementById("slikaZaUvecat" + id).style.marginLeft = "-1px";
   document.getElementById("slikaZaUvecat" + id).style.zIndex = "100px";
}

function normalnaSlika(id) {
   document.getElementById("slikaZaUvecat" + id).width = imageWidth;
   document.getElementById("slikaZaUvecat" + id).height = imageHeight;
   document.getElementById("slikaZaUvecat" + id).style.margin = "0 auto";
   document.getElementById("slikaZaUvecat" + id).style.marginTop = "0";
}

function sortAlphabetically() {
   $('.parent').sort(function (a, b) {
      if (a.textContent < b.textContent) {
         return -1;
      } else {
         return 1;
      }
   }).appendTo('article')

}

function oznaciRed(ime) {
   let rows = document.getElementById('table2').getElementsByTagName("tbody")[0].getElementsByTagName("tr");
   for (i = 0; i < rows.length; ++i) {
      row = rows[i].getElementsByTagName('td');
      for (j = 0; j < row.length; j++) {
         if (row[i].id != undefined && row[i].id === ime) {
            console.log(rows[i])
            rows[i].style.background = "yellow";
         }

      }
   }
}

function getInnerText(cell) {
   return (cell.innerText == undefined) ? cell.textContent : cell.innerText;
}

function prikaziPrvaGodina() {
   buttonPrvaGodina = true;
   buttonDrugaGodina = false;
   var el = document.querySelectorAll("[id='drugaGodina']");
   el.forEach(element => {
      element.style.display = 'none';
   });

   var elPrva = document.querySelectorAll("[id='prvaGodina']");
   elPrva.forEach(element => {
      element.style.display = 'grid';
   });
}

function prikaziDrugaGodina() {
   buttonPrvaGodina = false;
   buttonDrugaGodina = true;
   var el = document.querySelectorAll("[id='prvaGodina']");
   el.forEach(element => {
      element.style.display = 'none';
   });

   var elPrva = document.querySelectorAll("[id='drugaGodina']");
   elPrva.forEach(element => {
      element.style.display = 'grid';
   });
}

function prikaziSve() {
   location.reload();
}

function testtest() {
   test();
}
