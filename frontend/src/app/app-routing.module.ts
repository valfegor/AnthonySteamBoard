import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';



//guard

import { AuthGuard } from "../../src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: '', //en la ruta inicial de la pagina ''
    component: LoginComponent, //cargara el componente de login
    pathMatch: 'full', //debe escribir completa la url
  },
  {
    path: 'listTask',
    component: ListTaskComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'SingUp',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'listUser',
    component: ListUserComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'registerUser',
    component: RegisterComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
