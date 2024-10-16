import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialCardComponent } from './angular-material-card.component';

describe('AngularMaterialCardComponent', () => {
  let component: AngularMaterialCardComponent;
  let fixture: ComponentFixture<AngularMaterialCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMaterialCardComponent]
    });
    fixture = TestBed.createComponent(AngularMaterialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
