import "./style.css";
import {partida } from "./modelo";
import { generarCarta, generarValorCarta, obtenerMensajeSegunPuntos } from "./motor"
export{iniciarPartida}

const divPuntuacion = document.getElementById("puntuacion");
const btnPlantarse= document.getElementById("plantarse");
const titulo = document.getElementById("titulo");
const btnCarta = document.getElementById("pedirCarta");
const btnNueva = document.getElementById("nueva");
const imagenCarta = document.getElementById("imagenCarta");
const btnFuturo = document.getElementById("futuro");

const iniciarPartida = (): void =>{
    muestraPuntuacion();
    eventos();
}
partida.iniciarPartida = iniciarPartida;

const muestraPuntuacion = (): void => {
    if (divPuntuacion && divPuntuacion instanceof HTMLDivElement) {
      divPuntuacion.textContent = partida.puntos.toString();
    } else {
      console.error("No se ha encontrado el elemento puntuación");
    }
  };

const eventos = (): void => {
    if (
      btnCarta instanceof HTMLButtonElement &&
      btnPlantarse instanceof HTMLButtonElement &&
      btnNueva instanceof HTMLButtonElement &&
      btnFuturo instanceof HTMLButtonElement
    ) {
      btnCarta.addEventListener("click", () => {
        dameCarta();
        muestraPuntuacion();
      });
      btnPlantarse.addEventListener("click", plantarse);
      btnFuturo.addEventListener("click", () => {
        dameCarta();
        muestraPuntuacion();
        actualizarInterfazJugadaFutura();
      });
      btnNueva.addEventListener("click", reset);
    } else {
      console.error("No se ha encontrado el elemento puntuación");
    }
  };

  const reset = (): void => {
    if (
      btnCarta instanceof HTMLButtonElement &&
      btnPlantarse instanceof HTMLButtonElement &&
      btnFuturo instanceof HTMLButtonElement &&
      titulo instanceof HTMLHeadingElement &&
      imagenCarta instanceof HTMLImageElement
    ) {
      partida.puntos = 0;
      muestraPuntuacion();
      activarBotones();
      partida.mensaje = obtenerMensajeSegunPuntos(partida.puntos);
      actualizarTitulo(partida.mensaje);
      partida.carta = 0;
      mostrarCarta(partida.carta);
      btnFuturo.hidden = true;
    } else {
      console.error("No se ha encontrado el elemento puntuación");
    }
  };

  const dameCarta = (): void => {
    partida.carta = generarCarta();
    partida.puntos += generarValorCarta(partida.carta);
    mostrarCarta(partida.carta);
  };
  
  const plantarse = (): void => {
    if (btnFuturo instanceof HTMLButtonElement && titulo instanceof HTMLHeadingElement) {
      partida.mensaje = obtenerMensajeSegunPuntos(partida.puntos);
      actualizarTitulo(partida.mensaje);
      desactivarBotones();
      btnFuturo.hidden = false;
    } else {
      console.error("No se ha encontrado el elemento titulo");
    }
  };

  const actualizarInterfazJugadaFutura = (): void => {
    if (btnFuturo instanceof HTMLButtonElement && titulo instanceof HTMLHeadingElement) {
      btnFuturo.disabled = true;
      titulo.textContent = "Esta seria tu siguiente jugada";
    } else {
      console.error("No se ha encontrado el elemento titulo");
    }
  };
  
  const actualizarTitulo = (mensaje: string): void => {
    if (titulo instanceof HTMLHeadingElement) titulo.textContent = mensaje;
  };
  
  const desactivarBotones = (): void => {
    if (
      btnPlantarse instanceof HTMLButtonElement &&
      btnCarta instanceof HTMLButtonElement &&
      btnFuturo instanceof HTMLButtonElement
    ) {
      btnPlantarse.disabled = true;
      btnCarta.disabled = true;
    } else {
      console.error("No se ha encontrado el elemento titulo");
    }
  };
  
  const activarBotones = (): void => {
    if (
      btnPlantarse instanceof HTMLButtonElement &&
      btnCarta instanceof HTMLButtonElement &&
      btnFuturo instanceof HTMLButtonElement
    ) {
      btnPlantarse.disabled = false;
      btnCarta.disabled = false;
      btnFuturo.disabled = false;
    } else {
      console.error("No se ha encontrado el elemento titulo");
    }
  };
  
  const mostrarCarta = (carta: number): void => {
    if (imagenCarta instanceof HTMLImageElement) {
      switch (carta) {
        case 1:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
          break;
        case 2:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
          break;
        case 3:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
          break;
        case 4:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
          break;
        case 5:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
          break;
        case 6:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
          break;
        case 7:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
          break;
        case 10:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
          break;
        case 11:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
          break;
        case 12:
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
          break;
        default: {
          imagenCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        }
      }
    } else {
      console.error("No se ha encontrado el elemento titulo");
    }
  };