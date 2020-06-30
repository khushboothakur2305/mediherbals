import { CardService } from './../../service/cart/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tulsi-ds-cough-syrup',
  templateUrl: './tulsi-ds-cough-syrup.component.html',
  styleUrls: ['./tulsi-ds-cough-syrup.component.scss']
})
export class TulsiDSCoughSyrupComponent implements OnInit {
  constructor(private cart: CardService,private router:Router) {}
  name = 'tulsidscough';
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
