import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';

import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { RoutingDashboardComponent } from './routing-dashboard/routing-dashboard.component';
import { ListCatalogComponent } from './list-catalog/list-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,

    SidebarComponent,
    ContentComponent,
    FormComponent,
    DepartmentlistComponent,
    DepartmentdetailComponent,
    RoutingDashboardComponent,
    ListCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
