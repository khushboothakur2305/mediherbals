import { CardService } from './../../service/cart/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fevertic-syrup',
  templateUrl: './fevertic-syrup.component.html',
  styleUrls: ['./fevertic-syrup.component.scss']
})
export class FeverticSyrupComponent implements OnInit {
  constructor(private cart: CardService,private router:Router) {}
  name = 'fevertics';
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

