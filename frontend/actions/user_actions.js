import * as UserAPIUtil from "../util/users_apii_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

//fetch selected user thunk action
export const fetchUser = (userId) => dispatch => UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))