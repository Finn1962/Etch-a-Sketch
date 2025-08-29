document.addEventListener("DOMContentLoaded", function erstellungZeichenflaeche(){
    
    //Erstellung der Zeichenfläche durch verschachtelten Arrays
    const zeichenflaecheBreite_X = (5);
    const zeichenflaeche = document.getElementById("zeichenflaeche");
    const zeichenfleacheBreiteInPixel = (zeichenflaeche.clientWidth)


    const zeichenflaecheSpaltenLaenge_Y = [];
 
    for (let y = 0; y < zeichenflaecheBreite_X; y++) {
        
        const zeichenflaecheZeilenBreite_X = [];
        zeichenflaecheSpaltenLaenge_Y.push(zeichenflaecheZeilenBreite_X);

        const neueZeile = document.createElement("p");
        zeichenflaeche.appendChild(neueZeile);

        for (let x = 0; x < zeichenflaecheBreite_X; x++) {

            const pixel = document.createElement("div");
            pixel.id = "("+(y)+"/"+(x)+")";
            pixel.classList.add('pixelClasse');
            const pixelGroesse = (zeichenfleacheBreiteInPixel / zeichenflaecheBreite_X);
            pixel.style.width = pixelGroesse + "px";
            pixel.style.height = pixelGroesse + "px";
            neueZeile.appendChild(pixel);           
        }
    }  
});