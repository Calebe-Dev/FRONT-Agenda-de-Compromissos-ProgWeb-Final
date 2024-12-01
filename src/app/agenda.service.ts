import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { compromissos } from './compromissos';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url='http://localhost:8080/Compromisso';

  constructor(private http:HttpClient) { }

  getCompromissos(): Observable<compromissos[]>{
    return this.http.get<compromissos[]>(this.url);
  }

  getCompromissosById(id:number): Observable<compromissos>{
    return this.http.get<compromissos>(`${this.url}/${id}`);
  }

  delete(compromissos: compromissos):Observable<void>{
    return this.http.delete<void>(`${this.url}/${compromissos.id}`)
  }

  update(compromissos: compromissos):Observable<compromissos>{
    return this.http.put<compromissos>(`${this.url}/${compromissos.id}`,compromissos);
  };

  save(compromissos: compromissos):Observable<compromissos>{
    return this.http.post<compromissos>(this.url, compromissos);
  };
}
