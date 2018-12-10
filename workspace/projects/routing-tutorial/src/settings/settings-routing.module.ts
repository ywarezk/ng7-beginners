import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path: '', component: ParentComponent, children: [
    {path: 'account', component: AccountComponent},
    {path: 'user', component: UserComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
