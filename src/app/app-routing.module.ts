import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';

const routes: Routes = [
  {
    path:'',
    component: ListagemFilmesComponent,
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    component: CadastroFilmesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
