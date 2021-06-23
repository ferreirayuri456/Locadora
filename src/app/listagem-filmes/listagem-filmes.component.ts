import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilmesService } from '../core/filmes.service';
import { ConfigParams } from '../shared/models/config-params';
import { Filme } from '../shared/models/filme';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.css']
})
export class ListagemFilmesComponent implements OnInit {

  config: ConfigParams = {
    pagina: 0,
    limite: 4
  }
  filmes: Filme[] = [];
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
      this.config.pesquisa = val;
      this.resetarConsulta();
    });

    this.filtros.get('genero').valueChanges.subscribe((val: string) => {
      this.config.campo = { tipo: 'genero', valor: val };
      this.resetarConsulta();
    });
    this.generosList = ['Drama', 'Ação', 'Romance', 'Terror', 'Aventura', 'Geek', 'Sensual'];
    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.config.pagina++;
    this.filmeService.listar(this.config)
      .subscribe((filme: Filme[]) => this.filmes.push(...filme));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}
