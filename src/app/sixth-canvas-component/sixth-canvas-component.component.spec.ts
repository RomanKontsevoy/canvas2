import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthCanvasComponentComponent } from './sixth-canvas-component.component';

describe('SixthCanvasComponentComponent', () => {
  let component: SixthCanvasComponentComponent;
  let fixture: ComponentFixture<SixthCanvasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthCanvasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthCanvasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
