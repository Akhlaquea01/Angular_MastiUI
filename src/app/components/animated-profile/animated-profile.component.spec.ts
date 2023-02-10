import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedProfileComponent } from './animated-profile.component';

describe('AnimatedProfileComponent', () => {
  let component: AnimatedProfileComponent;
  let fixture: ComponentFixture<AnimatedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
