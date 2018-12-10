import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [AccountComponent, UserComponent, ParentComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
