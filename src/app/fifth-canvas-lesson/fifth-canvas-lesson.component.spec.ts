import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthCanvasLessonComponent } from './fifth-canvas-lesson.component';

describe('FifthCanvasLessonComponent', () => {
  let component: FifthCanvasLessonComponent;
  let fixture: ComponentFixture<FifthCanvasLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthCanvasLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthCanvasLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
