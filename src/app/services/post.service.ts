import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  endPoint = "https://rhosung-park-backend.herokuapp.com/posts"
  constructor(private http:HttpClient) { }

  createPost(post:any):Promise<any>{
    return new Promise<any>(resolve => {
      this.http.post(this.endPoint, post).subscribe({
        next: (data:any)=>{
          resolve({
            "success":true,
            "data":data.data
          })
        },
        error: (error)=>{
          resolve({
            "success":false,
          })
        }
      })
    })
  }

  getPost():Observable<any>{
    return this.http.get(this.endPoint);
  }

  getOnePost(postId:string):Observable<any>{
    return this.http.get(`${this.endPoint}/${postId}`);
  }



}
