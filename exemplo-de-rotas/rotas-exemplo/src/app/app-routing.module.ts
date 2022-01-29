/**
 * @author lucasDEV20
 *  este modulo e reposavel por percorrer as rotas dentro
 * dos componentes que vao compor o aplicatvo
 */
 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { LoginComponent } from './pages/login/login.component';
 import { SignupComponent } from './pages/signup/signup.component';
 import { MasterComponent } from './pages/master/master.component';
 import { HomeComponent } from './pages/home/home.component';
 import { ReportsComponent } from './pages/reports/reports.component';
 
 const routes: Routes = [
     { path: 'login', component: LoginComponent },
     { path: 'signup', component: SignupComponent },
     {
         path: 'master',
         component: MasterComponent,
         children: [
         { path: 'home', component: HomeComponent },
         { path: 'reports', component: ReportsComponent },
         ],
     },
 ];
 
 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })
 export class AppRoutingModule { }