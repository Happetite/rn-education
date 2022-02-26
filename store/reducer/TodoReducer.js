import { ADD_TODO } from "../actions/TodoActions";



const initialState={
    todo: [],
    count:3,
    date:101,

}


export const TodoReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            //투두 추가
            //state-> 불변
            //state cannot be modified
            //state cannot be modified
            //state cannot be modified
            //state cannot be modified
            const newArr=[{id:action.id,title:action.title,content:action.content},...state.todo];
            return {...state, todo:newArr };
        default:
            return state;

    }
}





