import { ProductModule } from './module/product/product/product.module';
import { MaterialModule } from './module/material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { HeaderComponent } from './Toolbar/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomepageComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
