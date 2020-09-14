import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alex-babaca',
  templateUrl: './alex-babaca.component.html',
  styleUrls: ['./alex-babaca.component.scss']
})
export class AlexBabacaComponent implements OnInit {

  nome = '';
  texto = 'seja bem vindo'
  exibirTexto: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  verificar() {
    console.log(this.nome.length);
    if (this.nome.length == 0) {
      this.texto = 'digite um nome'
    } else {

      if (this.nome == "alex") {
        this.texto = 'vai tomar no cu'
      } else {
        this.texto = "seja bem vindo"
      }
    }
    this.exibirTexto = true;
  }

}
