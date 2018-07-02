import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/api';

  getAll() {
    const path = '/talents';

    return this.http.get(this.baseUrl + path);
  }

  get(id: string) {
    const path = '/talents/' + id;


    return this.http.get(this.baseUrl + path);
  }

  update(id: string, body: any) {
    const path = '/talents/' + id;

    return this.http.put(this.baseUrl + path, body);
  }
}
