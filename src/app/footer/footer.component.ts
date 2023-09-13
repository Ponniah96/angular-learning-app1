import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public gridColumns=0;
  public MobileHeaderMenu='';
  public DesktopHeaderMenu='';
  constructor(breakPointObserver:BreakpointObserver)
  {
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
}
