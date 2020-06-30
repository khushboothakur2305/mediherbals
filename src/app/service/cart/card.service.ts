import { Product } from './../../interface/product/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor() { }
 products:Product[]=[]
 adddproducts(name:string,quantity:number,price:number){
   this.products.push({

     name:name,
     quantity:quantity,
     price:price
   });

 }
 getproduct(){
  return [...this.products];

 }

}
