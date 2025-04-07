document.addEventListener("DOMContentLoaded", function() {
    const spuldze = document.querySelector(".w");
    const spuldze1 = document.querySelector(".a");

    function parslēgtGaismu(spuldze) {
        if (spuldze.style.backgroundImage.includes("on")) {
            spuldze.style.backgroundImage = "url('bildes/light-bulb-off.png')";
        } else {
            spuldze.style.backgroundImage = "url('bildes/light-bulb-on.png')";
        }
    }

    spuldze.addEventListener("click", function() {
        parslēgtGaismu(spuldze);
    });

    spuldze1.addEventListener("click", function() {
        parslēgtGaismu(spuldze1);
    });
});
