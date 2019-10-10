import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _correct: number;
  private _answers: number;
  private _startTime: number;

  public get correct(): number {
    return this._correct;
  }

  public get answers(): number {
    return this._answers;
  }

  public get startTime(): number {
    return this._startTime;
  }

  constructor() {
    this.reset();
  }

  reset() {
    this._correct = 0;
    this._answers = 0;
    this._startTime = Date.now();
  }

  increaseCorrect() {
    ++this._correct;
  }

  increaseAnswers() {
    ++this._answers;
  }
}
