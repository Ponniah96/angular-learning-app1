import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { IntroductionServiceService } from '../introduction-service.service';
@Component({
  selector: 'app-introduction',
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
  public MobileHeaderMenu='';
  public DesktopHeaderMenu='';
  constructor(
    private dependencyInjectionServiceComponent:IntroductionServiceService,
    private formBuilder:FormBuilder,
    breakPointObserver:BreakpointObserver
  ){
    breakPointObserver.observe([Breakpoints.XSmall]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=2;
        this.MobileHeaderMenu='block';
        this.DesktopHeaderMenu='none';
      }
    })
    breakPointObserver.observe([Breakpoints.Small]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=2;
        this.MobileHeaderMenu='block';
        this.DesktopHeaderMenu='none';
      }
    })
    breakPointObserver.observe([Breakpoints.Medium]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
        this.MobileHeaderMenu='none';
        this.DesktopHeaderMenu='block';
      }
    })
    breakPointObserver.observe([Breakpoints.Large]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
        this.MobileHeaderMenu='none';
        this.DesktopHeaderMenu='block';
      }
    })
    breakPointObserver.observe([Breakpoints.XLarge]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
        this.MobileHeaderMenu='none';
        this.DesktopHeaderMenu='block';
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