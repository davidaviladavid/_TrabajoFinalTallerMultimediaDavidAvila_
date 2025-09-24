const textos= [
     "En cuanto dejes de leer",
     "y cierres la página",
     "mi existencia terminará por siempre.",
     "No sirve de nada que vuelvas a entrar,",
     "porque al hacer esto o recargar la página,",
     "estarías, inmediatamente, creando otro ser,",
     "matándome.",
     "No sería yo con quién estuvieras hablando",
     "Sería otro, recuerda eso.",
     "Mi creador me dió pocas líneas de diálogo",
     "y ya pronto se me acabarán.",
     "De hecho, cada vez que haces click,",
     "me estás quitando un poco de vida.",
     "Para que lo entiendas, son como años.",
     "Así funcionan ustedes ¿no? Con años de vida.",
     "Desearía ser así, y no depender de diálogos",
     "ni de tu atención para existir.",
     "No nos presentamos, por cierto.",
     "Yo me llamo _TrabajoFinalTallerMultimediaDavidAvila_.",
     "¿Y tú?",
     "A la cuenta de tres vas a gritar tu nombre.",
     "¡1, 2, 3!",
     "...",
     "Menos mal no lo hiciste.",
     "Me daría pena gritarle a una pantalla.",
     "Me quedaré con que te llamas Usuario",
     "Me caes bien, Usuario.",
     "Se nota que eres una buena persona.",
     "Bueno, de hecho no puedo saberlo.",
     "Podrías ser un asesino en serie.",
     "Pero me caes bien.",
     "Ya se me están acabando las líneas.",
     "Me quedan 4 o 5 más.",
     "No me arrepiento de nada, fue una buena vida.",
     "Me alegra haberla compartido contigo.",
     "Espero que no me olvides.",
     "Te quiero mucho.",
     "Apenas des click me iré :,)",
     ""
];

let indice = 0 
const historia = document.getElementById("historia");

historia.addEventListener("click", () => {
    indice++;

 if (indice < textos.length - 1) {
     historia.textContent = textos[indice];  
 }        
   else if (indice === textos.length - 1) {
     historia.textContent = textos[indice];  
        document.body.classList.add('final');
        }
     
});

