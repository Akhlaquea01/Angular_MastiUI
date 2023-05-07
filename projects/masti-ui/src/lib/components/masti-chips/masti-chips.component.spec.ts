import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastiChipsComponent } from './masti-chips.component';

describe('MastiChipsComponent', () => {
  let component: MastiChipsComponent;
  let fixture: ComponentFixture<MastiChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastiChipsComponent]
    });
    fixture = TestBed.createComponent(MastiChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
