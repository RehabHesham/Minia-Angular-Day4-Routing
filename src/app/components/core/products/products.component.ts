import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:IProduct[] = [];
  
  constructor(private prodService:ProductsService){}

  ngOnInit(): void {
    this.products = this.prodService.getAll();
  }


  delete(id:number){
    var result = confirm("Do you want to delete?");
    if(result){
      this.prodService.delete(id);
    }
  }
}
