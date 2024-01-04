import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  url:any = "http://localhost:3000/foglalasok";

  constructor(private http: HttpClient) { 
    
  }
  
  getFoglalasok(){
    return this.http.get<any>(this.url);
  }

  addFoglalas(foglalas:any){
    return this.http.post<any>(this.url, foglalas)
  }

}
