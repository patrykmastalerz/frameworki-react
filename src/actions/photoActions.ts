import { Dispatch } from "redux";
import * as actionTypes from '../actions/actionTypes/photoTypes'
import { ISinglePhoto } from "../entities/ISinglePhoto";


export const getPhotos = ():Promise<ISinglePhoto[]> =>((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photoList: ISinglePhoto[]) => {
            dispatch({
                type: actionTypes.GET_PHOTOS,
                photoList
            })
        })

}) as any;