import { Product } from './../interface/product/product';
import { CardService } from './../service/cart/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cart: CardService) {}
  card:Product[]=[]

  ngOnInit(): void {
 this.card=this.cart.getproduct();
  }
  remove(name){
    console.log(name);
    this.card.splice(this.card.indexOf(name),1)

  }
}
