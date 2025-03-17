
import { Component, ElementRef, input, OnInit, ViewChild, viewChild } from '@angular/core';
import { from, fromEvent, map, of, tap } from 'rxjs';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-abserver-test',
  imports: [],
  templateUrl: './abserver-test.component.html',
  styleUrl: './abserver-test.component.css'
})

export class AbserverTestComponent  implements OnInit{
 
   result:any;
   result1:any;
   result2:any;
   @ViewChild('input',{}) input?:ElementRef;
  ngOnInit()  {
//this.http.get('assests/mockdata.json').subscribe(console.log)
fromEvent(this.input?.nativeElement,'input' ).pipe(

  tap(i=>console.log(i)),
  map(event=> event as InputEvent),
 
  
  tap(i=>console.log(i)),
).subscribe()

    of(['name','family','tell']).subscribe(t=>{
      this.result=t
    });
    of('name','family','tell').subscribe(t=>{
      this.result1=t
    });
    from(['name','family','tell']).subscribe(t=>{
      this.result2=t
    })
  }

}
