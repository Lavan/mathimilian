import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';
import { TimesService } from '../services/times.service';

@Component({
  selector: 'maths-problem-selector',
  templateUrl: './problem-selector.component.html',
  styleUrls: ['./problem-selector.component.scss']
})
export class ProblemSelectorComponent implements OnInit {
  tables: number[] = [];

  constructor(private timesService: TimesService, public resultsService: ResultsService) {

    for (let i = 1; i <= this.timesService.maxTable; ++i) {
      this.tables.push(i);
    }
  }

  ngOnInit() {
  }

  selectTable(table: number) {
    this.timesService.toggleTable(table + 1);
    this.timesService.generateQuestion();
  }
}
