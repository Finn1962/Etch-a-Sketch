document.addEventListener("DOMContentLoaded", function erstellungZeichenfläche(){
    

    //Erstellung der Zeichenfläche mit verschachtelten Arrays
    let breiteZeichenfläche_X = (5);
    let zeichenfläche_Y = [];
    
    for (let y = 0; y < breiteZeichenfläche_X; y++) {
    
        zeichenfläche_Y.push(zeichenfläche_X = []);

        for (let x = 0; x < breiteZeichenfläche_X; x++) {

            zeichenfläche_X.push(0)            

        }
    
    
    }  
    console.log(zeichenfläche_Y);

    
});