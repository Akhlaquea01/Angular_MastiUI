import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MastiButtonComponent } from './masti-button.component';

describe('MastiButtonComponent', () => {
  let component: MastiButtonComponent;
  let fixture: ComponentFixture<MastiButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastiButtonComponent],
    });
    fixture = TestBed.createComponent(MastiButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render button text', () => {
    component.displayText = 'Test Button';
    fixture.detectChanges();
    const buttonElement: HTMLElement =
      fixture.nativeElement.querySelector('.masti-button');
    expect(buttonElement.textContent).toContain('Test Button');
  });

  it('should apply custom color to button', () => {
    component.btnColor = "#202f3f";
    fixture.detectChanges();
    const buttonElement: HTMLElement =
      fixture.nativeElement.querySelector('.masti-button');
    const computedStyles = getComputedStyle(buttonElement);
    const customColor = computedStyles
      .getPropertyValue('--custom-color')
      .trim();
    expect(customColor).toBe("#202f3f");
  });

  it('should disable the button', () => {
    component.isDisabled = true;
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('.masti-button');
    expect(buttonElement.disabled).toBe(true);
  });

  it('should have disabled styles when disabled', () => {
    component.isDisabled = true;
    fixture.detectChanges();
    const buttonElement: HTMLElement =
      fixture.nativeElement.querySelector('.masti-button');
    const computedStyles = getComputedStyle(buttonElement);
    expect(computedStyles.cursor).toBe('not-allowed');
    expect(computedStyles.opacity).toBe('0.6');
  });

  // Will Add more test cases as needed
});
