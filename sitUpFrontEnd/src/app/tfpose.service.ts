import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TfposeService {

  constructor(private http: HttpClient) { }
  
  call() {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', '*/*');

    return this.http.get(
      environment.endpoint,
      {headers}
    )
  }
}
