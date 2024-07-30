import { Component, Output,EventEmitter, Input } from '@angular/core';
import { News } from '../../news';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent],
  templateUrl: './news-add.component.html',
  styleUrl: './news-add.component.scss'
})
export class NewsAddComponent {
  
  @Output() onAddNews = new EventEmitter<News>();
  news: string = ''
  nome: string = ''
  descricao:string = ''
  categoria: string = ''
  dataPublicacao: string = ''
  mostrarAddTarefa: boolean = false;

  AlteraVisualizacao(valor: boolean){
    this.mostrarAddTarefa = valor;
  }
  onSubmit(){
   

    const novaNoticia = {
      nome:this.nome,
      categoria: this.categoria,
      descricao:this.descricao,
      dataPublicacao:this.dataPublicacao,
    }

    this.onAddNews.emit(novaNoticia);

    this.news = '';
    this.categoria = '';
    this.dataPublicacao = '';

  }
}
