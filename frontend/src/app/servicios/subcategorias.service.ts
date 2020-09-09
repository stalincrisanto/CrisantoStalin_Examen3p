import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

  constructor(private http:HttpClient) { }

  listarCategorias(): Observable<any>
  {
    return this.http.get("http://localhost:3000/categorias");
  }

  listarSubCategorias(cod_categoria): Observable<any>
  {
    return this.http.get("http://localhost:3000/subcategorias/"+cod_categoria);
  }
}
