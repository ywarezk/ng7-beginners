import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  displayName$: Observable<string>;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Observable<ParamMap> => Observable<string>

    this.displayName$ = this._activatedRoute.paramMap.pipe(
      map( (params: ParamMap) => {
        return params.get('name');
      })
    );
  }

}
