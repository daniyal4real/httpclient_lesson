import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {APIResponse} from "../model/models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers = (): Observable<APIResponse> => {
    return this.http.get<APIResponse>("https://reqres.in/api/users")
  }

  getUserById(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>
    ("https://reqres.in/api/users/"+id, {
      params: new HttpParams({})
    })
  }
}
