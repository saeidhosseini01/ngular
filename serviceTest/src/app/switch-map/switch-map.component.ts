import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { concatAll, debounceTime, distinctUntilChanged, fromEvent, map, Observable, of, switchMap, tap } from 'rxjs';
import { IUser } from '../user';




@Component({
  selector: 'app-switch-map',
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent implements OnInit {
  constructor (private service:UserserviceService ){}
   public users$?:Observable<IUser[]>;
  @ViewChild ('termsearch',{static :true}) termSearch?:ElementRef;
  ngOnInit() {
  const usersall=  fromEvent(this.termSearch?.nativeElement,'keyup').pipe(
      debounceTime(300),
      map(event => event as KeyboardEvent),
      map(event=>(event.target as HTMLInputElement).value),
      distinctUntilChanged(),
      switchMap(u=>this.GetAlluser()),
      tap(i=>console.log(i))
    )
    this.users$=of(this.GetAlluser(),usersall).pipe(concatAll());
  }
  public GetAlluser(){
    return this.service.getAllUser();
  }



}
