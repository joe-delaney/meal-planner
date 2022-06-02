import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER } from "../../actions/user_actions";

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case RECEIVE_USER: 
            //This can be used to update user information
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    }
}