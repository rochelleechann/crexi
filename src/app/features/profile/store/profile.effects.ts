import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  map, switchMap } from 'rxjs/operators';
import * as moment from 'moment';

// NgRx
import { Action } from '@ngrx/store';
import { ofType, Actions, createEffect } from '@ngrx/effects';

//Service
import { FeatureService } from '@features/feature.service';
import { UserProfile } from '../interfaces/user-profile'; 
import * as ProfileActions from './profile.actions';

@Injectable()
export class ProfileEffects {
    constructor(private actions: Actions, private featureService: FeatureService) {}
    getMultipleUsers$: Observable<Action> = createEffect(() => {
        const numberUsers = 10;

        return this.actions.pipe(
            ofType(ProfileActions.profileActions.getUserList),
            switchMap(action => {
                return this.featureService.getRandomUsers(numberUsers).pipe(
                    map((response: any) => {
                        console.log('Response from getMultipleList$:', response.results);
                        return ProfileActions.profileActions.getUserListData({
                            payload: response.results.map((resp: any) => {
                                const data: UserProfile  = {
                                    cellNumber: resp.cell,
                                    city: resp.location.city,
                                    firstName: resp.name.first,
                                    lastName: resp.name.last,
                                    phoneNumber: resp.phone,
                                    picture: resp.picture.large,
                                    state: resp.location.state,
                                    dateOfBirth: moment(resp.dob.date).format('MM/DD/YYYY'),
                                    email: resp.email
                                }
                                console.log('Data:', data);
                                return data;
                            })
                        }
                        );
                    },
                        catchError((err: Error) => {
                            return of(ProfileActions.profileActions.error(err))
                        })
                    )
                )
            }
            )
        );
    });

    getIndividualUser$: Observable<Action> = createEffect(() => {
        const numberUsers = 1;

        return this.actions.pipe(
            ofType(ProfileActions.profileActions.getSingleUser),
            switchMap(action => {
                return this.featureService.getRandomUsers(numberUsers).pipe(
                    map((response: any) => {
                        console.log('Response from getIndividualUser', response.results[0]);
                        return ProfileActions.profileActions.getSingleUserData({
                            payload: response.results.map((resp: any) => {
                                const data: UserProfile  = {
                                    cellNumber: resp.cell,
                                    city: resp.location.city,
                                    firstName: resp.name.first,
                                    lastName: resp.name.last,
                                    phoneNumber: resp.phone,
                                    picture: resp.picture.large,
                                    state: resp.location.state,
                                    dateOfBirth: moment(resp.dob.date).format('MM/DD/YYYY'),
                                    email: resp.email
                                }
                                console.log('Data:', data);
                                return data;
                            })
                        });
                    },
                    catchError((err: Error) => {
                        return of(ProfileActions.profileActions.error(err));
                    }))
                )
            })
        )
    })
}