import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface NivelProgreso {
  hits: number;
  points: number;
}

export interface ProgresoPorNivel {
  [nivel: string]: {
    hits: number;
    points: number;
  };
}

@Injectable({ providedIn: 'root' })
export class ProgressService {
  constructor(private http: HttpClient) {}

 getProgress(username: string): Observable<ProgresoPorNivel> {
  return this.http.get<ProgresoPorNivel>(`https://code-battle-back.onrender.com/progress?username=${username}`);
}

getRankingPosition(username: string) {
  return this.http.get<number>(`https://code-battle-back.onrender.com/ranking/position/${username}`);
}
  
} 