import * as actionTypes from '../actions/actionTypes/photoTypes'
import { ISinglePhoto } from '../entities/ISinglePhoto';

export interface IPhotoReducer {
    photoList: ISinglePhoto[];
}

const defaultState = (): IPhotoReducer => ({
    photoList: []
})

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: {

            const data: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photoList: data.photoList
            }
        }
            
        default:
            return state;
    }


}