import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['../../introduction/introduction.component.css']
})
export class AngularFormsComponent {
  basicForm=this.formBuilder.group({
    name:'',
    age:0,
    gender:'',
    role:''
  });

  constructor(
    private formBuilder:FormBuilder
  ){}

  onSubmit(): void {
    console.log('Form values: ',this.basicForm.value);
    this.basicForm.reset();
  }
}
