import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCompComponent } from './multi-comp.component';

describe('MultiCompComponent', () => {
  let component: MultiCompComponent;
  let fixture: ComponentFixture<MultiCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiCompComponent]
    });
    fixture = TestBed.createComponent(MultiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
