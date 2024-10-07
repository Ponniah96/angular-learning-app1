import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialHomepageContentComponent } from './angular-material-homepage-content.component';

describe('AngularMaterialHomepageContentComponent', () => {
  let component: AngularMaterialHomepageContentComponent;
  let fixture: ComponentFixture<AngularMaterialHomepageContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMaterialHomepageContentComponent]
    });
    fixture = TestBed.createComponent(AngularMaterialHomepageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
