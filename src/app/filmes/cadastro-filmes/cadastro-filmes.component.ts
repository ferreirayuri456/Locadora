import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';

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
  generosList: string[] = ['Drama', 'Ação', 'Romance', 'Terror', 'Aventura', 'Geek', 'Sensual']

  constructor(private fb: FormBuilder, public validar: ValidarCamposService) {
   }

   get f() {
     this.cadastro.markAllAsTouched();
     return this.cadastro.controls;
   }


  //  get formControl(): AbstractControl {
  //   return this.cadastro.controls[this.controlName];
  // }

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

}
