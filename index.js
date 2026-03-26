//import { megjelenit } from "./kartya.js"
import Kutya from "./KUTYA.js";

const kutya = {
    kep: "kepek/kep",
    nev: "Zengi"
}

const bodri = {
    kep: "kepek/kep2",
    nev: "Bodri"
}

const szuloELem = document.querySelector(".tarolo")
const kedvencELem = document.querySelector(".kedvencek")

const puppy = new Kutya(kutya, szuloELem);
//console.log(puppy);
//puppy.megjelenit();
//console.log(szuloELem);
//console.log(puppy.getObj());
puppy.setObj("oltott")


const bodripuppy = new Kutya(bodri, szuloELem);
//console.log(bodripuppy);
//bodripuppy.megjelenit();
//console.log(szuloELem);
//console.log(bodripuppy.getObj());
bodripuppy.setObj("ez egy kávé")


//-----------Második óra-------------

/* Kiválasztjuk a kedvenc kutyákat és listába rakjuk őket */
const KEDVENCLISTA=[]
/* Itt kell tudnunk mire kattintottunk */
window.addEventListener("kedvencekhez",(event)=>{
    console.log(event.detail);
    KEDVENCLISTA.push(event.detail);
    let aktualisIndex = KEDVENCLISTA.length-1
    const k1 = new Kutya(KEDVENCLISTA[aktualisIndex], kedvencELem);
})
