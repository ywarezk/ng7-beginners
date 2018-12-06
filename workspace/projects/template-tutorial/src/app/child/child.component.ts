import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

declare var require : any

@Component({
  selector: 'by-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('helloWorld') public helloAttr: string;
  @Input() public fooAttr : string;

  @Output('clickButton') public sendToParentEvent: EventEmitter<string> = new EventEmitter()

  @Output('myEvent') public sendEventToParent: EventEmitter<Event> = new EventEmitter()


  public imgFromChildClass = require('./logo.png');


  constructor() { }

  ngOnInit() {
  }

  /**
   * send event to the parent
   */
  sendToParent = (event) => {
    this.sendToParentEvent.emit('this will arrive in $event');
    this.sendEventToParent.emit(event);
  }

  callMeFromTRV = (): string => {
    return 'hello trv';
  }

}
