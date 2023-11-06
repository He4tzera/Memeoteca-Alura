import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo:'Aprendendo Angular',
    autoria:'Dev',
    modelo:'2',
  }

  constructor() { }

  ngOnInit(): void {
  }

  salvarPensamento(){
    alert("Pensamento Salvo")
  }
  cancelarPensamento(){
    alert("Pensamento Cancelado")

  }
}
