import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../services/producto.service';
import {Producto} from '../../../models/producto'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  path: String

  constructor(
    public productoService: ProductoService,
    ) { }

  ngOnInit(): void {
    this.productoService.getProducts()
    this.resetForm();

  }

  onSubmit(productForm: NgForm)
  {
    var objIns = productForm.value;
    objIns["$key"]=this.productoService.selectedProduct.$key
    if(objIns.$key == null)
      this.productoService.insertProduct(objIns, this.path);
    else
    this.productoService.updateProduct(objIns);
    
    this.resetForm(productForm);
  }

  upload($event){
    this.path = $event.target.files[0]
    
  }

  resetForm(productForm?: NgForm)
  {
    if(productForm != null)
      productForm.reset();
      this.productoService.selectedProduct = new Producto();
  }

}
