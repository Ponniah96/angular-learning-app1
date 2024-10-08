import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialTableComponent } from './angular-material-table.component';

describe('AngularMaterialTableComponent', () => {
  let component: AngularMaterialTableComponent;
  let fixture: ComponentFixture<AngularMaterialTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMaterialTableComponent]
    });
    fixture = TestBed.createComponent(AngularMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
