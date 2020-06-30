import { CardService } from './../../../service/cart/card.service';
import { ZomocidSyrupComponent } from './../../../products/zomocid-syrup/zomocid-syrup.component';
import { MRonSyrupComponent } from './../../../products/m-ron-syrup/m-ron-syrup.component';
import { ProductListComponent } from './../../../products/product-list/product-list.component';
import { TulsiAmritComponent } from './../../../products/tulsi-amrit/tulsi-amrit.component';
import { NaveDanLepComponent } from './../../../products/nave-dan-lep/nave-dan-lep.component';
import { ProstocareCapsuleComponent } from './../../../products/prostocare-capsule/prostocare-capsule.component';
import { HepaLivDsSyrupComponent } from './../../../products/hepa-liv-ds-syrup/hepa-liv-ds-syrup.component';
import { UricDSCapsuleComponent } from './../../../products/uric-ds-capsule/uric-ds-capsule.component';
import { TulsiDSCoughSyrupComponent } from './../../../products/tulsi-ds-cough-syrup/tulsi-ds-cough-syrup.component';
import { SpermCareCapsuleComponent } from './../../../products/sperm-care-capsule/sperm-care-capsule.component';
import { FeverticSyrupComponent } from './../../../products/fevertic-syrup/fevertic-syrup.component';
import { MaterialModule } from './../../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TulsiAmritComponent,
     ProductListComponent,
     ZomocidSyrupComponent,
     MRonSyrupComponent,
     NaveDanLepComponent,
    ProstocareCapsuleComponent,
    HepaLivDsSyrupComponent,
    UricDSCapsuleComponent,
    TulsiDSCoughSyrupComponent,
    SpermCareCapsuleComponent,
    FeverticSyrupComponent,
    ],
  providers:[CardService],
  imports: [CommonModule, MaterialModule],
})
export class ProductModule {}
