import { ISingleComment } from "../../entities/ISingleComment";

export const GET_COMMENTS = 'GET_COMMENTS';

export interface ICommentTypes {
    GET_COMMENTS: {
        commentList: ISingleComment[];
    }
    
}