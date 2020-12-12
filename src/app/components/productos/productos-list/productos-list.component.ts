import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../services/producto.service';
import {Producto} from '../../../models/producto'

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productList: Producto[]
  constructor(private productService: ProductoService) { }

  ngOnInit(): void {
    this.productService.getProducts().snapshotChanges().subscribe(item=>{
      this.productList = [];
      item.forEach(el=>{
        let x = el.payload.toJSON();
        x["$key"] = el.key;
        this.productList.push(x as Producto);
      })

    }
    )
  }
  onEdit(producto: Producto){
    console.log(producto)
    this.productService.selectedProduct= Object.assign({},producto);

  }
  onDelete($key: string){
    if(confirm('Are you sure you want to delete it?')) {
          this.productService.deleteProduct($key);
    }

  }

}
