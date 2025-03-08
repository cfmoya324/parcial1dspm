import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_FUTURAMA } from '../configuracion/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuturamaService {

  constructor(private http: HttpClient) { }

  getAllCharacters(pageNum: string):any{
    let url = `${URL_FUTURAMA}/characters?size=100&page=${pageNum}`

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('Personajes Futurama: ', res);
        return res;
      })
    );
  }
}
