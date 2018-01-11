import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatGridListModule, MatDialogModule,
  MatCardModule, MatProgressBarModule, MatToolbarModule,
  MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {GameResultsDialog, PlayersComponent} from './players/players.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    GameResultsDialog
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatGridListModule,
    MatDialogModule, MatCardModule, MatProgressBarModule, MatToolbarModule,
    MatSnackBarModule
  ],
  entryComponents: [ GameResultsDialog ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
