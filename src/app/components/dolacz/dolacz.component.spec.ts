import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolaczComponent } from './dolacz.component';

describe('DolaczComponent', () => {
  let component: DolaczComponent;
  let fixture: ComponentFixture<DolaczComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DolaczComponent]
    });
    fixture = TestBed.createComponent(DolaczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
