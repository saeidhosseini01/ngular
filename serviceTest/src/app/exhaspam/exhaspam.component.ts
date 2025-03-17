import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, delay, exhaustMap, fromEvent, mergeMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-exhaspam',
  imports: [],
  templateUrl: './exhaspam.component.html',
  styleUrl: './exhaspam.component.css'
})


export class ExhaspamComponent implements OnInit{
  
  @ViewChild('editebutton',{static :true}) editebutton?:ElementRef;
  constructor (private http:HttpClient){}
  ngOnInit() {
    
    of(1,2,3,4,5,6,7,8,9).pipe(
mergeMap((val)=>this.pathpultiplPost(val)),
tap(i=>console.log(i))
    ).subscribe(console.log);
    fromEvent(this.editebutton?.nativeElement,'click').pipe(
      tap(()=>console.log('clicked')),
     concatMap(()=>this.pathsingelPost()),
      tap(i=>console.log(i))).subscribe()
    
  }

/**
 *  pathpultiplPost
postId number */
public  pathpultiplPost(postId : number) {
  
let body=JSON.stringify({
  body:"test123",
  title:"test123"
})

let headers=new HttpHeaders({'Content-type':'application/json; charset=UTF-8'});
let options={headers:headers};

return this.http.patch('https://jsonplaceholder.typicode.com/posts/${posts}',body,options);
}
public  pathsingelPost() {
  
  let body=JSON.stringify({
    body:"test123",
    title:"test123"
  })
  
  let headers=new HttpHeaders({'Content-type':'application/json; charset=UTF-8'});
  let options={headers:headers};
  
  return this.http.patch('https://jsonplaceholder.typicode.com/posts/${posts}',body,options).pipe(
    delay(3000)
  )
  }
}