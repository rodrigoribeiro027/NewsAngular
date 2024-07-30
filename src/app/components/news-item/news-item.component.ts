import { Component, Input, Output, EventEmitter } from '@angular/core';
import { News } from '../../news'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss'
})
export class NewsItemComponent {
  @Input() news!:News ;
  @Output() onDeleteNews= new EventEmitter<News >();
  @Output() onToggleConcluido = new EventEmitter<News >();


  onDelete(news: News ){
    this.onDeleteNews.emit(news);
  
  }
  
}
