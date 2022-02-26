//1 todo 추가
//2 todo 수정


export const ADD_TODO="ADD_TODO";

export const addTodo=(id,title,content)=>{
    
    const myTitle=title.concat(" 이것은 글로벌 state입니다.");

    return {type:ADD_TODO, id:id, title:myTitle,content:content}
}

