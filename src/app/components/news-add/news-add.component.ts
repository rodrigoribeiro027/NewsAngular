import { Component, Output, EventEmitter } from '@angular/core';
import { News } from '../../news';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent],
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent {
  
  @Output() onAddNews = new EventEmitter<News>();
  nome: string = '';
  descricao: string = '';
  categoria: string = '';
  dataPublicacao: string = '';
  mostrarAddTarefa: boolean = false;

  AlteraVisualizacao(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }

  validateDate(date: string): boolean {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
  }

  onSubmit() {
    if (this.nome && this.descricao && this.categoria && this.dataPublicacao) {
      if (!this.validateDate(this.dataPublicacao)) {
        alert('Por favor, insira a data no formato 00/00/0000.');
        return;
      }

      const novaNoticia: News = {
        nome: this.nome,
        categoria: this.categoria,
        descricao: this.descricao,
        dataPublicacao: this.dataPublicacao,
      };
      this.onAddNews.emit(novaNoticia);
      this.limparFormulario();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  limparFormulario() {
    this.nome = '';
    this.descricao = '';
    this.categoria = '';  
    this.dataPublicacao = '';
  }
}
