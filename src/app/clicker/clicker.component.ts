import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input points: number;

  @Output newPoints: EventEmitter<number> = new EventEmitter();

  increment() {
    this.points++;
    this.newPoints.emit(this.points)
  }

}
