import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-trafic-capture';
  data: object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      data => this.data = data
    );
  }
}
