import { ISingleUser } from "../entities/ISingleUser";
import * as actionTypes from '../actions/actionTypes/userTypes'

export interface IUserReducer {
    usersList: ISingleUser[];
}

const defaultState = (): IUserReducer => ({
    usersList: []
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {

            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: data.usersList
            }
        }
            
        default:
            return state;
    }


}