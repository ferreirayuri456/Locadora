import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesService } from './core/filmes.service';
import { CadastroFilmesModule } from './filmes/cadastro-filmes/cadastro-filmes.module';
import { FilmesModule } from './filmes/filmes.module';
import { DemoMaterialModule } from './material.module';
import { CamposModule } from './shared/components/campos/campos.module';
import { TopoComponent } from './topo/topo.component';
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  //a directive, a component, or a pipe.
  declarations: [
    AppComponent,
    TopoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CamposModule,
    CadastroFilmesModule,
    FilmesModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
