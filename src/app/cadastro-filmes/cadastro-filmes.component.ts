import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent implements OnInit {


  cadastro: FormGroup

  constructor(private fb: FormBuilder) {
   }

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
