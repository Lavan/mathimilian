import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimesService } from '../services/times.service';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'maths-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private running = false;
  private valid: Observable<boolean>;
  timeType: string;
  numProblems: string;
  totalTime: string;

  constructor(private timesService: TimesService, private resultsService: ResultsService) {
  }

  ngOnInit() {
  }

  startGame() {
    this.running = true;
    this.resultsService.reset(this.timeType, this.numProblems, this.totalTime);
  }
}
