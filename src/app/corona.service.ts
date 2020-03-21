import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  Url = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/35';
  
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.Url}`);
  }
}