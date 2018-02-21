import { Component, OnInit } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-third-canvas-lesson',
  templateUrl: './third-canvas-lesson.component.html',
  styleUrls: ['./third-canvas-lesson.component.scss']
})
export class ThirdCanvasLessonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c3');
    const ctx = canvas.getContext('2d');
    let myLineColor = 'red';
    const colorInput: any = document.getElementById('color');
    colorInput.oninput = function () {
      myLineColor = this.value;
    };

    canvas.addEventListener('mousedown', function (event) {
      canvas.onmousemove = function (ev) {
        const x = ev.offsetX;
        const y = ev.offsetY;
        ctx.fillRect(x - 5, y - 5, 10, 10);
        ctx.fillStyle = myLineColor;
        ctx.fill();
      };
      canvas.onmouseup = function () {
        canvas.onmousemove = null;
      };
    });
  }

}
