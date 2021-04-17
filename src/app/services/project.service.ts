import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  endPoint:string = "https://rhosung-park-backend.herokuapp.com/project"
  constructor(private http:HttpClient) { }

  getAllProjects():Observable<any>{
    return this.http.get(this.endPoint);
  }

  
}
