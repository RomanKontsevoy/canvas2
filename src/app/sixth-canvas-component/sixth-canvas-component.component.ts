import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-canvas-component',
  templateUrl: './sixth-canvas-component.component.html',
  styleUrls: ['./sixth-canvas-component.component.scss']
})
export class SixthCanvasComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c6');
    const ctx = canvas.getContext('2d');
    let x = 0;
    let y, timer;

    function drawSin() {
       y = 100 + 50 * Math.sin(x);
       if(x >= 400) {
         x = 0;
       } else {
         x = x + 0.3;
       }

       ctx.fillRect(x * 5, y, 2, 2);
       timer = setTimeout(drawSin, 30);
    };

    drawSin();
  }

}
