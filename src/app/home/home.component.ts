import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faceImg:string = '../../assets/images/black_rho.png';
  resume:string = "../../assets/Rhosung_Park_Resume.pdf";
  clickMe:string = '../../assets/images/click_me.png';

  constructor(private _sharedService:SharedService) { }

  openResume(){
    this._sharedService.resumeToggle();
  }

  ngOnInit(): void {
  }

}
