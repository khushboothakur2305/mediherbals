import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule
  ],
})
export class MaterialModule {}
