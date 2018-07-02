import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImpresarioService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/api';

  getAll() {
    const path = '/impresarios';

    return this.http.get(this.baseUrl + path);
  }

  get(id: string) {
    const path = '/impresarios/' + id;

    return this.http.get(this.baseUrl + path);
  }

  update(id: string, body: any) {
    const path = '/impresarios/' + id;

    return this.http.put(this.baseUrl + path, body);
  }
}
