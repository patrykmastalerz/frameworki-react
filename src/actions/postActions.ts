import { Dispatch } from "redux";
import * as actionTypes from '../actions/actionTypes/postTypes'
import { ISinglePost } from "../entities/ISinglePost";


export const getPosts = ():Promise<ISinglePost[]> =>((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((postList: ISinglePost[]) => {
            dispatch({
                type: actionTypes.GET_POSTS,
                postList
            })
        })

}) as any;