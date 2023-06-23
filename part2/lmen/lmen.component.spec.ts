import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmenComponent } from './lmen.component';

describe('LmenComponent', () => {
  let component: LmenComponent;
  let fixture: ComponentFixture<LmenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LmenComponent]
    });
    fixture = TestBed.createComponent(LmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
