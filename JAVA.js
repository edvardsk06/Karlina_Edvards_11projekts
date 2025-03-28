let datumsLidz = new Date("May 20, 2025 00:00:00").getTime();


let x = setInterval(function() {
let tagad = new Date().getTime();
let laiksPalicis = datumsLidz - tagad

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("izvade").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

if (laiksPalicis < 0) {  
 clearInterval(x);
  document.getElementById("izvade").innerHTML = "Laiks beidzies";
  }
}, 1000);

