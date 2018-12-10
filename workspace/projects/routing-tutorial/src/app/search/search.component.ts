import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// /search?q=<what user typed>

@Component({
  selector: 'app-search',
  template: `
    <form>
      <input [value]="searchFromUrl" type="search" (input)="addQueryParams($event.target.value)" />

      {{searchFromUrl}}
    </form>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFromUrl : string = '';

  constructor(private _router: Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.searchFromUrl = params.get('q');
    })
  }

  addQueryParams = (value: string) => {
    // navigate the user here to /search?<search input>
    this._router.navigateByUrl(`/search?q=${value}`);
  }

}
