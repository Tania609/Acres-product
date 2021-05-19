import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelect2Module } from "ng-select2";
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { ListingmapRoutingModule } from './listingmap-routing.module';
import { ListingmapComponent } from './listingmap.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ListingmapComponent, ContentComponent],
  imports: [
    CommonModule,
    ListingmapRoutingModule,
    SharedModule,
    NgbModule,
    NgSelect2Module,
    LeafletMarkerClusterModule,
    LeafletModule
  ]
})
export class ListingmapModule { }
