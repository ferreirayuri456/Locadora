import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFilmesComponent } from './cadastro-filmes.component';

const routes: Routes = [{ path: '', component: CadastroFilmesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroFilmesRoutingModule { }
