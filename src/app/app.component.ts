import { Component } from '@angular/core';
import { SankeyController, Flow } from 'chartjs-chart-sankey';
import { Chart } from 'chart.js';
Chart.register(SankeyController, Flow);


const colors = {
  a: 'red',
  b: 'green',
  c: 'blue',
  d: 'gray',
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sankey-chart-angular13';

  canvas = document.getElementById('chart') as HTMLCanvasElement;
  ctx = this.canvas.getContext('2d');

  chart = new Chart(this.ctx!, {
    type: 'sankey',
    data: {
      datasets: [
        {
          label: 'My sankey',
          data: [
            { from: 'a', to: 'b', flow: 10 },
            { from: 'a', to: 'c', flow: 5 },
            { from: 'b', to: 'c', flow: 10 },
            { from: 'd', to: 'c', flow: 7 },
          ],
         
          colorMode: 'gradient', // or 'from' or 'to'
          /* optional labels */
          labels: {
            a: 'Label A',
            b: 'Label B',
            c: 'Label C',
            d: 'Label D',
          },
          /* optional priority */
          priority: {
            b: 1,
            d: 0,
          },
          /* optional column overrides */
          column: {
            d: 1,
          },
          size: 'max', // or 'min' if flow overlap is preferred
        },
      ],
    },
  });
}
