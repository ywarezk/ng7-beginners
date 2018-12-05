import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-tutorial';
  myFirst2wayBinding = 'first value';
  passToChild = 'send this to child from parent';

  randNumber = (): number => {
    return Math.random();
    // this.title = 'dgfhgfdh'
    // return 42;
  }

  sendTextToP = (): string => {
    return 'this will be in p';
  }

  assignNewValueToTitle = (event: Event, msg: string) => {
    this.title = 'title has now changed';
  }
}
