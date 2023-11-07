import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamento'
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }
  
  criar(pensamento:Pensamento):Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  excluirPensamento(id:Number):Observable<Pensamento>{
    const url =`${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id:Number):Observable<Pensamento>{
    const url =`${this.API}/${id}`
    return this.http.get<Pensamento>(url)}
}