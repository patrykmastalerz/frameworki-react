import * as actionTypes from '../actions/actionTypes/postTypes'
import { ISinglePost } from "../entities/ISinglePost";

export interface IPostReducer {
    postList: ISinglePost[];
}

const defaultState = (): IPostReducer => ({
    postList: []
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_POSTS: {

            const data: actionTypes.IPostTypes['GET_POSTS'] = action;
            return {
                ...state,
                postList: data.postList
            }
        }
            
        default:
            return state;
    }


}