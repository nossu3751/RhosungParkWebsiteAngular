import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.contactForm = formBuilder.group({
      name:['',[Validators.required]],
      email: ['', [Validators.email]],
      query: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

}
