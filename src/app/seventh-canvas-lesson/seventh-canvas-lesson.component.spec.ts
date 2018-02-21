import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhCanvasLessonComponent } from './seventh-canvas-lesson.component';

describe('SeventhCanvasLessonComponent', () => {
  let component: SeventhCanvasLessonComponent;
  let fixture: ComponentFixture<SeventhCanvasLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhCanvasLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhCanvasLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
