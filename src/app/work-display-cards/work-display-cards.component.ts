import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-display-cards',
  templateUrl: './work-display-cards.component.html',
  styleUrls: ['./work-display-cards.component.css']
})
export class WorkDisplayCardsComponent implements OnInit {
  @Input() projectData:any[] = [];
  constructor() { }

  openTab(url:string){
    window.open(url);
  }
  
  ngOnInit(): void {
  }

}
