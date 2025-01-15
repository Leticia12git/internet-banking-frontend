import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  public login(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
