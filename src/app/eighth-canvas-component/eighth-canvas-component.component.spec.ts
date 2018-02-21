import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthCanvasComponentComponent } from './eighth-canvas-component.component';

describe('EighthCanvasComponentComponent', () => {
  let component: EighthCanvasComponentComponent;
  let fixture: ComponentFixture<EighthCanvasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EighthCanvasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthCanvasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
