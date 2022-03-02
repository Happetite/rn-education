import { ADD_TODO, EDIT_TODO, FETCH_TODO } from "../actions/TodoActions";



const initialState={
    todo: [],
    count:3,
    date:101,
}


export const TodoReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            const newArr=[{id:action.id,title:action.title,content:action.content},...state.todo];
            return {...state, todo:newArr };
        case EDIT_TODO:
            //id를 이용해서 match가 되는 todo 오브젝트->수정
            const index=state.todo.findIndex((elem)=>{return elem.id===action.id});
            //못찾은 경우
            if(index===-1){ console.log("error"); return state }
            
            //찾은 경우
            // ******
            const editedArr=[...state.todo];
            // ******
            editedArr[index]={id:action.id,title:action.title,content:action.content};
            return {...state, todo:editedArr}
        case FETCH_TODO:
            return {...state,todo:action.todoArray};
        default:
            return state;

    }
}


//authentication
//회원가입.로그인->유저계정이 만들어지고, 접근권한

//token




