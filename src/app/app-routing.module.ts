import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'work', component: WorkComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'taskview', component: TaskviewComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
