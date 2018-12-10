import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var window: any;
declare var require: any;
declare var $: any;

// <button class="ladda-button" [isLoading]="true | false"></button>

@Directive({
  selector: 'button.ladda-button'
})
export class LaddaDirective implements OnInit {
  private _isLoading: boolean = false;
  private _laddaInstance: any;

  // when the isLoading input is changing
  @Input() public set isLoading(value: boolean) {
    this._isLoading = value;

    // this will run so we can start or stop ladda spinner in here
    if (value) {
      this._laddaInstance.start();
    } else {
      this._laddaInstance.stop();
    }
  }

  public get isLoading(): boolean {
    return this._isLoading
  }

  constructor(private _element: ElementRef) { 
    window.Ladda = require('ladda/js/ladda');
  }

  ngOnInit() {
    this._laddaInstance = window.Ladda.create( this._element.nativeElement );
  }

}
