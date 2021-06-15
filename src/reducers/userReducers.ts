import { ISingleUser } from "../entities/ISingleUser";
import * as actionTypes from '../actions/actionTypes/userTypes'

export interface IUserReducer {
    usersList: ISingleUser[];
    user: string;
}

const defaultState = (): IUserReducer => ({
    usersList: [],
    user: '',
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            
            return {
                ...state,
                user: data.usersList[0].name,
                usersList: data.usersList
            }
        }
            
        case actionTypes.SET_USER: {
            const data: actionTypes.IUserTypes['SET_USER'] = action;

            return {
                ...state,
                user: data.user,
            }
        }
            
        default:
            return state;
    }


}