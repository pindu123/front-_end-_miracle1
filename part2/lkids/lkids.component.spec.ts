import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LkidsComponent } from './lkids.component';

describe('LkidsComponent', () => {
  let component: LkidsComponent;
  let fixture: ComponentFixture<LkidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LkidsComponent]
    });
    fixture = TestBed.createComponent(LkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
