import { CardService } from './../../service/cart/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-ron-syrup',
  templateUrl: './m-ron-syrup.component.html',
  styleUrls: ['./m-ron-syrup.component.scss']
})
export class MRonSyrupComponent implements OnInit {
  constructor(private cart: CardService,private router:Router) {}
  name = 'm-ron-syrup';
  price = 100;
  quantity = 1;

  onclick() {
    this.cart.adddproducts(this.name, this.quantity, this.price);
    this.cart.getproduct();
  }

  ViewCart() {
    this.router.navigate(['/cart'])
  }

  ngOnInit(): void {}
}
