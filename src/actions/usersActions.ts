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


export const setUser = (user: string) => ((dispatch: Dispatch) => {
    return dispatch({ type: actionTypes.SET_USER, user });
}) as any;