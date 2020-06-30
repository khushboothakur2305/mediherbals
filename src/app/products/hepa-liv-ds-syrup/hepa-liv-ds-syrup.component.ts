import { CardService } from './../../service/cart/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hepa-liv-ds-syrup',
  templateUrl: './hepa-liv-ds-syrup.component.html',
  styleUrls: ['./hepa-liv-ds-syrup.component.scss']
})
export class HepaLivDsSyrupComponent implements OnInit {
  constructor(private cart: CardService,private router:Router) {}
  name = 'hepalivds';
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
