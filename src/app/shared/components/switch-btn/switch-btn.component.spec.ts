import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchBtnComponent } from './switch-btn.component';

describe('SwitchBtnComponent', () => {
  let component: SwitchBtnComponent;
  let fixture: ComponentFixture<SwitchBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
