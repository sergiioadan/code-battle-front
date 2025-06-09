import { Injectable } from '@angular/core';
import { Pregunta, Nivel } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private niveles: Record<Nivel, Pregunta[]> = {
    tipos: [
      { valor: '42', opciones: ['int', 'long', 'float'], respuesta: 'int' },
      { valor: '3.14', opciones: ['double', 'float', 'int'], respuesta: 'double' },
      { valor: '"Hola"', opciones: ['String', 'char', 'boolean'], respuesta: 'String' },
      { valor: "'A'", opciones: ['char', 'String', 'byte'], respuesta: 'char' },
      { valor: 'false', opciones: ['boolean', 'String', 'char'], respuesta: 'boolean' },
      { valor: 'true', opciones: ['boolean', 'String', 'int'], respuesta: 'boolean' },
      { valor: '127', opciones: ['byte', 'short', 'int'], respuesta: 'byte' },
      { valor: '32000', opciones: ['short', 'int', 'long'], respuesta: 'short' },
      { valor: '100000', opciones: ['int', 'short', 'long'], respuesta: 'int' },
      { valor: '9223372036854775807', opciones: ['long', 'int', 'float'], respuesta: 'long' }
    ],
    constantes: [],
    tipado: [],
    por_defecto: [],
    listas: []
  };

  getPreguntas(nivel: Nivel): Pregunta[] {
    return [...this.niveles[nivel]];
  }
}
