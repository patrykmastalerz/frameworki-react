import { Dispatch } from "redux";
import * as actionTypes from '../actions/actionTypes/userTypes'
import { ISingleUser } from "../entities/ISingleUser";


export const getUsers = ():Promise<ISingleUser[]> =>((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: ISingleUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })

}) as any;