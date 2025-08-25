const imagenes = [];
const audios = [];
const rutas = [
    "imagenes/aenobarbus.jpeg",
    "imagenes/deathforest.jpeg",
    "imagenes/jeff.jpeg",
    "imagenes/smiledog.jpeg",
    "imagenes/screamer1.jpeg",
    "imagenes/screamer2.jpeg",
    "imagenes/screamer3.jpeg",
    "imagenes/screamer4.jpeg",
    "imagenes/screamer5.jpeg"
];
const rutas_sonidos = [
    "sonido/1171979222886125568.ogg",
    "sonido/Screamer.ogg"
];
for (let i =0; i<rutas_sonidos.length; i++){
    const soni = new Audio();
    soni.src = rutas_sonidos[i];
    audios.push(soni);
}
for (let i = 0; i < rutas.length; i++) {
    const img = new Image();
    img.src = rutas[i];
    imagenes.push(img);
}
window.onload = function(){
    setInterval(() => ejecutarsonido(), 90);
    setInterval(()=>ejecutarimagenes(),1)
}
function ejecutarimagenes(){
    const screamer = document.getElementById("screamer");
    if (screamer) {
        const randomIndex = Math.floor(Math.random() * imagenes.length);
        screamer.src = imagenes[randomIndex].src;
    }
}
function ejecutarsonido() {
    const randomAudioIndex = Math.floor(Math.random() * audios.length);
    audios[randomAudioIndex].currentTime = 0;
    audios[randomAudioIndex].play();
}