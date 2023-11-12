export type Estado =
| "Juego de las siete media"
| "Has sido muy conservador"
| "Te ha entrado el canguelo eh?"
| "Casi casi..."
| "¡Lo has clavado! ¡Enhorabuena!"
| "Game Over";

interface partida {
    puntos:number;
    mensaje: string;
    carta:number;
    numeroAleatorio:number;
}
export const partida ={
    puntos: 0,
    mensaje: "",
    carta:0,
    numeroAleatorio: 0
}