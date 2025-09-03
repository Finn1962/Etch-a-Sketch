const reglerGröße = document.getElementById("reglerGrößeZeichenfläche");
const zeichenflaeche = document.getElementById("zeichenflaeche");
const zeichenfleacheBreiteInPixel = (zeichenflaeche.clientWidth);


//Erstellung der Zeichenflaeche durch verschachtelte Arrays
document.addEventListener("DOMContentLoaded",function(){
    erstellungZeichenflaeche();
});

reglerGröße.addEventListener("input",function(){
    erstellungZeichenflaeche();
});

function erstellungZeichenflaeche(){
    let zeichenflaecheBreite_X = parseInt(reglerGröße.value,10);
   
    zeichenflaeche.innerHTML = ""; // Setzt das Zeichenfeld zurück


    const zeichenflaecheSpaltenLaenge_Y = [];
 
    for (let y = 0; y < zeichenflaecheBreite_X; y++) {

        const zeichenflaecheZeilenBreite_X = [];
        zeichenflaecheSpaltenLaenge_Y.push(zeichenflaecheZeilenBreite_X);

        const neueZeile = document.createElement("div");
        zeichenflaeche.appendChild(neueZeile);

        for (let x = 0; x < zeichenflaecheBreite_X; x++) {

            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            const pixelGroesse = (zeichenfleacheBreiteInPixel / zeichenflaecheBreite_X);
            pixel.style.width = pixelGroesse + "px";
            pixel.style.height = pixelGroesse + "px";
            neueZeile.appendChild(pixel);  
        }        
    }  
}



//Funktionen für die Buttons
let buttonZeichnenAktiv = true;
let buttonRadierenAktiv = false;
const buttonZeichnen = document.getElementById("buttonZeichnen");
const buttonRadieren = document.getElementById("buttonRadieren");
const farbwahlFlaeche = document.getElementById("farbwahlFlaeche");
let verwendeteFarbe = farbwahlFlaeche.value;


farbwahlFlaeche.addEventListener("input", function(){
    verwendeteFarbe = farbwahlFlaeche.value;
});

buttonZeichnen.addEventListener("click", function(){
    buttonZeichnenAktiv = true;
    buttonRadierenAktiv = false;
    buttonZeichnen.style.background = "linear-gradient(135deg, #1e4974ff, #195589ff)";
    buttonRadieren.style.background = "linear-gradient(135deg, #3a8dde, #1e6fb8)";
});

buttonRadieren.addEventListener("click", function(){
    buttonZeichnenAktiv = false;
    buttonRadierenAktiv = true;   

    buttonZeichnen.style.background = "linear-gradient(135deg, #3a8dde, #1e6fb8)"; 
    buttonRadieren.style.background = "linear-gradient(135deg, #1e4974ff, #195589ff)";
});





//Färbung der Pixel beim Zeichnen
let zeichenAktiv = false;

document.addEventListener("mousedown", function(event) {
    zeichenAktiv = true;
    färbePixel(event.clientX, event.clientY);
});
document.addEventListener("mouseup", function() {
    zeichenAktiv = false;
});

document.addEventListener("mouseover", function (event) {
    if (zeichenAktiv){
        färbePixel(event.clientX, event.clientY);
    }
});

function färbePixel(x, y){
    const angewählterPixel = document.elementFromPoint(x, y); 
    if (angewählterPixel.classList.contains("pixel") && buttonZeichnenAktiv){
        angewählterPixel.style.backgroundColor = verwendeteFarbe; 
        console.log(verwendeteFarbe);
    }
    if (angewählterPixel.classList.contains("pixel") && buttonRadierenAktiv){
        angewählterPixel.style.backgroundColor = "white"; 
    }
}