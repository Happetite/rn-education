//1 todo 추가
//2 todo 수정
//sync vs async
// redux-thunk -> middleware

export const ADD_TODO="ADD_TODO";

export const addTodo=(id,title,content)=>{
    return async (dispatch)=>{
        //백엔드/데이터 관련 코드들
        const response=
        await fetch("https://rn-education-default-rtdb.asia-southeast1.firebasedatabase.app/testUser1/todo.json",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({id:id,title:title, content:content})
        }
        );
        const resData=await response.json();
        // 아래 라인 실행되면, 원래대로 action object가 reducer에 전달
        dispatch({type:ADD_TODO, id:id, title:title,content:content});
    }


    // return {type:ADD_TODO, id:id, title:title,content:content}
}

export const EDIT_TODO="EDIT_TODO";

export const editTodo=(id, title, content)=>{
    
    return {type:EDIT_TODO, id:id, title:title, content:content}
}