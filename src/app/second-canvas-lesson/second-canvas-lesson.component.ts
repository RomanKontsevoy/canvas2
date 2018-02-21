import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-canvas-lesson',
  templateUrl: './second-canvas-lesson.component.html',
  styleUrls: ['./second-canvas-lesson.component.scss']
})
export class SecondCanvasLessonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c2');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '5';
    ctx.moveTo(100, 50);
    ctx.lineTo(150, 150);
    ctx.stroke();

    ctx.beginPath(); // начало новго "пути"
    ctx.strokeStyle = 'blue'; // цвет нового "пути"
    ctx.lineWidth = '10'; // толщина линии
    ctx.moveTo(150, 150); // начальная координата линии
    ctx.lineTo(300, 50); // конечная координата линии 
    ctx.lineTo(300, 150); // конечная координата линии 
    ctx.lineCap = 'round'; // Линия заканчивается красивым скруглением, удобно при соединении линий
    // ctx.lineCap = 'square'; // Линия заканцивается нарощеннім "Квадратиком"
    // ctx.lineCap = 'butt'; // Линия обрезается в координатах, по умолчанию
    ctx.stroke();
    ctx.clearRect(0, 0, 400, 200);

    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(150, 50);
    ctx.lineTo(200, 150);
    ctx.lineWidth = '5';
    ctx.lineCap = 'round';
    ctx.fillStyle = 'yellow';
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

  }

}
