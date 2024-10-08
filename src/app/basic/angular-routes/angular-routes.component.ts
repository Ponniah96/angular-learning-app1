import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-angular-routes',
  templateUrl: './angular-routes.component.html',
  styleUrls: ['../../introduction/introduction.component.css']
})
export class AngularRoutesComponent {

  public gridColumns=0;
  public gridMenuColumns=0;
  public gridContentColumns=0;
  constructor(
    breakPointObserver:BreakpointObserver
  ){
    breakPointObserver.observe([Breakpoints.XSmall]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
        this.gridMenuColumns=1;
        this.gridContentColumns=3;
      }
    })
    breakPointObserver.observe([Breakpoints.Small]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
        this.gridMenuColumns=1;
        this.gridContentColumns=3;
      }
    })
    breakPointObserver.observe([Breakpoints.Medium]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
        this.gridMenuColumns=1;
        this.gridContentColumns=3;
      }
    })
    breakPointObserver.observe([Breakpoints.Large]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
        this.gridMenuColumns=1;
        this.gridContentColumns=3;
      }
    })
    breakPointObserver.observe([Breakpoints.XLarge]).subscribe(result=>{
      if(result.matches){
        this.gridColumns=4;
        this.gridMenuColumns=1;
        this.gridContentColumns=3;
      }
    })
  }

}
