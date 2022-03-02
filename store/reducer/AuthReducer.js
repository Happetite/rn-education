import {LOGIN, SIGN_UP} from '../actions/AuthActions';



const initialState={
    token:"",
    userId:"",
}


export const AuthReducer=(state=initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return {token:action.token, userId:action.userId}
        case SIGN_UP:
            return {token:action.token, userId:action.userId}
        default:
            return state;

    }
}


//authentication
//회원가입.로그인->유저계정이 만들어지고, 접근권한

//token




