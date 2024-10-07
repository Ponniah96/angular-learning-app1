import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutesHomeComponent } from './angular-routes-home.component';

describe('AngularRoutesHomeComponent', () => {
  let component: AngularRoutesHomeComponent;
  let fixture: ComponentFixture<AngularRoutesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularRoutesHomeComponent]
    });
    fixture = TestBed.createComponent(AngularRoutesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
