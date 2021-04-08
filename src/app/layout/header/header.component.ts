import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('mobileToggleMenu', [
      state('closed', style({
        height: '0px',
      })),
      state('open', style({
        height: '200px'
      })),
      transition('closed=>open', animate('300ms ease-in')),
      transition('open=>closed', animate('300ms ease-out'))
    ]),
    trigger('webToggleMenu', [
      state('closed', style({
        height: '0px',
      })),
      state('open', style({
        height: '70px'
      })),
      transition('closed=>open', animate('300ms ease-in')),
      transition('open=>closed', animate('300ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  logoUrl:string;
  hamburgerUrl:string;
  menuOn:string;
  menuItemOn:boolean;
  constructor(private router:Router) { 
    this.logoUrl = "../../assets/images/rhosung-logo-thinner.png";
    this.hamburgerUrl = "../../assets/images/hamburger.png";
    this.menuOn = 'closed'
    this.menuItemOn = false;
  }

  navigateTo(path:string){
    this.router.navigate([path]);
  }

  toggleMenu(){
    this.menuOn = this.menuOn === 'closed'?'open':'closed';
    if(this.menuOn === 'open'){
      setTimeout(()=>{
        this.menuItemOn = true;
      },300)
    }else{
      this.menuItemOn = false;
    }
  }

  ngOnInit(): void {
  }

}
