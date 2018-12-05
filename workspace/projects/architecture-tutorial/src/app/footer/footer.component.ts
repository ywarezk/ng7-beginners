import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'by-footer',
  template: `
    <footer>
      <h1>hello footer</h1>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
