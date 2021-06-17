import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilmesService } from '../core/filmes.service';
import { Filme } from '../shared/models/filme';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.css']
})
export class ListagemFilmesComponent implements OnInit {

  filmes: Filme[] = [];
  page = 1;
  texto: string;
  genero: string;
  readonly size = 4;
  filtros: FormGroup;
  generos = new FormControl();
  generosList: Array<string>;



  constructor(public filmeService: FilmesService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.filtros = this.fb.group({
      texto: [''],
      genero: ['']
    });

    this.filtros.get('texto').valueChanges.subscribe((val: string) => {
      this.texto = val;
      this.resetarConsulta();
    });

    this.filtros.get('genero').valueChanges.subscribe((val: string) => {
      this.genero = val;
      this.resetarConsulta();
    });
    this.generosList = ['Drama', 'Ação', 'Romance', 'Terror', 'Aventura', 'Geek', 'Sensual'];
    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.page++;
    this.filmeService.listar(this.page, this.size, this.texto, this.genero)
    .subscribe((filme: Filme[]) => this.filmes.push(...filme));
  }

  private resetarConsulta(): void {
    this.page = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}
