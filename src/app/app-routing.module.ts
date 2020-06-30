import { CartComponent } from './cart/cart.component';
import { TulsiAmritComponent } from './products/tulsi-amrit/tulsi-amrit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZomocidSyrupComponent } from './products/zomocid-syrup/zomocid-syrup.component';

const routes: Routes = [
  { path: 'tulsiamrit', component: TulsiAmritComponent },
  { path: 'cart', component: CartComponent },
  { path: 'zomocidSyrup', component:  ZomocidSyrupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
