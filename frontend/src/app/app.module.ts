import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubcategoriasComponent } from './componentes/subcategorias/subcategorias.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SubcategoriasService } from './servicios/subcategorias.service';

@NgModule({
  declarations: [
    AppComponent,
    SubcategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SubcategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
