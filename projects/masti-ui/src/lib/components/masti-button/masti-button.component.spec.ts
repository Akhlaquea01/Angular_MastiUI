import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastiButtonComponent } from './masti-button.component';

describe('MastiButtonComponent', () => {
  let component: MastiButtonComponent;
  let fixture: ComponentFixture<MastiButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastiButtonComponent]
    });
    fixture = TestBed.createComponent(MastiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
