import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  pdf:string = "../../assets/Rhosung_Park_Resume.pdf";
  show:BehaviorSubject<boolean> = this._sharedService.resumeOn;
  constructor(private _sharedService:SharedService) { }

  close(){
    
    this.show.next(false);
    
  }

  ngOnInit(): void {
    
  }

}
