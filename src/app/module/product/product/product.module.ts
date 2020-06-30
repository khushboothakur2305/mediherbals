
import { CardService } from './../../../service/cart/card.service';

import { ZomocidSyrupComponent } from './../../../products/zomocid-syrup/zomocid-syrup.component';

import { ProductListComponent } from './../../../products/product-list/product-list.component';
import { TulsiAmritComponent } from './../../../products/tulsi-amrit/tulsi-amrit.component';
import { MaterialModule } from './../../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TulsiAmritComponent, ProductListComponent,ZomocidSyrupComponent],
  providers:[CardService],
  imports: [CommonModule, MaterialModule],
})
export class ProductModule {}
