import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutesComponent } from './angular-routes.component';

describe('AngularRoutesComponent', () => {
  let component: AngularRoutesComponent;
  let fixture: ComponentFixture<AngularRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularRoutesComponent]
    });
    fixture = TestBed.createComponent(AngularRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
