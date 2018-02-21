import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-canvas-lesson',
  templateUrl: './fifth-canvas-lesson.component.html',
  styleUrls: ['./fifth-canvas-lesson.component.scss']
})
export class FifthCanvasLessonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c5');
    const ctx = canvas.getContext('2d');
    let x = 200;
    let y = 100;
    let stepCount = 0; // Кол-во шагов в одном направлении
    let direction;
    let timer, myX, myY;

    function drawDot () {
      ctx.clearRect(0, 0, 400, 200);
      if (stepCount === 0) {
        stepCount = Math.floor(15 * Math.random()); // 0-14
        direction = Math.floor(8 * Math.random()); // 0-7
      } else {
        stepCount--;
      }
      switch (direction) {
        case 0: // up
          y = y - 1;
          break;
        case 1: // right
          x = x + 1;
          break;
        case 2: // down
          y = y + 1;
          break;
        case 3: // left
          x = x - 1;
          break;
        case 4: // up right
          y = y - 1;
          x = x + 1;
          break;
        case 5: // down right
          x = x + 1;
          y = y + 1;
          break;
        case 6: // down left
          x = x - 1;
          y = y + 1;
          break;
        case 7: // up left
          x = x - 1;
          y = y - 1;
          break;
        default:
          break;
      }

      if (x <= 3) {
        stepCount = 14;
        direction = 1;
      } else if (x >= 397) {
        stepCount = 14;
        direction = 3;
      }
      else if (y <= 3) {
        stepCount = 14;
        direction = 2;
      }
      else if (y >= 197) {
        stepCount = 14;
        direction = 0;
      }

      ctx.fillRect(x - 3, y - 3, 6, 6);
      ctx.fillStyle = 'red';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(myX, myY);
      ctx.strokeStyle = "green";
      ctx.lineWidth = 2;
      ctx.stroke();
      timer = setTimeout(drawDot, 5);
    }
    drawDot();

    canvas.addEventListener('mousemove', function (event) {
      myX = event.offsetX;
      myY = event.offsetY;
    });
    canvas.addEventListener('mouseout', function () {
      myX = undefined;
      myY = undefined;
    });
  }

}
