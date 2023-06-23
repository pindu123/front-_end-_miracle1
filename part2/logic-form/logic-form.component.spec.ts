import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicFormComponent } from './logic-form.component';

describe('LogicFormComponent', () => {
  let component: LogicFormComponent;
  let fixture: ComponentFixture<LogicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogicFormComponent]
    });
    fixture = TestBed.createComponent(LogicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});