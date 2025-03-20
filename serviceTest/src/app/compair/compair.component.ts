import { Component, OnInit } from '@angular/core';
import { concatAll, delay, map, merge, mergeAll, mergeMap, Observable, of, switchAll, tap, toArray } from 'rxjs';
import { IPerson } from '../person';
import { IAddress } from '../IAddress';
import { IUser } from '../user';

@Component({
  selector: 'app-compair',
  imports: [],
  templateUrl: './compair.component.html',
  styleUrl: './compair.component.css'
})

export class CompairComponent implements OnInit{
  public users:IPerson[]=[{
    id:0,
    name:'saeed'
  },
{
  id:1,
  name:'ali'
}]
public addr:IAddress[]=[{
  city:'ney',
  contry:'iran',
  state:'good',
  userId:0,

},
{
  city:'berlin',
  contry:'germany',
  state:'sergood',
  userId:1,
  
}]
  ngOnInit() {
    // const obs$1=of(1,2).pipe(delay(4000));
    // const obs$2=of(3,4).pipe(delay(2000));
    // const obs$3=of(5,6).pipe(delay(3000));
    // const obs$4=of(7,8).pipe(delay(6000));
    //const res1=of(obs$1,obs$2,obs$3,obs$4).pipe(tap(i=>console.log(i))).subscribe();
   //const res2=of(obs$1,obs$2,obs$3,obs$4).pipe(concatAll ()).subscribe(i=>console.log(i));
   //const res3=of(obs$1,obs$2,obs$3,obs$4).pipe(mergeAll ()).subscribe(i=>console.log(i));
   //const res4=of(obs$1,obs$2,obs$3,obs$4).pipe(switchAll ()).subscribe(i=>console.log(i));
// const obs$5=of(of(of(10,2)));
// const res3$=obs$5.pipe(
//   mergeMap(i=>i),
//   mergeMap(n=>n),
// ).subscribe(console.log)

 // }


let persons$:Observable<Observable<Observable<IPerson[]>>>;
let adderss$:Observable<IAddress[]>;
persons$=of(of(of(this.users)))
const addre=persons$.pipe(
  mergeMap(i=>i),
  mergeMap(i=>i),
  mergeMap(i=>i),
  mergeMap(user=> {
    const add:Observable<IAddress>=this.GetAllAddress(user.id);
    return add
  }),
  map(i=>{
    return {...i,user:this.users[i.userId].name}
  }),
  toArray(),
  tap(o=>console.log("sddddddddd",o)),

).subscribe(console.log)

  }
  public GetAllAddress(userid:number):Observable<IAddress>{
const add=this.users.findIndex(u=>u.id==userid)
return of(this.addr[add])
  }
}
