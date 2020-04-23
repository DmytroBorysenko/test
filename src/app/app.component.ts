import { Component } from '@angular/core';
import { PageService } from './services/page.service';

import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentPage: number;
  public totalPages: number;
  private allItems: any[] = [];
  public pager: any = {};
  public pagedItems: any[];

  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;

  constructor(private pageService: PageService) {}

  generateItems(num: number) {
    this.allItems = [];
    for(let i = 0; i < num; i++) {
      this.allItems.push('Item №' + (i + 1))
    }
  }

  setPage(page: number) {
    this.pager = this.pageService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}

