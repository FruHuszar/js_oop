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

const puppy = new Kutya(kutya, szuloELem);
console.log(puppy);
//puppy.megjelenit();
console.log(szuloELem);
console.log(puppy.getObj());
puppy.setObj("oltott")


const bodripuppy = new Kutya(bodri, szuloELem);
console.log(bodripuppy);
//bodripuppy.megjelenit();
console.log(szuloELem);
console.log(bodripuppy.getObj());
bodripuppy.setObj("ez egy kávé")