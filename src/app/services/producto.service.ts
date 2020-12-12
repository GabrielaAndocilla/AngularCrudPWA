import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage'
import {Producto} from '../models/producto'
import {finalize} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productList: AngularFireList<any>;
  selectedProduct: Producto = new Producto();
  myArray: any[] = []
  uploadPercen: Observable<number>;
  urlImagen: string = '' ;  

  constructor(private firebase: AngularFireDatabase, private firebaseS: AngularFireStorage) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Producto, imagennn :String)
  {
    this.uploadImg(imagennn, product)
  }

  async uploadImg(imagenPath: String, product: Producto,){
    const id = Math.random().toString(36).substring(2)
    const filepath = `upload/producto_${id}.png`
    const ref = this.firebaseS.ref(filepath)
    const task = this.firebaseS.upload(filepath,imagenPath);
    (await task).ref.getDownloadURL().then(url => {this.uploadProduct(product,url)});  // <<< url is found here
   
  }

  uploadProduct(product: Producto, imagenpath: string){
    this.productList.push({
      name: product.name,
      categoria: product.categoria,
      localizacion: product.localizacion,
      precio: product.precio,
      imagen: imagenpath
    });
  }

  updateProduct(product: Producto)
  {
    this.productList.update(product.$key, {
      name: product.name,
      categoria: product.categoria,
      localizacion: product.localizacion,
      precio: product.precio
    });

  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}
