import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
  private _url = 'http://localhost:3000/employee';

  constructor(private http: HttpClient ) { }

  getData() {    
    return this.http.get(this._url)
      .map( ( response ) => response );
  } 

}
