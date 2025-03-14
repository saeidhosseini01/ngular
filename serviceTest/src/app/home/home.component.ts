import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { TODO } from '../todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [MatTabsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent implements OnInit {
  public http$?: Observable<TODO[]>;
  public doneTodo? :TODO[];
  public undoneTodo? :TODO[];
  public ngOnInit() {
    this.http$ = new Observable((observe) => {

      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {

          return res.json();
        }).then((body) => {
          observe.next(body);
          observe.complete();
        }).catch((err) => {
          observe.error(err);
        })
    });

    this.http$.subscribe((val)=>{
      this.doneTodo=val.filter(i=>i.completed==true)
      this.undoneTodo=val.filter(i=>i.completed==false)
    })
  }

}
