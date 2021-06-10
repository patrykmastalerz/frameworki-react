import { ISinglePost } from "../../entities/ISinglePost";

export const GET_POSTS = 'GET_POSTS';

export interface IPostTypes {
    GET_POSTS: {
        postList: ISinglePost[];
    }
}