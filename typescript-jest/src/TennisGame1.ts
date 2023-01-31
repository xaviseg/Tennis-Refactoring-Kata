import { TennisGame } from "./TennisGame";
export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    switch (playerName) {
      case this.player1Name:
        this.player1Score += 1;
        break;
      case this.player2Name:
        this.player2Score += 1;
        break;
      default:
        throw new Error(`${playerName} is not valid player name`);
    }
  }
  getScore(): string {
    let score = "";
    let tempScore = 0;
    const isDraw = this.player1Score === this.player2Score;

    if (isDraw) {
      switch (this.player1Score) {
        case 0:
          return "Love-All";
        case 1:
          return "Fifteen-All";
        case 2:
          return "Thirty-All";
        default:
          return "Deuce";
      }
    }

    const isAdvantageOrWin = this.player1Score >= 4 || this.player2Score >= 4;

    if (isAdvantageOrWin) {
      const scoreDifference: number = this.player1Score - this.player2Score;
      if (scoreDifference === 1) {
        return "Advantage player1";
      } else if (scoreDifference === -1) {
        return "Advantage player2";
      } else if (scoreDifference >= 2) {
        return "Win for player1";
      } else {
        return "Win for player2";
      }
    }

    return `${this.scoreToText(this.player1Score)}-${this.scoreToText(
      this.player2Score
    )}`;
  }

  private scoreToText(tempScore: number) {
    switch (tempScore) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
      default:
        return new Error();
    }
  }
}
