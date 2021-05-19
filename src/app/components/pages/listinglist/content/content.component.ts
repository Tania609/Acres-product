import { Component, OnInit } from '@angular/core';
import listing from '../../../../data/listings.json';
import category from '../../../../data/category.json';
import agents from '../../../../data/agents.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // pagination
  page: number = 1;
  public listing = listing;
  public category = category;
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
  }
  

}
