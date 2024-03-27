import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeComponent } from './orange.component';

describe('OrangeComponent', () => {
  let component: OrangeComponent;
  let fixture: ComponentFixture<OrangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrangeComponent]
    });
    fixture = TestBed.createComponent(OrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
