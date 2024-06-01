import { Cliente } from './../model/Cliente';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../servico/cliente.service';



@Component({
  selector: 'app-principal',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})


export class PrincipalComponent {

  // Objeto do tipo cliente
  cliente = new Cliente();

  // Variavel para visibilidade dos botôes
  btnCadastro:boolean=true;

  // variavel para visibilidade da tabela
  tabela:boolean = true;

  // JSON de clientes
  clientes:Cliente[] = [];

  constructor(private servico:ClienteService){}

  // função para selecionar
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  // método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      //cadastrar o cliente no vetor
      this.clientes.push(retorno);

      //limpar formulario
      this.cliente = new Cliente();

      //mesagem
      alert('Cliente cadastrado com sucesso!!')
    });
  }

  // metodo para selecionar um cliente especifico
  selecionarCliente(posicao:number):void{

    //selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    // visibilidade dos botões
    this.btnCadastro = false;

    // visivilidade da tabela
    this.tabela = false;
  }

  // metodo para editar clientes
  editar():void{

    this.servico.editar(this.cliente)
    .subscribe(retorno =>{

      // obter posição do vetor onde esta o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });

      // alterar od dados do cliente no vetor
      this.clientes[posicao] = retorno;

      // limpar formulario
      this.cliente = new Cliente();

      // visibilidade dos botões
      this.btnCadastro = true;

      // visibilidade da tabela
      this.tabela = true

      // mensagem

      alert('Cliente alterado com sucesso!!')

    });
  }

   // metodo para remover clientes
   remover():void{

    this.servico.remover(this.cliente.codigo)
    .subscribe(retorno =>{

      // obter posição do vetor onde esta o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo;
      });

      // remover cliente do vetor
      this.clientes.splice(posicao, 1);

      // limpar formulario
      this.cliente = new Cliente();

      // visibilidade dos botões
      this.btnCadastro = true;

      // visibilidade da tabela
      this.tabela = true

      // mensagem

      alert('Cliente removido com sucesso!!')

    });
  }

  // metodo para cancelar
  cancelar():void{

    // limpar formulario
    this.cliente = new Cliente();

    // visisbilidade dos botoes
    this.btnCadastro = true;

    // visibilidade da tabela
    this.tabela = true;

  }

  // método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
