import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'server-comm';
  tasks : any[];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').subscribe((json: any) => {
      this.tasks = json;
    }, (err: Error) => {});

    this._http.post('https://nztodo.herokuapp.com/api/task/?format=json', {title: '', description: '', group: '', when: (new Date()).toISOString})
  }
}
