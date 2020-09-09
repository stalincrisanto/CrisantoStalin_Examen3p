import { Component, OnInit } from '@angular/core';
import { SubcategoriasService } from '../../servicios/subcategorias.service';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.css']
})
export class SubcategoriasComponent implements OnInit {

  categorias: any ;
  subcategorias: any ;

  constructor(private subcategoriaService:SubcategoriasService ) { 
    this.obtenerCategorias();
  }

  ngOnInit(): void {
  }

  obtenerCategorias()
  {
    this.subcategoriaService.listarCategorias().subscribe(resultado=>{
      this.categorias=resultado;
    },error=>{
      console.log(error);
    });
  }

  listarSubcategorias(cod_categoria)
  {
    this.subcategoriaService.listarSubCategorias(cod_categoria).subscribe(resultado=>{
      this.subcategorias=resultado;
    },error=>{
      console.log(error);
    });
  }

}
