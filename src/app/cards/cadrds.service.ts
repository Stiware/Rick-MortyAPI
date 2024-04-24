import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CadrdsService {

    constructor(private http: HttpClient) {}

    getPersonajes(route?: string): Observable<any> {
        if(!route){
            return this.http.get<any>('https://rickandmortyapi.com/api/character');
        }
        return this.http.get<any>(route);
    }

}
