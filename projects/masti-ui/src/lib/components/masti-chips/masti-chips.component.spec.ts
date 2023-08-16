import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MastiChipsComponent } from './masti-chips.component';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('MastiChipsComponent', () => {
  let fixture: ComponentFixture<MastiChipsComponent>;
  let component: MastiChipsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastiChipsComponent],
      imports: [FontAwesomeModule], // Add this line to import the FontAwesomeModule
    });

    fixture = TestBed.createComponent(MastiChipsComponent);
    component = fixture.componentInstance;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test cases for chip component
  describe('Chip Component', () => {
    it('should create a chip component with default values', () => {
      // Act & Assert
      expect(component).toBeTruthy();
      expect(component.iconClass).toEqual(faCheck);
      expect(component.disabled).toBeFalse();
      expect(component.selected).toBeFalse();
      expect(component.textColor).toEqual('#db34c8');
      expect(component.iconPosition).toEqual('left');
    });
  });
});
