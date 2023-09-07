import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { IntroductionServiceService } from '../introduction-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {
  
  count=0;
  basicForm=this.formBuilder.group({
    name:'',
    age:0,
    gender:'',
    role:''
  });

  constructor(
    private dependencyInjectionServiceComponent:IntroductionServiceService,
    private formBuilder:FormBuilder,
  ){}

  increaseCount(){
    this.dependencyInjectionServiceComponent.increaseCountValue(this.count);
    this.count++;
  }

  onSubmit(): void {
    console.log('Form values: ',this.basicForm.value);
    this.basicForm.reset();
  }
}