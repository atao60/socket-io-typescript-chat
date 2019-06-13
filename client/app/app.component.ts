import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Typescript Chat';

  ngOnInit(): void {
  }

  private initModel(): void {
  }
}
