import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Planeta } from "../entidades/planeta";

@Injectable({
    providedIn: 'root'
})

export class PlanetaService {

    planeta: Planeta = new Planeta(); //validaciones

    url="http://localhost:8080/api/v1/planetas/";

    constructor(private http:HttpClient) {}

    getAll():Observable<Planeta[]> {
        return this.http.get<Planeta[]>(this.url);
    }

    getOne(id:number):Observable<Planeta> {
        return this.http.get<Planeta>(this.url+id);
    }

    post(planeta:Planeta):Observable<Planeta> {
        console.log(planeta);
        return this.http.post<Planeta>(this.url, planeta);
    }

    put(id:number, planeta:Planeta):Observable<Planeta> {
        console.log(planeta);
        return this.http.put<Planeta>(this.url+id, planeta);
    }

    delete(id:number):Observable<Planeta> {
        return this.http.delete<Planeta>(this.url+id);
    }
}

