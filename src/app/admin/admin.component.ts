import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private _authService:AuthService) { }

  ngOnInit(): void {
    let isAdmin:boolean = this._authService.isAdmin();
    if(!isAdmin){
      this.router.navigate(['/admin/login']);
    }
  }

}
