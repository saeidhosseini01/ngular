import { Component, OnInit } from '@angular/core';
import { fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-pipetest',
  imports: [],
  templateUrl: './pipetest.component.html',
  styleUrl: './pipetest.component.css'
})




export class PipetestComponent implements OnInit {
  ngOnInit() {
   
    fromEvent(document,'click').pipe(


     map(event=>event as MouseEvent),

     tap(i=>console.log(i)),
     map(item=> {
      return{
        x:item.offsetX,
        y:item.offsetY
      }
     }),
     tap(item=>console.log(item))
    ).subscribe()
  }



}
