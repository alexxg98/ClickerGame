import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Clicker Game';
  Points = 0;

  pointsHandler(points: number) {
    this.Points = points;
  }
}
