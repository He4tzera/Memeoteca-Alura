import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentosComponent } from './componentes/pensamentos/excluir-pensamentos/excluir-pensamentos.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarpensamento',
    pathMatch: 'full'
  },
  {
    path:'criapensamento',
    component: CriarPensamentosComponent,

  },
  {
    path:'listarpensamento',
    component: ListarPensamentoComponent,

  },
  {
    path:'pensamento/excluir-pensamento/:id',
    component: ExcluirPensamentosComponent,
  },
  {
    path:'pensamento/editar-pensamento/:id',
    component:EditarPensamentoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
