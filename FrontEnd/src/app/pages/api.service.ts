import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl ='http://localhost:3000/api/characters';

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
    .pipe(map((data: any) => data.data.results))
  }

  getCharacterById(id:number): Observable<any>{

    return this.http.get<any>(`${this.baseUrl}?id=${id}`)
    .pipe(map((data: any) => data.data.results))



  }

  getComicsByCharacterId(id:number): Observable<any>{
    console.log("chamou service",`${this.baseUrl}/${id}/comics`)
    return this.http.get<any>(`${this.baseUrl}/${id}/comics`).pipe(map((data: any) => data.data.results))

  }
}
