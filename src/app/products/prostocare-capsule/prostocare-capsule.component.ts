import { CardService } from './../../service/cart/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prostocare-capsule',
  templateUrl: './prostocare-capsule.component.html',
  styleUrls: ['./prostocare-capsule.component.scss']
})
export class ProstocareCapsuleComponent implements OnInit {
  constructor(private cart: CardService,private router:Router) {}
  name = 'prostocare';
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
