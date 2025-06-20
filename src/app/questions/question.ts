import { Injectable } from '@angular/core';
import { Pregunta, Nivel } from '../models/question.model';
import { NIVELES } from '../config/niveles.config';
import { PREGUNTAS } from '../config/preguntas.config';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getPreguntas(nivel: Nivel): Pregunta[] {
    return [...PREGUNTAS[nivel]];
  }
}
