import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Route[] = [
  {path: 'product-list', component:ProductListComponent},
  {path: 'search-form', component:SearchFormComponent},
  {path: 'front-page', component:FrontPageComponent},
  {path: '', redirectTo:'front-page', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
