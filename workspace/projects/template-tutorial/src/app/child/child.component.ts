import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

declare var require : any

@Component({
  selector: 'by-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('helloWorld') public helloAttr;
  @Input() public fooAttr;

  @Output('clickButton') public sendToParentEvent: EventEmitter<string> = new EventEmitter()


  public imgFromChildClass = require('./logo.png');


  constructor() { }

  ngOnInit() {
  }

  /**
   * send event to the parent
   */
  sendToParent = () => {
    this.sendToParentEvent.emit('this will arrive in $event');
  }

}
