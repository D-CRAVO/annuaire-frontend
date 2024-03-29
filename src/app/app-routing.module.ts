import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

const routes: Routes = [
  {path:'user/:id', component: UserDetailsComponent},
  {path:'user/add', component: AddUserComponent},
  {path:'edit/user/:id', component: EditUserComponent},
  {path:'accueil', component: AcceuilComponent},
  {path:'users', component: UserListComponent},
  {path:'**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
