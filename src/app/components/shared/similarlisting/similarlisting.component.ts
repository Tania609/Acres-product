import { Component, OnInit } from '@angular/core';
import listing from '../../../data/listings.json';
import agents from '../../../data/agents.json';

@Component({
  selector: 'app-similarlisting',
  templateUrl: './similarlisting.component.html',
  styleUrls: ['./similarlisting.component.css']
})
export class SimilarlistingComponent implements OnInit {

  constructor() { }
  public listing = listing;
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
