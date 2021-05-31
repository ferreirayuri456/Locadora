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
  readonly size = 4;
  filtros: FormGroup;  
  generos = new FormControl();
  generosList: string[] = ['Drama', 'Ação', 'Romance', 'Terror', 'Aventura', 'Geek', 'Sensual'];

  

  constructor(public filmeService: FilmesService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.page++;
    this.filmeService.listar(this.page, this.size).subscribe((filme: Filme[]) => this.filmes.push(...filme));
  }
}
