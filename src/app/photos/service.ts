import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      Name: 'BOAT NECK',
      Code: 'P1001',
      Qty: 10,
      Price: 29.99,
      image: './assets/bneck.jpg'
    },
    {
      Name: 'HIGH NECK',
      Code: 'P1002',
      Qty: 20,
      Price: 39.99,
      image: './assets/hneck.jpeg'
    },
    {
      Name: 'SLEEVE LESS',
      Code: 'P1003',
      Qty: 15,
      Price: 34.99,
      image: './assets/sleeve.jpeg'
    },
    {
      Name: 'ALMIRAH COVERS',
      Code: 'P1004',
      Qty: 5,
      Price: 9.99,
      image: './assets/almirah.jpeg'
    },
    {
      Name: 'CURTAINS ',
      Code: 'P1005',
      Qty: 8,
      Price: 19.99,
      image: './assets/curtains.jpeg'
    },
    {
      Name: 'DESIGNER BLOUSE',
      Code: 'P1006',
      Qty: 12,
      Price: 24.99,
      image: './assets/designerb.jpeg'
    },
    {
      Name: 'FROKS',
      Code: 'P1007',
      Qty: 30,
      Price: 49.99,
      image: './assets/frok.jpeg'
    },
    {
      Name: 'ALTERATIONS',
      Code: 'P1008',
      Qty: 25,
      Price: 44.99,
      image: './assets/tuck.jpeg'
    },
    {
      Name: 'SLEEVE LESS',
      Code: 'P1003',
      Qty: 15,
      Price: 34.99,
      image: './assets/sleeve.jpeg'
    },
  
  ];
    showForm: boolean;

  getProducts() {
    return this.products;
  }


  toggleForm() {
    this.showForm = !this.showForm;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productName: string) {
    this.products = this.products.filter(product => product.Name !== productName);
  }

  getProductByName(productName: string) {
    return this.products.find(product => product.Name === productName);
  }
}