import { Component, OnInit } from '@angular/core';
import { fromEvent, map, take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-clicking',
  imports: [],
  templateUrl: './clicking.component.html',
  styleUrl: './clicking.component.css'
})


export class ClickingComponent implements OnInit {
  x: number = 1;
  y: number = 1;
  public ngOnInit() {
    fromEvent(document, 'click').pipe(
      map(event => event as MouseEvent),
      map(item => {
        return {
          x: item.offsetX,
          y: item.offsetY
        }

      }),
      takeWhile(item => item.x > 1),
      take(5)

    ).subscribe(item=>{
      this.x=item.x,
      this.y=item.y
    });
  }

}
