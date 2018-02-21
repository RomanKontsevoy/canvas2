import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCanvasLessonComponent } from './second-canvas-lesson.component';

describe('SecondCanvasLessonComponent', () => {
  let component: SecondCanvasLessonComponent;
  let fixture: ComponentFixture<SecondCanvasLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondCanvasLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCanvasLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
