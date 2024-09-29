import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialHomepageComponent } from './angular-material-homepage.component';

describe('AngularMaterialHomepageComponent', () => {
  let component: AngularMaterialHomepageComponent;
  let fixture: ComponentFixture<AngularMaterialHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMaterialHomepageComponent]
    });
    fixture = TestBed.createComponent(AngularMaterialHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
