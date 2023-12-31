import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, Colors } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
// import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})



export class PieChartComponent implements OnInit, OnChanges {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input()
  labels : any | undefined;

  @Input()
  type : any | undefined;

  @Input()
  data :any | undefined;

  @Input()
  load : boolean = true;

  

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    color:'#000',
    scales:{
      x:{
        ticks:{
          display: false
        } 
      }
    },
    plugins: {
    
      legend: {
        display: true,
        position: 'left',
        labels: {
          font: {
            family :  'Inconsolata',
            // size: 14,
          }
        }
      },
      tooltip:{
        titleColor: '#5800f9',
        bodyColor: '#5800f9',
        titleFont: {
          family: 'Inconsolata',
        },
        bodyFont:{
          family: 'Inconsolata',
        },
        backgroundColor: '#fff',

      },

    }
  };
  


  // Pie

  public pieChartType: ChartType = 'doughnut';

  // delayed : boolean = false;
  public pieChartData: ChartData<'doughnut', number[], string | string[]> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [
        'rgba(244, 49, 0, .8)',
        ' rgba(87, 0, 250, .8) ',
        'rgba(244, 170, 0, .8)',
        'rgba(255, 0, 0, .8)',
        'rgba(255, 152, 0, .8)',
        'rgba(0, 255, 255, .8)',
      ],
      hoverBackgroundColor: [
        'rgba(244, 49, 0, 1)',
        ' rgba(87, 0, 250, 1) ',
        'rgba(244, 170, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(255, 152, 0, 1)',
        'rgba(0, 255, 255, 1)',
      ],
 
      borderColor: '#000',
      borderWidth: 5,
      hoverOffset: 9,

    
    }]
  };


  constructor() { }
  
  ngOnInit(): void {
    // console.log(this.data)
    // console.log(this.labels)
  }
  
  
  ngOnChanges(): void {
    // console.log(this.labels)
    // console.log(this.data)
    // console.log(this.load)
    if (this.data && this.labels && this.load == false) {
      this.grafica();
    }
  }

  grafica(){
    this.pieChartData = {
      labels: this.labels,
      datasets: [{
        type: this.type,
        data: this.data,
        backgroundColor: [
          'rgba(244, 49, 0, .8)',
          ' rgba(87, 0, 250, .8) ',
          'rgba(244, 170, 0, .8)',
          'rgba(255, 0, 0, .8)',
          'rgba(255, 152, 0, .8)',
          'rgba(0, 255, 255, .8)',
        ],
        hoverBackgroundColor: [
          'rgba(244, 49, 0, 1)',
          ' rgba(87, 0, 250, 1) ',
          'rgba(244, 170, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 152, 0, 1)',
          'rgba(0, 255, 255, 1)',
        ],
        hoverBorderColor: '#fff',
        borderColor: '#fff',
        borderWidth: 5,
        hoverOffset: 9,
  
      
      }]
    }
  }



}
