import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-pipetest',
  imports: [],
  templateUrl: './pipetest.component.html',
  styleUrl: './pipetest.component.css'
})




export class PipetestComponent implements OnInit {





  @ViewChild('input',{static:true}) input? :ElementRef
  ngOnInit() {
   
    // fromEvent(document,'click').pipe(
    //  map(event=>event as MouseEvent),
    //  tap(i=>console.log(i)),
    //  map(item=> {
    //   return{
    //     x:item.offsetX,
    //     y:item.offsetY
    //   }
    //  }),
    //  take(3),
    //  takeWhile(t=>t.x>1000),
    //  tap(item=>console.log(item))
    // ).subscribe()

//this.http.get('assests/mockdata.json').subscribe(console.log)
fromEvent(this.input?.nativeElement,'input' ).pipe(

  tap(i=>console.log(i)),
  map(event=> event as InputEvent),
  map(item=>(item.target as HTMLInputElement).value),
  
  tap(i=>console.log(i)),
).subscribe()

  }



}
