import React, {useState} from 'react';
import {View,Text, Button, StyleSheet, TouchableHighlight, useWindowDimensions, FlatList, Alert} from 'react-native';
import {TodoCard} from '../components/TodoCard';

export const MainScreen=(props)=>{
    const width=useWindowDimensions().width;
    const height=useWindowDimensions().height;
    const [todos,setTodos]=useState([]);
    const addTodo=()=>{
        //쓰기 화면으로 가기
        props.navigation.navigate("Write");
        //기능이 추가가 될 수도 있습니다.
    }
    return(
        <View style={{width:width,height:height, alignItems:"center"}}>
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
                            <View style={{marginBottom:5}}>
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