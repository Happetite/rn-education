import React, {useEffect, useState} from 'react';
import {View,Text, Button, StyleSheet, TouchableHighlight, useWindowDimensions, FlatList, Alert} from 'react-native';
import {TodoCard} from '../components/TodoCard';
import { useSelector } from 'react-redux';

export const MainScreen=(props)=>{
    const width=useWindowDimensions().width;
    const height=useWindowDimensions().height;
    //state 접근
    const todos=useSelector(state=>state.todo.todo);
    
    // const [todos, setTodos]=useState([]);
    // parameter를 전달받는다면, -> 해당 오브젝트를 state에 저장
    // 인식을 먼저해야됨 -> 저장 명령
    // useEffect(()=>{
    //     if(props.route.params?.id){
    //         const newItem=props.route.params
    //         setTodos((prev)=>{
    //             let exId=prev.findIndex(elem=>elem.id===newItem.id)
    //             if(exId!=-1){
    //                 let newState=[...prev];
    //                 newState[exId]=newItem;
    //                 return newState;
    //             }
    //             return [newItem,...prev]
    //         });
    //     }
    // },[props.route.params?.id]);
    
    


    //componentDidMount

    
    const addTodo=()=>{
        //쓰기 화면으로 가기
        props.navigation.navigate("Write");
        //기능이 추가가 될 수도 있습니다.



    }
    return(
        <View style={{flex:1,width:width,height:height, alignItems:"center"}}>
            {/* 1. 추가 버튼->쓰기 페이지 */}
            {/* 2. todo 들을 렌더링할 flatlist */}
            <TouchableHighlight style={styles.addButtonContainer} onPress={addTodo}>
                <View >
                    <Text style={{fontSize:30}}>+</Text>
                </View>
            </TouchableHighlight>
            <FlatList 
            data={todos}
            renderItem={(itemData) => {
                          return (
                            <View style={{marginBottom:20}}>
                            <TodoCard 
                            title={itemData.item.title} 
                            onPress={()=>{ props.navigation.navigate("Read", itemData.item )}}/>
                            </View>
                          );
                        }}
            />
        </View>

    )
}

const styles=StyleSheet.create({
    addButtonContainer:{
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        height:100,
        backgroundColor:"gray",
        borderRadius:20,
        marginVertical:30
    },

});