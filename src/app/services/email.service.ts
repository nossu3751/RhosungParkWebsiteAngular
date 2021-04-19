import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  endPoint = "https://rhosung-park-backend.herokuapp.com/send";
  constructor(private http:HttpClient) { 

  }

  sendEmail(email:any):Promise<any>{
    // console.log(email);
    return new Promise<any>( resolve =>{
      this.http.post(this.endPoint, email).subscribe(
        data => {
          // console.log(data,"Successfully sent email!");
          resolve(data);
        },
        error => {
          resolve(null);
          // console.log(error,"Failed to send email!");
        }
      )
    })
  }
}
