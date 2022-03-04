import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGN_UP="SIGN_UP";

export const signUp=(email,pw)=>{

    return async (dispatch)=>{
        //회원가입

        const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGOScKwj8EriraOqazzTUohf6Fs0K9wlg",
        {
            method:"POST",
            headers:"application/json",
            body:JSON.stringify({
                email:email,
                password:pw,
                returnSecureToken:true
            })
        }
        );

        if(!response.ok){
            throw new Error("error while signing up");
        }

        const resData=await response.json();
        // console.log(resData);
        //내부 저장소에 토큰과 아이디를
        saveUserData(resData.idToken,resData.localId, resData.refreshToken);
        
        dispatch({type:SIGN_UP,token:resData.idToken,userId:resData.localId, refreshToken:resData.refreshToken})
    }
}


export const LOGIN="LOGIN";

export const login=(email,pw)=>{

    return async (dispatch)=>{
        //회원가입

        const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGOScKwj8EriraOqazzTUohf6Fs0K9wlg",
        {
            method:"POST",
            headers:"application/json",
            body:JSON.stringify({
                email:email,
                password:pw,
                returnSecureToken:true
            })
        }
        );
        if(!response.ok){
            throw new Error("error while logging in");
        }

        const resData=await response.json();
        // console.log(resData);
        // console.log(resData);
        
         //내부 저장소에 토큰과 아이디를
         saveUserData(resData.idToken,resData.localId,resData.refreshToken);
        
        dispatch({type:LOGIN,token:resData.idToken,userId:resData.localId,refreshToken:resData.refreshToken})
    }
}

const saveUserData=async (token,userId,refreshToken)=>{
    try{
        const userData={token:token, userId:userId, refreshToken:refreshToken};
        await AsyncStorage.setItem('userData',JSON.stringify(userData))
    }catch(err){
        console.log(err);
    }
}

export const AUTO_LOGIN='AUTO_LOGIN';

export const autoLogin=(token,userId)=>{
    
    return (dispatch)=>{
        dispatch({type:AUTO_LOGIN, token:token, userId:userId});
    }
}

export const REFRESH_LOGIN='REFRESH_LOGIN';

export const refreshLogin=(refreshToken)=>{
    return async (dispatch)=>{
        //refreshToken->서버에 토큰을 'refresh'할 것을 요청->token,refreshToken
        const response=await fetch("https://securetoken.googleapis.com/v1/token?key=AIzaSyAGOScKwj8EriraOqazzTUohf6Fs0K9wlg"
        ,{
            method:"POST",
            headers:"application/x-www-form-urlencoded",
            body:JSON.stringify({grant_type:"refresh_token",refresh_token:refreshToken})
        }
        )
        if(!response.ok){
            console.log("refresh fail");
            throw new Error("refresh fail");
        }
        
        const resData=await response.json();
        saveUserData(resData.id_token,resData.user_id,resData.refresh_token);
        console.log(resData);
        dispatch({type:REFRESH_LOGIN,userId:resData.user_id,token:resData.id_token,refreshToken:resData.refresh_token})
    }

}
