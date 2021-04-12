import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  projects:any[] = [];
  faceImg:string = '../../assets/images/black_rho.png';
  icons = {
    language:'../../assets/images/icon_coding.png',
    development:'../../assets/images/icon_development.png',
    data_science:'../../assets/images/icon_data_science.png',
    digital_art:'../../assets/images/icon_digital_art.png'
  }

  constructor(private _projectService:ProjectService) { }

  openTab(url:string){
    window.open(url);
  }

  ngOnInit(): void {
    this._projectService.getAllProjects().subscribe(
      data=>{
        console.log(data);
        this.projects = data.data;
      }
    )
  }

}
