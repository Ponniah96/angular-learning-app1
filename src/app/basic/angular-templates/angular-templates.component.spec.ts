import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplatesComponent } from './angular-templates.component';

describe('AngularTemplatesComponent', () => {
  let component: AngularTemplatesComponent;
  let fixture: ComponentFixture<AngularTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularTemplatesComponent]
    });
    fixture = TestBed.createComponent(AngularTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
