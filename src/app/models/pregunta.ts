import { Respuesta } from "./respuesta";

export class Pregunta {
  descripcionPregunta: string;
  respuestas: Respuesta[];

  constructor(descripcionPregunta: string, respuestas: Respuesta[]) {
    this.descripcionPregunta = descripcionPregunta;
    this.respuestas = respuestas;
  }
}
