import {partida } from "./modelo";
export{generarCarta, generarValorCarta, obtenerMensajeSegunPuntos}

const generarNumeroAleatorio = (): number => {
    return Math.floor(Math.random() * 10) + 1;
  };
  
  const generarCarta = (): number => {
    partida.numeroAleatorio = generarNumeroAleatorio();
    return partida.numeroAleatorio > 7 ? partida.numeroAleatorio + 2 : partida.numeroAleatorio;
  };

  const generarValorCarta = (valorCarta: number): number => {
    partida.puntos = valorCarta >= 10 ? 0.5 : valorCarta;
    return partida.puntos;
  };

  const obtenerMensajeSegunPuntos = (puntos: number): string => {
    if (puntos === 0) {
      return "Juego de las siete media";
    } else if (puntos < 4) {
      return "Has sido muy conservador";
    } else if (puntos >= 4 && puntos < 6) {
      return "Te ha entrado el canguelo eh?";
    } else if (puntos >= 6 && puntos <= 7) {
      return "Casi casi...";
    } else if (puntos === 7.5) {
      return "¡Lo has clavado! ¡Enhorabuena!";
    } else {
      return "Game Over";
    }
  };