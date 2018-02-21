import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCanvasLessonComponent } from './third-canvas-lesson.component';

describe('ThirdCanvasLessonComponent', () => {
  let component: ThirdCanvasLessonComponent;
  let fixture: ComponentFixture<ThirdCanvasLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdCanvasLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCanvasLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
