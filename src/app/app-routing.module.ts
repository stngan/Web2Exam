import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListCatalogComponent } from './list-catalog/list-catalog.component';
// import { RoutingDashboardComponent } from './routing-dashboard/routing-dashboard.component';

const routes: Routes = [
  // { path: 'routing-dashboard', component: RoutingDashboardComponent},
  // { path: 'list-catalog', component: ListCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  // RoutingDashboardComponent,

]
