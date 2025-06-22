import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  username: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://code-battle-back.onrender.com';

  constructor(private http: HttpClient) {}

  buscarUsuarios(query: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/search?q=${query}`);
  }
}
