import { Component } from '@angular/core';
import { Articulo } from './articulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Administración de artículos';
  codigoInput: number=0;
  descripcionInput: string='';
  precioInput: number=0;

  articulos: Articulo[]= [ new Articulo(1,'papas',1500)];

  agregarArticulo(){
    let articuloN=new Articulo(this.codigoInput, this.descripcionInput, this.precioInput);
    this.articulos.push(articuloN)
  }

  borrarArticulo(codigoB: number){
    this.articulos.forEach(function(articuloB, index, obj){
      if(articuloB.codigo === codigoB){
        obj.splice(index,1);
      }
    })
  }
}
