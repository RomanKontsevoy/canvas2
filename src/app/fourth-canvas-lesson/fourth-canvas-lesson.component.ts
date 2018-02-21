import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-canvas-lesson',
  templateUrl: './fourth-canvas-lesson.component.html',
  styleUrls: ['./fourth-canvas-lesson.component.scss']
})
export class FourthCanvasLessonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c4');
    const ctx = canvas.getContext('2d');
    const pi = Math.PI;

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.arc(150, 100, 75, 0, pi*2, false);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'pink';
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.arc(300, 100, 75, 0, pi*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.clearRect(0, 0, 400, 200);

    canvas.addEventListener('mousemove', function (event) {
      let x = event.offsetX;
      let y = event.offsetY;
      ctx.beginPath();
      const radius = Math.pow(Math.pow(x-200, 2) + Math.pow(y-100, 2), 0.5)
      ctx.clearRect(0, 0, 400, 200);
      ctx.arc(200, 100, radius, 0, pi * 2, false);
      ctx.stroke();
      ctx.fill();
    });
  }

}
