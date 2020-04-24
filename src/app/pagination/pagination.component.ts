import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../services/page.service';

import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  private allItems: any[] = [];
  public pager: any = {};
  public pagedItems: any[];

  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;

  private _totalPages: number;

  @Input()
  public get totalPages() {
    return this._totalPages;
  }

  public set totalPages(val: number) {
    if(!val) {
      return
    } else {
      if(this._totalPages !== val) {
        this._totalPages = val;
        this.generateItems(this.totalPages)
        if(this.currentPage) {
          this.setPage(this.currentPage)
        }
      }
    }
  }

  private _currentPage: number;

  @Input()
  public get currentPage() {
    return this._currentPage;
  }

  public set currentPage(val: number) {
    if(!val) {
      return
    } else {
      if(this._currentPage !== val) {
        this._currentPage = val;
        this.setPage(this.currentPage)
      }
    }
  }
  constructor(private pageService: PageService) {}
  ngOnInit(): void {}

  private generateItems(num: number): void {
    this.allItems = [];
    for (let i = 0; i < num; i++) {
      this.allItems.push('Item №' + (i + 1));
    }
  }

  public setPage(page: number): void {
    this.pager = this.pageService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
