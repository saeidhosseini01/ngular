import { Component, OnInit } from '@angular/core';
import { catchError, forkJoin, merge, of, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-join-fork',
  imports: [],
  templateUrl: './join-fork.component.html',
  styleUrl: './join-fork.component.css'
})


export class JoinForkComponent  implements OnInit {
  ngOnInit() {
     forkJoin({
      foo:of(1,2,3,4),
      bar:Promise.resolve(8),
      baz:timer(3000),
      ban:throwError("error").pipe(catchError(err=>of(err)))
     }).subscribe(val=>console.log("forkjoin",val))


    //  forkJoin([
    //   of(1,2,3,4),
    //   Promise.resolve(8),
    //   timer(3000)
    //  ]).subscribe(val=>console.log("array",val))

    // merge(
    //   of(1,2,3,4),
    //   Promise.resolve(8),
    //   timer(3000)
    //  ).subscribe(val=>console.log("array",val))
  }


}
