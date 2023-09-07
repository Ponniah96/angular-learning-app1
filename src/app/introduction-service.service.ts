import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroductionServiceService {

  constructor() { }

  increaseCountValue(count:number){
    console.log('Dependency Injection Count value: ',count+1);
  }
}
