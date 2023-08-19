import {user, userAction} from "../Util/Types";
import {DELETE_USER, UPDATE_USER} from "../Util/Action";

export var intialuser:user = {
    address: "",
    confirmPassword: "",
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    profilePic: "",
    role: "",
    state: "",
    zipcode: 0
}

export const userReducer = (state: any, action: { type: string; payload:any }) => {
    switch (action.type) {
        case UPDATE_USER: {
            return action.payload
        }
        case DELETE_USER: {
            return intialuser
        }
        default:
            return state
  }
}

export const updateUser = (data:object):userAction => {
    return {type:UPDATE_USER,payload:data}
}
export const deleteUser = (id:number):userAction => {
    return {type:DELETE_USER,payload:id}
}



