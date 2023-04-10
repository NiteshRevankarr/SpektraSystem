import { Injectable } from '@angular/core';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  productDetails!:items[];
  getDetails():items[]{
    
    this.productDetails=[
    {id:"101",itemName:"lato Shirt",type:"Men's Wear",price:150,qty:5},
    {id:"102",itemName:"Wild Craft Bag",type:"Bags",price:2020,qty:3},
    {id:"103",itemName:"Volley Ball",type:"Men's Wear",price:1400,qty:4},
    {id:"104",itemName:"Cricket Bat",type:"Bags",price:250,qty:4},
    {id:"105",itemName:"Moblie covers",type:"Men's Wear",price:180,qty:4},

  ]

  return this.productDetails
}

  constructor() { }
}
