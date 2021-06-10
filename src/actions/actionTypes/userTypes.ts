import { ISingleUser } from "../../entities/ISingleUser";

export const GET_USERS = 'GET_USERS';

export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    }
}