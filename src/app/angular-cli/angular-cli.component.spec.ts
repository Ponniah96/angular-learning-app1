import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCLIComponent } from './angular-cli.component';

describe('AngularCLIComponent', () => {
  let component: AngularCLIComponent;
  let fixture: ComponentFixture<AngularCLIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularCLIComponent]
    });
    fixture = TestBed.createComponent(AngularCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
