import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  operation: string[] = ['0', '0'];
  number = '';
  resultat: number;
  info: string;

  clickCalculatrice() {
    if (this.operation[0] === '0') {
      this.operation[0] = this.number;
    } else {
      this.operation[1] = this.number;
    }
    this.number = '';
  }

  clickDel() {
    this.operation = ['0', '0'];
    this.number = '';
    this.resultat = null;
    this.info = null;
  }

  clickNumber(nb: string) {
    this.number += nb;
  }

  additionner() {
    this.resultat = +this.operation[0] + +this.operation[1];
    this.operation[0] = this.resultat + '';
  }

  soustraire() {
    this.resultat = +this.operation[0] - +this.operation[1];
    this.operation[0] = this.resultat + '';
  }

  multiplier() {
    this.resultat = +this.operation[0] * +this.operation[1];
    this.operation[0] = this.resultat + '';
  }

  diviser() {
    if (+this.operation[1] !== 0) {
      this.resultat = +this.operation[0] / +this.operation[1];
      this.operation[0] = this.resultat + '';
    } else {
      this.info = 'Impossible de diviser par 0!';
    }
  }
}
