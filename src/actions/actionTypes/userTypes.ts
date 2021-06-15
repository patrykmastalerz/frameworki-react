import { ISingleUser } from "../../entities/ISingleUser";

export const GET_USERS = 'GET_USERS';
export const SET_USER = 'SET_USER';

export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    },
    SET_USER: {
        user: string;
    }
}