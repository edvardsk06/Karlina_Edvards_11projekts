
const datumsLidz = new Date("May 20, 2025 00:00:00").getTime();

function atjauno() {
  const tagad = new Date().getTime();

  const laiksPalicis = datumsLidz - tagad;

   const dienas = Math.floor(laiksPalicis / (1000 * 60 * 60 * 24));
  const stundas = Math.floor((laiksPalicis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((laiksPalicis % (1000 * 60 * 60)) / (1000 * 60));
const sekundes = Math.floor((laiksPalicis % (1000 * 60)) / 1000);

  const laikaTeksts = `${dienas}d ${stundas}h ${minutes}m ${sekundes}s`;
  document.getElementById("Laiks").innerHTML = laikaTeksts;
}
setInterval(atjauno, 1000);



let kurs = Math.floor(Math.random() * jaut.length);
document.getElementById("jautajums").innerHTML = jaut[kurs].jau;

function poga() {

const ievade = document.getElementById("atbildetais").value.trim().toLowerCase();
const pareiza = jaut[kurs].atb.toLowerCase();
  const izvade = document.getElementById("izvade");


if (ievade === pareiza) {
    izvade.innerHTML = 'Pareizi!';
  }
 else {
    izvade.innerHTML = `Nepareizi! Pareizā atbilde ir: ${pareiza}.`;
  }

  setTimeout(() => {
    izvade.innerHTML = "";
    kurs = Math.floor(Math.random() * jaut.length);

    document.getElementById("jautajums").innerHTML = jaut[kurs].jau;
  }, 2000);
}


document.addEventListener("DOMContentLoaded", function() {
  const spuldze = document.querySelector(".w");

  function parslēgt(spuldze) {
    if (spuldze.style.backgroundImage.includes("gep.jpg")) {
      spuldze.style.backgroundImage = "url('bildes/jautajumi.jpg')";
    } else {
      spuldze.style.backgroundImage = "url('bildes/gep.jpg')";
    }
  }

  spuldze.addEventListener("click", function() {
    parslēgt(spuldze);
  });
});



