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

  update(id: string, body: any) {
    const path = '/industries/' + id;

    return this.http.put(this.baseUrl + path, body);
  }

  new(body: any) {
    const path = '/industries';

    return this.http.post(this.baseUrl + path, body);
  }

  remove(id: any) {
    const path = '/industries/' + id;

    return this.http.delete(this.baseUrl + path);
  }
}
