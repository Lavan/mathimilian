import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimesService } from './services/times.service';
import { TimesComponent } from './times/times.component';
import { ProblemSelectorComponent } from './problem-selector/problem-selector.component';
import { MatButtonModule, MatButtonToggleModule, MatGridListModule } from '@angular/material';
import { ResultsService } from './services/results.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { GameComponent } from './game/game.component';
import { ProblemLengthComponent } from './problem-length/problem-length.component';
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [AppComponent, TimesComponent, ProblemSelectorComponent, ResultsComponent, GameComponent, ProblemLengthComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatRadioModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [TimesService, ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
