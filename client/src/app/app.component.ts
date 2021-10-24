import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any[] = [];

  constructor(private apollo: Apollo) {}

  query() {
    return gql`
      {
        users {
          id
          email
          name
        }
      }
    `;
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: this.query(),
      })
      .valueChanges.subscribe(({ data }: any) => (this.users = data.users));
  }
}
