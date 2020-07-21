import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { Observable } from 'rxjs';
import { getUserList } from '../store/profile.selectors';
import * as Actions from '../store/profile.actions';
import { UserProfile } from '../interfaces';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {
  users$: Observable<UserProfile>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(Actions.profileActions.getUserList());
    this.users$ = this.store.select(getUserList);
  }

  // Track user click index
  trackUserSelection(index: number) {
    // Based on user click, pass index as a paratmeter to get specific profile

  }
}
