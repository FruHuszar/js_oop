# Javascript oop

## CustomEvent

Példa egy saját esemény létrehozására és hallgatására:

```javascript
sajatEsemeny() {
  const e = new CustomEvent("kedvencekhez", { detail: this });
  window.dispatchEvent(e);
}

window.addEventListener("kedvencekhez", (event) => {
  console.log(event.detail);
});
```

```javascript
// HTML elemet adunk hozzá a DOM-hoz
this.szuloELem.insertAdjacentHTML("beforeend", html);
// Most már meg lehet fogni a gombot, és lehet pozícionálni
```
