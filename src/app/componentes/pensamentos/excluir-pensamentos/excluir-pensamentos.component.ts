import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css']
})
export class ExcluirPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    id : 0,
    conteudo : "",
    autoria : "",
    modelo : "",
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>{
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    this.service.excluirPensamento(this.pensamento.id).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }

  cancelarPensamento(){
    this.router.navigate(['/'])
  }
}
