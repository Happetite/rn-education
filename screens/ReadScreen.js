import React, { useEffect } from 'react';
import {View,Text,Button} from 'react-native';

export const ReadScreen=(props)=>{
    const param=props.route.params;
    useEffect(
        ()=>{
            props.navigation.setOptions({
                headerRight:()=>{return <Button title="수정하기" onPress={edit} />}
            }
            )
        }
    )
    const edit=()=>{
        props.navigation.navigate("Edit",param);
    }
    return(
        <View style={{backgroundColor:"white", flex:1, alignItems:"center",padding:30}}>
            <Text style={{fontSize:15,fontStyle:'italic'}}>{param.content}</Text>
        </View> 

    )
}


