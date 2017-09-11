import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article; // Use article model

  constructor() {
  // Input populates article
}
  // Call method in article class
  voteUp(): boolean {
    this.article.voteUp();
    return false; // Stops page reload
}
  // Call method in article class
  voteDown(): boolean {
    this.article.voteDown();
    return false; // Stops page reload
}
  ngOnInit() {
  }
}
