import { ISinglePhoto } from "../../entities/ISinglePhoto";

export const GET_PHOTOS = 'GET_PHOTOS';

export interface IPhotoTypes {
    GET_PHOTOS: {
        photoList: ISinglePhoto[];
    }
}