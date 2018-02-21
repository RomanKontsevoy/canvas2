import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eighth-canvas-component',
  templateUrl: './eighth-canvas-component.component.html',
  styleUrls: ['./eighth-canvas-component.component.scss']
})
export class EighthCanvasComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const canvas: any = document.getElementById('c8');
    const ctx = canvas.getContext('2d');
    let mas = [];
    let count = 0;
    let timer;
    let x;
    let y;

    canvas.onclick = function (event) {
       x = event.offsetX;
       y = event.offsetY;
       x = Math.floor(x / 10);
       y = Math.floor(y / 10);
       mas[y][x] = 1;
       console.log(mas);
       drawField();
    };


    function goLife() {
      let n = 30;
      let m = 30;
      for (let i = 0; i < m; i++) {
        mas[i] = [];
        for (let j = 0; j < n; j++) {
          mas[i][j] = 0;
        }
      }
    }
    goLife();

    function drawField () {
      ctx.clearRect(0, 0, 300, 300);
      for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
          if (mas[i][j] == 1) {
            ctx.fillRect(j * 10, i * 10, 10, 10);
          }
        }
      }
    }

    function startLife() {
        // Моделлирование жизни
        let mas2 = [];
        for (let i = 0; i < 30; i++) {
            mas2[i] = [];
            for(let j = 0; j < 30; j++) {
                let neighbors = 0;
                if (mas[fpm(i) - 1][j] == 1){ // соседи вверху
                    neighbors++;
                }
                if (mas[i][fpp(j) + 1] == 1){ // соседи справа
                    neighbors++;
                }
                if (mas[fpp(i) + 1][j] == 1){ // соседи внизу
                    neighbors++;
                }
                if (mas[i][fpm(j) - 1] == 1){ // соседи слева
                    neighbors++;
                }
                if (mas[fpm(i) - 1][fpp(j) + 1] == 1){ // соседи вверху справа
                    neighbors++;
                }
                if (mas[fpp(i) + 1][fpp(j) + 1] == 1){ // соседи внизу справа
                    neighbors++;
                }
                if (mas[fpp(i) + 1][fpm(j) - 1] == 1){ // соседи внизу слева
                    neighbors++;
                }
                if (mas[fpm(i) - 1][fpm(j) - 1] == 1){ // соседи вверху слева
                    neighbors++;
                }
                (neighbors == 2 || neighbors == 3) ? mas2[i][j] = 1 : mas2[i][j] = 0;
            }
        }
        mas = mas2;
        drawField();
        count++;
        document.getElementById('count').innerHTML = count.toString();

        timer = setTimeout(startLife, 700);
    }

    function fpm(i) {
        if(i === 0) {
            return 30;
        } else {
            return i;
        }
    }
    function fpp(i) {
        if (i === 29) {
            return -1;
        } else {
            return i;
        }
    }

    document.getElementById('start').addEventListener('click', startLife);

  }

}
