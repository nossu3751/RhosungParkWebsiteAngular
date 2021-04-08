import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  resumeOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  resumeToggle(){
    this.resumeOn.next(true);
  }
}
