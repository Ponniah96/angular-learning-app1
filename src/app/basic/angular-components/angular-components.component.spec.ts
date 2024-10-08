import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentsComponent } from './angular-components.component';

describe('AngularComponentsComponent', () => {
  let component: AngularComponentsComponent;
  let fixture: ComponentFixture<AngularComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularComponentsComponent]
    });
    fixture = TestBed.createComponent(AngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
