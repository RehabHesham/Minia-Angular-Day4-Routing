import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ProductsComponent } from './components/core/products/products.component';
import { ContactsComponent } from './components/core/contacts/contacts.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { ProductFormComponent } from './components/core/product-form/product-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:''},
  {path:'products',component:ProductsComponent},
  {path:'products/details/:id',component:ProductDetailsComponent},
  {path:'products/edit/:id',component:ProductFormComponent},
  {path:'products/new',component:ProductFormComponent},
  {path:'contacts',component:ContactsComponent},
  {path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
