import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthCanvasLessonComponent } from './ninth-canvas-lesson.component';

describe('NinthCanvasLessonComponent', () => {
  let component: NinthCanvasLessonComponent;
  let fixture: ComponentFixture<NinthCanvasLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthCanvasLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthCanvasLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
