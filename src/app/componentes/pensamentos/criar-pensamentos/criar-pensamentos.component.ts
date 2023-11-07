import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {
  pensamento : Pensamento= {
    id: 0,
    conteudo:'',
    autoria:'',
    modelo:'',
  }

  constructor(
    private service : PensamentoService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  salvarPensamento(){
    console.log(this.pensamento)
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarpensamento'])
    })
  }
  cancelarPensamento(){
    this.router.navigate(['/listarpensamento'])
  }
}
