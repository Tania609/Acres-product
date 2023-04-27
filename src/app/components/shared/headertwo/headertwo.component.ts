import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headertwo',
  templateUrl: './headertwo.component.html',
  styleUrls: ['./headertwo.component.css']
})
export class HeadertwoComponent implements OnInit {

  constructor() { }
  // navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }

  ngOnInit(): void {
  }

}
