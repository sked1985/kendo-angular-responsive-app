import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from '@progress/kendo-angular-label';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { MenusModule } from '@progress/kendo-angular-menu';
import { GridModule } from '@progress/kendo-angular-grid';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkComponent } from './work/work.component';
import { SettingsComponent } from './settings/settings.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { TaskviewComponent } from './taskview/taskview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkComponent,
    SettingsComponent,
    LayoutsComponent,
    TaskviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    IndicatorsModule,
    IconsModule,
    InputsModule,
    NavigationModule,
    LabelModule,
    MenusModule,
    ButtonsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
