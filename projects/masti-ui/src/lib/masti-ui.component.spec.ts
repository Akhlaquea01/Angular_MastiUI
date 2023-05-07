import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastiUiComponent } from './masti-ui.component';

describe('MastiUiComponent', () => {
  let component: MastiUiComponent;
  let fixture: ComponentFixture<MastiUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastiUiComponent]
    });
    fixture = TestBed.createComponent(MastiUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
