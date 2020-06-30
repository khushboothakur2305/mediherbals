import { CardService } from './../../service/cart/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uric-ds-capsule',
  templateUrl: './uric-ds-capsule.component.html',
  styleUrls: ['./uric-ds-capsule.component.scss']
})
export class UricDSCapsuleComponent implements OnInit {
  constructor(private cart: CardService,private router:Router) {}
  name = 'uricds';
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
