import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PLAYERS } from "../players-data";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = PLAYERS;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  attack(player) {
    let opponent = this.players.filter(p => p != player)[0];
    if (player.life > 0 && opponent.life > 0) {
      opponent.life -= 20;
      this.checkWinner(player, opponent);
    }
  }

  checkWinner(player, opponent) {
    if (player.life > 0 && opponent.life == 0) {
      this.endGame(player);
    }
  }

  endGame(player) {
    this.openDialog(player.name);
  }

  reset() {
    for (let player of this.players) {
      player.life = 100;
    }
    this.snackBar.open('Jogo reiniciado', 'Yay!',{ duration: 1000 });
    return true;
  }

  openDialog(name): void {
    let dialogRef = this.dialog.open(GameResultsDialog, {
      width: '320px',
      data: { title: 'Vitória!', name: name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reset();
      }
    });
  }

}

@Component({
  selector: 'game-results-dialog',
  templateUrl: 'game-results-dialog.html',
})
export class GameResultsDialog {

  constructor(
    public dialogRef: MatDialogRef<GameResultsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
