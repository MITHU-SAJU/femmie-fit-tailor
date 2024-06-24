import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ProductService } from './service'; // Adjust this import as needed
import { trigger, style, animate, transition } from '@angular/animations';


interface Product {
  Name: string;
  Code: string;
  Qty: number;
  Price: number;
  image: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})


export class PhotosComponent implements OnInit {
  products: Product[] = [];
  paginatedProducts: Product[] = [];
  totalProducts: number;
  pageSize: number = 10;
  currentPage: number = 0;
  newProduct: Product = { Name: '', Code: '', Qty: 0, Price: 0, image: '' };
  errorMessage: string;
  searchQuery: string = '';
  searchedProduct: Product | null = null;
  showForm: boolean = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  dialog: string;
  product: Product;
  filteredProducts: Product[];

  constructor(
    private productService: ProductService,
  
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.totalProducts = this.products.length;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.productService.addProduct(this.newProduct);
      this.products = this.productService.getProducts(); // Refresh the list
      this.totalProducts = this.products.length;
      this.newProduct = { Name: '', Code: '', Qty: 0, Price: 0, image: '' };
      form.resetForm();
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

  removeProduct(productName: string): void {
    this.productService.removeProduct(productName);
    this.products = this.productService.getProducts(); // Refresh the list
    this.totalProducts = this.products.length;
  }
  searchProduct(): void {
    this.filteredProducts = this.products.filter(product =>
      product.Name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  toggleLinearMode() {
    this.isLinear = !this.isLinear;
  }

  
  
}
