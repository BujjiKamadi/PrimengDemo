import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import { ChildRouteDemoComponent } from './child-route-demo/child-route-demo.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FormComponent,
    FormBuilderComponent,
    TabDemoComponent,
    ChildRouteDemoComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RadioButtonModule,InputTextModule,DropdownModule,FormsModule,BrowserAnimationsModule,
    AutoCompleteModule,ReactiveFormsModule,TabViewModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
