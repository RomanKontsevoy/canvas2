import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninth-canvas-lesson',
  templateUrl: './ninth-canvas-lesson.component.html',
  styleUrls: ['./ninth-canvas-lesson.component.scss']
})
export class NinthCanvasLessonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c9');
    const ctx = canvas.getContext('2d');
    ctx.moveTo(200, 50);
    ctx.quadraticCurveTo(150, 0, 100, 50);
    ctx.quadraticCurveTo(50, 120, 200, 180);
    ctx.quadraticCurveTo(350, 120, 300, 50);
    ctx.quadraticCurveTo(250, 0, 200, 50);
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fill();



    canvas.addEventListener('mousemove', function (event) {
      let x = event.offsetX;
      let y = event.offsetY;
      ctx.clearRect(0, 0, 400, 200);
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.quadraticCurveTo(x, y, 50, 150);
      ctx.stroke();
      ctx.closePath();
      
    })

  }

}
