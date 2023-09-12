import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

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

  public gridColumns=0;

  constructor(
    private dependencyInjectionServiceComponent:IntroductionServiceService,
    private formBuilder:FormBuilder,
    breakPointObserver:BreakpointObserver
  ){
    breakPointObserver.observe([Breakpoints.XSmall]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=1;
      }
    })
    breakPointObserver.observe([Breakpoints.Medium]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=2;
      }
    })
    breakPointObserver.observe([Breakpoints.Large]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=3;
      }
    })
    breakPointObserver.observe([Breakpoints.XLarge]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
      }
    })
  }

  increaseCount(){
    this.dependencyInjectionServiceComponent.increaseCountValue(this.count);
    this.count++;
  }

  onSubmit(): void {
    console.log('Form values: ',this.basicForm.value);
    this.basicForm.reset();
  }
}