import { TemplateLiteral } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactform = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    remarks:new FormControl()
  })
  constructor() { }

  

  ngOnInit(): void {
  }

get name():FormControl
  {
    return this.contactform.get('name') as FormControl
  }
  get email():FormControl
  {
    return this.contactform.get('email') as FormControl
  }

  get number():FormControl
  {
    return this.contactform.get('number') as FormControl
  }
}
