import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';

import * as Actions from '../store/profile.actions';
import { getSingleUser } from '../store/profile.selectors';
import { UserProfile } from '../interfaces';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {
    user$ : Observable<UserProfile>;

    constructor (private store: Store<AppState>) {}

    ngOnInit () {
        this.store.dispatch(Actions.profileActions.getSingleUser());
        this.user$ = this.store.select(getSingleUser);
    }

}