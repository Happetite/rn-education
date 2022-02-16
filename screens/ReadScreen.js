import React from 'react';
import {View,Text} from 'react-native';

export const ReadScreen=(props)=>{
    const param=props.route.params;
    
    return(
        <View>
            <Text>읽기화면</Text>
            <Text>제목:{param.title}</Text>
        </View>

    )
}


