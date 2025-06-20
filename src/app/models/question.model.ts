export interface Pregunta {
  valor: string;
  opciones: string[];
  respuesta: string;
}

export type Nivel =
  | 'tipos'
  | 'constantes'
  | 'tipado'
  | 'por_defecto'
  | 'prueba'

  | 'listas';
