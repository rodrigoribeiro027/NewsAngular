import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';
  
  constructor(private http: HttpClient) { }
  getNews() : Observable<News[]>{
    return this.http.get<News[]>(this.apiUrl);
  }

  deleteNew(news: News): Observable<News>{
    return this.http.delete<News>(`${this.apiUrl}/${news.id}`);
  }

  updateNew(news: News) : Observable<News>{
    return this.http.put<News>(`${this.apiUrl}/${news.id}`, news);
  }

  addNew(news: News) : Observable<News>{
    return this.http.post<News>(`${this.apiUrl}`, news);
  }
}
