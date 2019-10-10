import { Injectable } from '@angular/core';
import { Utils } from '../utils';
import { Question } from './question';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { isArrayLike } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  public get maxTable(): number {
    return this._maxTable;
  };

  constructor() {
    this.setMaxTable(12);
  }

  public readonly question$ = new Subject<Question>();
  public question: Question;

  public readonly tableToggles$ = new Subject<boolean[]>();
  public tableToggles: boolean[] = [];

  private _maxTable = 0;
  public readonly selectedTables$ = new Subject<number[]>();
  public selectedTables: number[];

  public readonly anySelectedTables$ : Observable<boolean> = this.selectedTables$.pipe(map(val => isArrayLike(val) && val.length > 0));

  private static timesString(first, second): string {
    if (Math.random() < .5) {
      return `${first} ∙ ${second}`;
    } else {
      return `${second} ∙ ${first}`;
    }
  }

  toggleTable(table: number) {
    --table;
    this.tableToggles[table] = !this.tableToggles[table];
    this.selectedTables = <number[]>this.tableToggles.map((x, idx) => x ? idx + 1 : x).filter(x => !!x);
    this.tableToggles$.next(this.tableToggles);
    this.selectedTables$.next(this.selectedTables);
  }

  private setMaxTable(tables: number) {
    this._maxTable = tables;
    this.tableToggles = Utils.copyFill(this.tableToggles, tables, false);
    this.selectedTables = <number[]>this.tableToggles.map((x, idx) => x ? idx + 1 : x).filter(x => !!x);
    this.tableToggles$.next(this.tableToggles);
    this.selectedTables$.next(this.selectedTables);
  }

  generateQuestion()/*: Question | undefined */ {
    this.question = this.generateTableQuestion(this.selectedTables[Utils.getRandomInt(this.selectedTables.length)]);
    this.question$.next(this.question);
  }

  generateTableQuestion(table: number): Question {
    const other = Utils.getRandomInt(this.maxTable) + 1;
    const startLength = Utils.getRandomInt(4);
    const start = Math.min(Math.max(other - startLength, 1), this.maxTable - 3);

    if (Math.random() < .5) {
      const question = TimesService.timesString(table, other);
      const answers = [];
      let correct: number;
      for (let i = 0; i < 4; ++i) {
        if (start + i === other) {
          correct = i;
        }
        answers.push((start + i) * table);
      }
      return { answers, correct, question };
    } else {
      const question = (table * other).toString();
      const answers = [];
      let correct: number;
      for (let i = 0; i < 4; ++i) {
        if (start + i === other) {
          correct = i;
        }
        answers.push(TimesService.timesString(start + i, table));
      }
      return { answers, correct, question };
    }
  }
}
