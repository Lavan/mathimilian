import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'maths-problem-length',
  templateUrl: './problem-length.component.html',
  styleUrls: ['./problem-length.component.css']
})
export class ProblemLengthComponent implements OnInit {
  @Output('timeType') timeTypeEvent = new EventEmitter<string>();
  @Output('numProblems') numProblemsEvent = new EventEmitter<string>();
  @Output('totalTime') totalTimeEvent = new EventEmitter<string>();

  _timeType: string;
  _numProblems: string;
  _totalTime: string;

  get timeType(): string {
    return this._timeType;
  };

  set timeType(value: string) {
    this._timeType = value;
    this.timeTypeEvent.emit(value);
  }

  get numProblems(): string {
    return this._numProblems;
  };

  set numProblems(value: string) {
    this._numProblems = value;
    this.numProblemsEvent.emit(value);
  }

  get totalTime(): string {
    return this._totalTime;
  };

  set totalTime(value: string) {
    this._totalTime = value;
    this.totalTimeEvent.emit(value);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
