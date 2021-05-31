import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { Filme } from 'src/app/shared/models/filme';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';
import { Alerta } from './../../shared/models/alerta';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent implements OnInit {

  titulo: string;
  cadastro: FormGroup
  controlName: string;
  generos = new FormControl();
  generosList: string[] = ['Drama', 'Ação', 'Romance', 'Terror', 'Aventura', 'Geek', 'Sensual'];

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: ['', [Validators.minLength(10)]],
      dataLancamento: ['', [Validators.required]],
      descricao: [''],
      nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      url: ['', [Validators.minLength(10)]],
      genero: ['', [Validators.required]],

    })
  }

  constructor(private fb: FormBuilder, public validar: ValidarCamposService, public filmeService: FilmesService, public dialog: MatDialog) {
  }

  submit(): void {
    const filme = this.cadastro.getRawValue() as Filme;
    this.salvar(filme);
  }

  reiniciaForm(): void {
    this.cadastro.reset();
  }


  get f() {
    this.cadastro.markAllAsTouched();
    return this.cadastro.controls;
  }


  openDialogError(): void {
    const dialogRef = this.dialog.open(ErrorComponent, {
      width: '300px'
    });
    dialogRef.afterOpened().subscribe(result => {
      dialogRef.close();
    })

  }

  private salvar(filme: Filme): void {
      this.filmeService.salvar(filme).subscribe(() => {
       const dialogRef = this.dialog.open(AlertaComponent, {
          width: '300px',
          data: {
            titulo: this.titulo,
            btnSucesso: 'Ir para a listagem',
            btnCancelar: 'Cadastrar novo filme'
          } as Alerta
        });
        this.cadastro.reset();
      },
        () => {
          if (this.cadastro.invalid) {
            return this.openDialogError();
          }
        });



  }
}
