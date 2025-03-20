import { Component, OnInit } from '@angular/core';
import { concatAll, delay, Observable, of, tap } from 'rxjs';
import { IPerson } from '../person';
import { IAddress } from '../IAddress';

@Component({
  selector: 'app-compair',
  imports: [],
  templateUrl: './compair.component.html',
  styleUrl: './compair.component.css'
})

export class CompairComponent implements OnInit{
  ngOnInit() {
    const obs$1=of(1,2).pipe(delay(4000));
    const obs$2=of(3,4).pipe(delay(2000));
    const obs$3=of(5,6).pipe(delay(3000));
    const obs$4=of(7,8).pipe(delay(1000));
    //const res1=of(obs$1,obs$2,obs$3,obs$4).pipe(tap(i=>console.log(i))).subscribe();
   const res2=of(obs$1,obs$2,obs$3,obs$4).pipe(concatAll()).subscribe(i=>console.log(i));
  }
public persons:IPerson[]=[]
public addresss:IAddress[]=[]
  public GetAllAddress(userid:number):Observable<IAddress>{
const add=this.persons.findIndex(u=>u.id==userid)
return of(this.addresss[add])
  }
}
