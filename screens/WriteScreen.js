import React, {useEffect, useState} from 'react';
import {View,Text, TextInput, StyleSheet, ScrollView} from 'react-native';

export const WriteScreen=(props)=>{
    const [title,setTitle]=useState();
    const [content,setContent]=useState();
    //1.react navigation library에서 제공되는 header 사용
    // useEffect(()=>{
    //     props.navigation.setOptions({
    //         headerLeft:<Button onPress={()=>{props.navigation.navigate("Main")}}/>
    //         headerRight:
    //     })
    // },[])
    return(
        <View style={styles.main}>
            {/* 1 .뒤로가기, 저장버튼 */}
            {/* 2. 제목, 내용을 쓸 수 있는 공간 */}
            <View style={{width:"90%", borderBottomColor:"black", borderBottomWidth:1}}>
                <TextInput 
                value={title}
                onChangeText={setTitle}
                placeholder={"제목"}
                maxLength={25}
                />
            </View>
            <ScrollView
            style={{borderWidth:1}}
            >
                <TextInput 
                value={content}
                onChangeText={setContent}
                placeholder={"할 일을 적어주세요!"}
                multiline={true}
                />
            </ScrollView>
        </View>

    )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
    }
})