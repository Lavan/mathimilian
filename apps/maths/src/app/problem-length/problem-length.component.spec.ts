import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemLengthComponent } from './problem-length.component';

describe('ProblemLengthComponent', () => {
  let component: ProblemLengthComponent;
  let fixture: ComponentFixture<ProblemLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
