import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
console.log('a')
  }

  status = [
    {cor: '#008a49', label: 'Novos'},
    {cor: '#038fab', label: 'Faturados'},
    {cor: '#ff7333', label: 'Separados'},
    {cor: '#db008c', label: 'Enviados'},
    {cor: '#b9bf00', label: 'Entregues'},
  
  ]
  pie = new Chart({
    title: {
      text: 'Total de pedidos por status'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
          return 'The value for <b>' + this.key +
              '</b> is <b>' + this.y + '</b>';
      }
    },
    series: [
      {
        name: 'Pedidos por status',
        type: 'pie',
        data: [ 
          {
            color: this.status[0].cor,
            name: this.status[0].label,
            y: 76
          },
          {
            color: this.status[1].cor,
            name: this.status[1].label,
            y: 98
          },
          {
            color: this.status[2].cor,
            name: this.status[2].label,          
            y: 12
          },
          {
            color: this.status[3].cor,
            name: this.status[3].label,     
            y: 32
          },
          {
            color: this.status[4].cor,
            name: this.status[4].label,     
            y: 11
          },
       ]
      }
    ]
  });


  column = new Chart({
    title: {
      text: 'Evolução no período'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
          return 'Surgiram ' + this.y + ' categorizados como ' + this.series.name + ' no dia ' + this.key;
      }
    },
    xAxis: {
      categories: ['Seg, 24/05', 'Ter, 25/05', 'Qua, 26/05', 'Qui, 27/05', 'Sex, 28/05'],
    },
    series: [
      {
        type: 'column',
        color: this.status[0].cor,
        name: this.status[0].label, 
        data: [ 
          {
            name: 'Seg, 24/05',
            y: 76
            
          },
          {
            name: 'Ter, 25/05',
            y: 98
          },
          {
            name: 'Qua, 26/05',
            y: 12
          },
          {
            name: 'Qui, 27/05',
            y: 32
          },
          {
            name: 'Sex, 28/05',
            y: 11
          },
       ]
      },
      {
        type: 'column',
        color: this.status[1].cor,
        name: this.status[1].label, 
        data: [ 
          {
            name: 'Seg, 24/05',
            y: 10
          },
          {
            name: 'Ter, 25/05',
            y: 1
          },
          {
            name: 'Qua, 26/05',
            y: 2
          },
          {
            name: 'Qui, 27/05',
            y: 0
          },
          {
            name: 'Sex, 28/05',
            y: 13
          },
       ]
      },
      {
        type: 'column',
        color: this.status[2].cor,
        name: this.status[2].label, 
        data: [ 
          {
            name: 'Seg, 24/05',
            y: 15
          },
          {
            name: 'Ter, 25/05',
            y: 10
          },
          {
            name: 'Qua, 26/05',
            y: 9
          },
          {
            name: 'Qui, 27/05',
            y: 8
          },
          {
            name: 'Sex, 28/05',
            y: 4
          },
       ]
      },
      {
        type: 'column',
        color: this.status[3].cor,
        name: this.status[3].label, 
        data: [ 
          {
            name: 'Seg, 24/05',
            y: 3
          },
          {
            name: 'Ter, 25/05',
            y: 5
          },
          {
            name: 'Qua, 26/05',
            y: 1
          },
          {
            name: 'Qui, 27/05',
            y: 7
          },
          {
            name: 'Sex, 28/05',
            y: 2
          },
       ]
      },
      {
        type: 'column',
        color: this.status[4].cor,
        name: this.status[4].label, 
        data: [ 
          {
            name: 'Seg, 24/05',
            y: 79
          },
          {
            name: 'Ter, 25/05',
            y: 57
          },
          {
            name: 'Qua, 26/05',
            y: 12
          },
          {
            name: 'Qui, 27/05',
            y: 43
          },
          {
            name: 'Sex, 28/05',
            y: 67
          },
       ]
      },
    ]
  });

  bar = new Chart({
    title: {
      text: 'Predidos por status'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
          return 'The value for <b>' + this.key +
              '</b> is <b>' + this.y + '</b>';
      }
    },
    series: [
      {
        name: 'Pedidos por status',
        type: 'pie',
        data: [ 
          {
            color: '#003f5c',
            name: 'Novos',
            y: 76
          },
          {
            color: '#444e86',
            name: 'Faturados',
            y: 98
          },
          {
            color: '#955196',
            name: 'Separados',
            y: 12
          },
          {
            color: '#dd5182',
            name: 'Enviados',
            y: 32
          },
          {
            color: '#ff6e54',
            name: 'Entregues',
            y: 11
          },
       ]
      }
    ]
  });


   
  
}
