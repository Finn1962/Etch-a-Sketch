const reglerGröße = document.getElementById("reglerGrößeZeichenfläche");
const zeichenflaeche = document.getElementById("zeichenflaeche");
const zeichenfleacheBreiteInPixel = (zeichenflaeche.clientWidth);

//Erstellung der Zeichenflaeche durch verschachtelte Arrays
reglerGröße.addEventListener("input", function erstellungZeichenflaeche(){
    let zeichenflaecheBreite_X = parseInt(reglerGröße.value,10);
   
    zeichenflaeche.innerHTML = "";


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
});


//Färbung der Pixel beim Zeichnen
let zeichenAktiv = false;

document.addEventListener("mousedown", function(event) {
    console.log('test')
    //event.preventDefault();
    zeichenAktiv = true;
    färbePixel(event.clientX, event.clientY);
});
document.addEventListener("mouseup", function() {
    zeichenAktiv = false;
});

document.addEventListener("mouseover", function (event) {
    //event.preventDefault();
    if (zeichenAktiv){
        färbePixel(event.clientX, event.clientY);
    }
});

function färbePixel(x, y){
    const angewählterPixel = document.elementFromPoint(x, y); 
    if (angewählterPixel.classList.contains("pixel")){
        angewählterPixel.style.backgroundColor = "black"; 
    }
}