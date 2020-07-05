import { CartComponent } from './cart/cart.component';
import { TulsiAmritComponent } from './products/tulsi-amrit/tulsi-amrit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZomocidSyrupComponent } from './products/zomocid-syrup/zomocid-syrup.component';
import { MRonSyrupComponent } from './products/m-ron-syrup/m-ron-syrup.component';
import { NaveDanLepComponent } from './products/nave-dan-lep/nave-dan-lep.component';
import { ProstocareCapsuleComponent } from './products/prostocare-capsule/prostocare-capsule.component';
import { HepaLivDsSyrupComponent } from './products/hepa-liv-ds-syrup/hepa-liv-ds-syrup.component';
import { UricDSCapsuleComponent } from './products/uric-ds-capsule/uric-ds-capsule.component';
import { TulsiDSCoughSyrupComponent } from './products/tulsi-ds-cough-syrup/tulsi-ds-cough-syrup.component';
import { SpermCareCapsuleComponent } from './products/sperm-care-capsule/sperm-care-capsule.component';
import { FeverticSyrupComponent } from './products/fevertic-syrup/fevertic-syrup.component';
import { HomepageComponent } from './Home/homepage/homepage.component';

import { HeaderComponent } from './Toolbar/header/header.component';
const routes: Routes = [
{path:'header',component:HeaderComponent},
  { path: 'home', component: HomepageComponent },
  { path: 'tulsiamrit', component: TulsiAmritComponent },
  { path: 'cart', component: CartComponent },
  { path: 'zomocidSyrup', component:  ZomocidSyrupComponent },
  { path: 'm-ron-syrup', component: MRonSyrupComponent  },
  { path: 'fevertics', component: FeverticSyrupComponent },
  { path: 'spermcare', component: SpermCareCapsuleComponent },
  { path: 'tulsidscough', component:  TulsiDSCoughSyrupComponent },
  { path: 'uricds', component: UricDSCapsuleComponent  },
  { path: 'hepalivds', component:  HepaLivDsSyrupComponent },
  { path: 'prostocare', component: ProstocareCapsuleComponent  },
  { path: 'navedan', component: NaveDanLepComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
