import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Red2Component } from './red2.component';

describe('Red2Component', () => {
  let component: Red2Component;
  let fixture: ComponentFixture<Red2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Red2Component]
    });
    fixture = TestBed.createComponent(Red2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
