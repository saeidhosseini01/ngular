import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReversPipePipe } from './revers-pipe.pipe';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule,CommonModule,ReversPipePipe,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
