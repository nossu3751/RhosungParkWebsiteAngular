import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginInfo:FormGroup;
  constructor(private formBuilder:FormBuilder, private _authService:AuthService) { 
    this.loginInfo = formBuilder.group({
      id:['', [Validators.required]],
      password:['',[Validators.required]]
    })
  }

  login(){
    let credentials = {
      "id":this.loginInfo.get('id')?.value,
      "password":this.loginInfo.get('password')?.value
    };

    this._authService.authenticate(credentials).then(resolve =>{
      if(resolve == true){
        console.log("logged in!");
      }else{
        console.log("Failed!");
      }
    })
    
  }

  ngOnInit(): void {
  }

}
