import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ProfileComponent, ContentComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
