import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../store/profile.actions';

const initialState: ProfileState = {} ;

const profileReducer = createReducer(
    initialState, on(Actions.profileActions.getSingleUserData, (state, { payload }) => {
    return {...state, user: payload};
}),
on(Actions.profileActions.getUserListData, (state, { payload }) => {
    return {...state, user: payload };
})
)

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return profileReducer(state, action);

}