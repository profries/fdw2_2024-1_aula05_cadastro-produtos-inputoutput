import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  @Input() title= "Tabela de Produtos";
  @Input('lista') listaProdutos: any[] = [];
}
