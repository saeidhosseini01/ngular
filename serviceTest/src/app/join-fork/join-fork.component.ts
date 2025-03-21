import { Component, OnInit } from '@angular/core';
import { catchError, forkJoin, map, merge, Observable, of, throwError, timer, zip } from 'rxjs';
import { PersonService } from '../person.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-join-fork',
  imports: [],
  templateUrl: './join-fork.component.html',
  styleUrl: './join-fork.component.css'
})


export class JoinForkComponent  implements OnInit {
 
 
 public s!:boolean
 constructor(private userservice:UserserviceService){}
  ngOnInit() {
    let name=of('saeed','alireza','maryam')
    let family=of('hoseini','hosseini','hosseiny')
    let age=of('34','7','23')
    zip(name,family,age).pipe(
map(([name,family,age])=> {return{name,family,age}} 
)
    ).subscribe(console.log)

    // const user$:Observable<any>[]=[]


    // for(let i=0;i<11;i++){
    //   user$.push(this.userservice.getuserById(i).pipe(catchError(t=> of(t))
    //   ))
    // }
    // forkJoin(user$).subscribe(console.log)
    //  forkJoin({
    //   foo:of(1,2,3,4),
    //   bar:Promise.resolve(8),
    //   baz:timer(3000),
    //   ban:throwError("error").pipe(catchError(err=>of(err)))
    //  }).subscribe(val=>console.log("forkjoin",val))

// const ff=(...args)=>{
//   forkJoin(args)
// }
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
