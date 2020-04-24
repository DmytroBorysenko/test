import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentPage: number;
  public totalPages: number;

  public numCurrentPage: number;
  public numTotalPages: number;

  constructor() {}

  public loadDataInPagination(): void {
    if (this.numCurrentPage && this.numTotalPages) {
      this.totalPages = this.numTotalPages;
      this.currentPage = this.numCurrentPage;
    }
  }
}
