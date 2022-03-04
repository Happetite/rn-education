import {LOGIN, SIGN_UP,AUTO_LOGIN,REFRESH_LOGIN} from '../actions/AuthActions';



const initialState={
    token:"",
    userId:"",
    refreshToken:"",
}


export const AuthReducer=(state=initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return {token:action.token, userId:action.userId,refreshToken:action.refreshToken}
        case SIGN_UP:
            return {token:action.token, userId:action.userId,refreshToken:action.refreshToken}
        case AUTO_LOGIN:
            return {token:action.token, userId:action.userId,refreshToken:action.refreshToken}
        case REFRESH_LOGIN:
            return {token:action.token,userId:action.userId, refreshToken:action.refreshToken}
        default:
            return state;

    }
}


//authentication
//회원가입.로그인->유저계정이 만들어지고, 접근권한

//token




