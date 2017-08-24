import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';

  
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}