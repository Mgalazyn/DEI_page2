import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partnership2Component } from './partnership2.component';

describe('Partnership2Component', () => {
  let component: Partnership2Component;
  let fixture: ComponentFixture<Partnership2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Partnership2Component]
    });
    fixture = TestBed.createComponent(Partnership2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
