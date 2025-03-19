import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';




@Component({
  selector: 'app-switch-map',
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent implements OnInit {
  constructor (private service:UserserviceService ){}
  @ViewChild ('termsearch',{static :true}) termSearch?:ElementRef;
  ngOnInit() {
    fromEvent(this.termSearch?.nativeElement,'keyup').pipe(
      debounceTime(300),
      map(event => event as KeyboardEvent),
      map(event=>(event.target as HTMLInputElement).value),
      distinctUntilChanged(),
      tap(i=>console.log(i))
    ).subscribe()
  }
  public GetAlluser(){
    return this.service.getAllUser();
  }



}
