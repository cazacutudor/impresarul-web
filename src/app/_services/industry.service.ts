import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/api';

  getAll() {
    const path = '/industries';

    return this.http.get(this.baseUrl + path);
  }

  get(id: string) {
    const path = '/industries/' + id;


    return this.http.get(this.baseUrl + path);
  }
}
