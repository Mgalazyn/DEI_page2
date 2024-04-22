import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDEIComponent } from './why-dei.component';

describe('WhyDEIComponent', () => {
  let component: WhyDEIComponent;
  let fixture: ComponentFixture<WhyDEIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyDEIComponent]
    });
    fixture = TestBed.createComponent(WhyDEIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
