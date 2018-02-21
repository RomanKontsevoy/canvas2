import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seventh-canvas-lesson',
  templateUrl: './seventh-canvas-lesson.component.html',
  styleUrls: ['./seventh-canvas-lesson.component.scss']
})
export class SeventhCanvasLessonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c7');
    const ctx = canvas.getContext('2d');
    let x = 0;
    let y, timer;
    let teta = 0;
    let R, r, d;
    const pi = Math.PI;
    let ranges: any = document.querySelectorAll('.range');
    let pInputs: any = document.querySelectorAll('.p-input');



    function setVariablesValue() {
      for (let i = 0; i < ranges.length; i++) {
        pInputs[i].innerHTML = ranges[i].value;
      }
      R = ranges[0].value;
      r = ranges[1].value;
      d = ranges[2].value;
    }
    // document.addEventListener('DOMContentLoaded', setVariablesValue);
    setVariablesValue();
    for (let i = 0; i < ranges.length; i++) {
      ranges[i].addEventListener('input', function () {
        ctx.clearRect(0, 0, 600, 600);
        setVariablesValue();
      });
    }



      function spiro() {
       // R = ranges[0].value;
       // r = ranges[1].value;
       // d = ranges[2].value;
       x = (R - r) * Math.cos(teta) + d * Math.cos((R - r) * teta / r);
       y = (R - r) * Math.sin(teta) - d * Math.sin((R - r) * teta / r);
       teta = teta + 0.3;

      ctx.beginPath();
      ctx.fillStyle = 'yellow';
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 5;
      ctx.arc(x + 300, y + 300, 2, 0, pi * 2, false);
      ctx.stroke();
      ctx.fill();
      timer = setInterval(spiro, 5);

    }
    // setInterval(spiro, 100);
    spiro();
  }

}
