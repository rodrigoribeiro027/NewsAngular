import { Component, Input, OnInit } from '@angular/core';
import { NewsItemComponent } from "../news-item/news-item.component";
import { CommonModule } from '@angular/common';
import { News } from '../../news';
import { NewsService } from '../../services/news.service';
import { NewsAddComponent } from "../news-add/news-add.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NewsItemComponent, NewsAddComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService:NewsService){}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((dado) => {
      this.news = dado;
      console.log(dado);
    });
  }
  AddNews(news: News){
    this.newsService.addNew(news).subscribe((news) => {
      this.news.push(news);
    });
  }
  deleteNew(news: News){
    this.newsService.deleteNew(news).subscribe(() =>
      (this.news = this.news.filter((t) => t.id !== news.id)));
}
}
