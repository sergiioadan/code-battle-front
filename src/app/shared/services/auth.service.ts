import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/auth'; // Usa /auth si tienes proxy configurado

  constructor(private http: HttpClient) {}

 register(username: string, password: string): Observable<AuthResponse> {
  return this.http.post<AuthResponse>(`${this.API_URL}/register`, { username, password }).pipe(
    tap(response => this.setToken(response.token))
  );


}

login(username: string, password: string): Observable<any> {
  return this.http.post<AuthResponse>(`${this.API_URL}/authenticate`, { username, password }).pipe(
    tap((res) => {
      localStorage.setItem('jwtToken', res.token);
    })
  );
}

  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  private setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }
}
