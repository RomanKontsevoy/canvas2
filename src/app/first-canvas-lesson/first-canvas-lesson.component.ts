import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-canvas-lesson',
  templateUrl: './first-canvas-lesson.component.html',
  styleUrls: ['./first-canvas-lesson.component.scss']
})
export class FirstCanvasLessonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c1');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(100, 50, 150, 75);
    // ctx.fillRect(x, y, width, height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(150, 100, 100, 50);
    ctx.clearRect(0, 0, 400, 200);

    ctx.strokeStyle = 'green';
    ctx.lineWidth = '10';
    ctx.rect(50, 10, 100, 100);
    ctx.stroke();
    ctx.fillStyle = 'orange';
    ctx.fill();

  }

}
