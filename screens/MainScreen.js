import React from 'react';
import {View,Text, Button} from 'react-native';

export const MainScreen=(props)=>{
    
    
    return(
        <View>
            <Text>메인화면</Text> 
            <Button 
            title={"읽기화면으로 이동"}
            onPress={()=>{props.navigation.navigate("Read", {title:"ㅁㄴㅇㄹ", content:"asdasdfasdf"})}}
            />
        </View>

    )
}