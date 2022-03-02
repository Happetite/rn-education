//1 todo 추가
//2 todo 수정
//sync vs async
// redux-thunk -> middleware

export const ADD_TODO="ADD_TODO";

export const addTodo=(title,content)=>{
    return async (dispatch,getState)=>{
        //백엔드/데이터 관련 코드들
        const userId=getState().auth.userId;
        const token=getState().auth.token;
        const response=
        await fetch(`https://rn-education-default-rtdb.asia-southeast1.firebasedatabase.app/${userId}/todo.json?auth=${token}`,
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({title:title, content:content})
        }
        );
        const resData=await response.json();
        // console.log(resData);
        // 아래 라인 실행되면, 원래대로 action object가 reducer에 전달
        dispatch({type:ADD_TODO, id:resData.name, title:title, content:content});
    }


    // return {type:ADD_TODO, id:id, title:title,content:content}
}

export const EDIT_TODO="EDIT_TODO";

export const editTodo=(id, title, content)=>{
    return async (dispatch)=>{
        const response=
        await fetch(`https://rn-education-default-rtdb.asia-southeast1.firebasedatabase.app/testUser1/todo/${id}.json`,
        {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({title:title, content:content})
        }
        );
        const resData=await response.json();
        dispatch({type:EDIT_TODO, id:id, title:title, content:content})
    }

    // return {type:EDIT_TODO, id:id, title:title, content:content}
}

export const FETCH_TODO="FETCH_TODO";

export const fetchTodo=()=>{
    return async (dispatch,getState)=>{
        const userId=getState().auth.userId;
        const token=getState().auth.token;
        const response=await fetch(`https://rn-education-default-rtdb.asia-southeast1.firebasedatabase.app/${userId}/todo.json?auth=${token}`)

        const resData=await response.json();
        let todoArray=[];
        console.log(resData);
        // error handling->
        for(const key in resData){
            todoArray.push({id:key,title:resData[key].title,content:resData[key].content});
        }

        dispatch({type:FETCH_TODO, todoArray:todoArray})
    }

}