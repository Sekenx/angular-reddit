import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article; // Use article model

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10);
}

  voteUp(): boolean {
    this.article.votes += 1;
    return false; // Stops page reload
}

  voteDown(): boolean {
    this.article.votes -= 1;
    return false; // Stops page reload
}
  ngOnInit() {
  }

}
