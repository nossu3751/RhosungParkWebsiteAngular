import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint:string = "http://localhost:3000/login"
  constructor(private http:HttpClient) { }

  isAdmin():boolean{
    let user = sessionStorage.getItem('user'); 
    return user !== undefined && user === 'admin';
  }

  authenticate(admin:any):Promise<boolean>{

    return new Promise<boolean>((resolve:any)=>{
      this.http.post(this.endPoint, admin).subscribe({
        next: (data:any) =>{
          if(data.success == true){
            sessionStorage.setItem('user','admin');
            resolve(true);
          }else{
            resolve(false);
          }
        },
        error: (error:any)=>{
            resolve(false);
        }
      })
    })
  }

}
