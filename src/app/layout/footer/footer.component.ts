import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactForm:FormGroup;
  errorMsg:string = "";
  submitted:boolean = false;
  constructor(private formBuilder:FormBuilder, private _emailService:EmailService) { 
    this.contactForm = formBuilder.group({
      name:['',[Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      message: ['',[Validators.required]]
    })
  }

  sendEmail(){
    this.submitted =true;
    if(this.contactForm.invalid){
      alert("Form Invalid!");
    }else{
      // console.log(this.contactForm.get('name')?.value);
      // console.log(this.contactForm.get('email')?.value);
      // console.log(this.contactForm.get('message')?.value);
      let email = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        query: this.contactForm.get('message')?.value
      }
      this._emailService.sendEmail(email).then(resolve => {
        if(resolve == null){
          alert("Couldn't send email!");
        }else{
          alert(resolve.message);
          this.contactForm.setValue({name:"", email:"", message:""});
          this.submitted = false;
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
