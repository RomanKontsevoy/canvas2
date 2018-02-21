import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthCanvasLessonComponent } from './fourth-canvas-lesson.component';

describe('FourthCanvasLessonComponent', () => {
  let component: FourthCanvasLessonComponent;
  let fixture: ComponentFixture<FourthCanvasLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthCanvasLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthCanvasLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
