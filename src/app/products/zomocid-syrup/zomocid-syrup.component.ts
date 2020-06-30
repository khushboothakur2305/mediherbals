import { CardService } from './../../service/cart/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zomocid-syrup',
  templateUrl: './zomocid-syrup.component.html',
  styleUrls: ['./zomocid-syrup.component.scss']
})
export class ZomocidSyrupComponent implements OnInit {
  constructor(private cart: CardService,private router:Router) {}
  name = 'Zomocid_Syrup';
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
