import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { map, Observable, shareReplay } from 'rxjs';
import { TODO } from '../todo';
import { CommonModule } from '@angular/common';
import { ClickingComponent } from '../clicking/clicking.component';
import { AbserverTestComponent } from '../abserver-test/abserver-test.component';
import { PipetestComponent } from '../pipetest/pipetest.component';
@Component({
  selector: 'app-home',
  imports: [MatTabsModule,CommonModule,ClickingComponent,AbserverTestComponent,PipetestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  public http$?: Observable<TODO[]>;
  public doneTodo$? :Observable<TODO[]>;
  public undoneTodo$? :Observable<TODO[]>;
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
    this.http$=this.http$.pipe(
      shareReplay()
    )
    this.doneTodo$=this.http$.pipe(
      map((todo)=> todo.filter(t=>t.completed==true))
    )
    this.undoneTodo$=this.http$.pipe(
      map((todo)=> todo.filter(t=>t.completed==false))
    )
  }

}
