import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

export const getSingleUser = createAction('[Profile] Single Profile');
const getSingleUserData = createAction(
    '[Profile] Single Profile Complete', 
    props<{ payload: UserProfile }>());
const getUserList = createAction('[Profile] Profile User List');
const getUserListData = createAction(
    '[Profile] Profile User List Complete', 
    props<{ payload: UserProfile}>()
);
const error = createAction(
    '[Profile] Error', 
    props<Error>()
);

export const profileActions = {getSingleUser ,getSingleUserData, getUserList, getUserListData,error };