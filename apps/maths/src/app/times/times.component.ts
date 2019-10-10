import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { TimesService } from '../services/times.service';
import { Question } from '../services/question';
import { ResultsService } from '../services/results.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'maths-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit, OnDestroy {

  @Input() timeType: string;
  @Input() numProblems: string;
  @Input() totalTime: string;

  question: Question;
  private stop$ = new Subject<void>();

  constructor(private timesService: TimesService, private resultsService: ResultsService) {
    this.resultsService.reset();
    this.resultsService.setTimeType(this.timeType);
    this.resultsService.setNumProblems(this.numProblems);
    this.resultsService.setTotalTime(this.totalTime);
    this.timesService.question$
      .pipe(takeUntil(this.stop$))
      .subscribe(question => this.question = question);
    timesService.generateQuestion();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.stop$.next();
  }

  answer(answer: any) {
    this.resultsService.increaseAnswers();
    if (answer === this.question.correct) {
      const done = this.resultsService.increaseCorrect();
    }
    this.timesService.generateQuestion();
  }
}
