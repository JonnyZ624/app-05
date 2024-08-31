import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  constructor(private http:HttpClient) { }

  //login
  private API_USER='http://localhost:3000/login'

  //registrat

  getUsuarios():Observable<any>{
    return this.http.get(this.API_USER)
  }

  loginUsuarios(user:any):Observable<any>{
    return this.http.post(this.API_USER, user)
  }
}
