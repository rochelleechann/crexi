import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getSingleUser = createSelector(getProfileState, ({ user }) => {
    return user;
});

export const getUserList = createSelector(getProfileState, ({ user }) => {
    return user;
})