import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCanvasLessonComponent } from './first-canvas-lesson.component';

describe('FirstCanvasLessonComponent', () => {
  let component: FirstCanvasLessonComponent;
  let fixture: ComponentFixture<FirstCanvasLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCanvasLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCanvasLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
