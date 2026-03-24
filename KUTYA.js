export default class Kutya {
    #obj = {};
    constructor(obj = { kep, nev }, szuloELem) {
        this.#obj = obj;
        this.szuloELem = szuloELem;
        this.megjelenit();

        const gombElem = document.querySelector(".kartya:last-child button");
        gombElem.addEventListener("click", function (event) {
            console.log(event.target);
        })
    }

    megjelenit() {
        let html = `
            <div class="kartya">
                <img src="${this.#obj.kep}.jpg" alt="${this.#obj.nev}">
                <p>${this.#obj.nev}</p>
                <button><span class="material-symbols-outlined">
                heart_plus
                </span></button>
            </div>
            
        `;
        this.szuloELem.insertAdjacentHTML("beforeend", html); //Html dom elem lett, így már meg lehet fogni a gombot, plusz lehet pozícionálni
    }

    getObj() { return this.#obj; }

    setObj(ertek) {
        if (ertek == "oltott") {
            this.#obj.oltott = true;
        } else if (ertek == "nem oltott") {
            this.#obj.oltott = false;
        } else { console.log("nem megfelelő érték") }
    }
}