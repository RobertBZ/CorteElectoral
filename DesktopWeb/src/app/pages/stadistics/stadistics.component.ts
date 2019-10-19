import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { StadisticsService } from 'src/app/services/stadistics.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.css']
})
export class StadisticsComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  barChartData: ChartDataSets[];

  namesPartyPolitic : any = [];
  votesPartyPolitic : any = [];

  colorPartyPlotic : any = [];

  constructor(
    private stadisticsService : StadisticsService
  ) {
    this.barChartLabels = this.namesPartyPolitic;
    this.barChartData = [
      { data: this.votesPartyPolitic, label: 'Elecciones 2019', backgroundColor: this.colorPartyPlotic },
    ];
    this.getStadistics();
   }

  ngOnInit() {
    this.stadisticsService.getStadisticsVote();
  }

  getStadistics(){
    this.stadisticsService.responceStateVote().subscribe((data) => {
      data.content.forEach(candidate => {
        this.namesPartyPolitic.push(candidate.politicName);
        this.votesPartyPolitic.push(candidate.quantityVote);
        this.colorPartyPlotic.push(candidate.color);
      });
      console.log(data);
    }, (err) => {
      console.log(err)
    });
  }

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
