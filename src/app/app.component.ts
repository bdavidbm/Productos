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
  valores: boolean=false;
  bol2: Boolean=true;

  articulos: Articulo[]= [ new Articulo(1,'papas',1500)];

  agregarArticulo(){
    this.verificarValores(true);
    if(this.valores){
      let articuloN=new Articulo(this.codigoInput, this.descripcionInput, this.precioInput);
      this.articulos.push(articuloN)
    }

  }

  borrarArticulo(codigoB: number){
    this.articulos.forEach(function(articuloB, index, obj){
      if(articuloB.codigo === codigoB){
        obj.splice(index,1);
      }
    })
  }

  seleccionarArticulo(codigoS: number){
    this.articulos.forEach( (articuloB, index, obj) =>{
      if(articuloB.codigo === codigoS){
        this.codigoInput = codigoS;
        this.descripcionInput = articuloB.descripcion;
        this.precioInput = articuloB.precio;
      }
    })
  }

  modificarArticulo(){
    this.verificarValores(false);
    if(this.valores){
      this.articulos.forEach( (articuloB, index, obj) =>{
        if(articuloB.codigo === this.codigoInput){
          console.log(this.articulos[index].codigo);
          this.articulos[index].descripcion=this.descripcionInput;
          this.articulos[index].precio=this.precioInput;
        }
      })
    }

  }

  verificarValores(bol: boolean){
    if (this.codigoInput <= 0){
      alert("Codigo incorrecto");
    }else if(this.descripcionInput == ''){
      alert("Descripcion no puede estar vacia");
    }else if (this.precioInput < 50){
      alert("Precio incorrecto");
    }else{
      this.valores=true;
      if(bol){
        this.articulos.forEach((articuloB) =>{
          if (articuloB.codigo === this.codigoInput){
            alert("Codigo Repetido");
            this.valores=false;
          }
        })
      }else{
        this.articulos.forEach((articuloB) =>{
          if(this.bol2){
            if (articuloB.codigo === this.codigoInput){
              this.valores=true;
              this.bol2=false;
            }else{
              this.valores=false;
            }
          }
        })
        if(!(this.valores)){
          alert("Codigo no existe");
        }
      }
    }
  }
}
