import * as actionTypes from '../actions/actionTypes/commentTypes'
import { ISingleComment } from "../entities/ISingleComment";

export interface ICommentReducer {
    commentList: ISingleComment[];
}

const defaultState = (): ICommentReducer => ({
    commentList: []
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            
            const data: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentList: data.commentList
            }
        }
            
        default:
            return state;
    }


}