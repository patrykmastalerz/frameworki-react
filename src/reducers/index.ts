import {combineReducers} from 'redux';
import comments, { ICommentReducer } from './commentReducers';
import photos, { IPhotoReducer } from './photoReducers';
import posts, { IPostReducer } from './postReducers';
import users, { IUserReducer } from './userReducers';




export default combineReducers({
    users,
    comments,
    posts,
    photos
})

export interface IState {
    users: IUserReducer;
    comments: ICommentReducer;
    posts: IPostReducer
    photos: IPhotoReducer
}