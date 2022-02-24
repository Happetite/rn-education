import React from 'react';
import {View,Text, TouchableOpacity, StyleSheet ,Dimensions, useWindowDimensions, Platform} from 'react-native';
import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//expo-fonts
export const TodoCard=(props)=>{
    //prop->todo에 들어갈 내용과, 인덱스가 주어지면
    //그거를 예쁘게 나타내는 카드
    //터치가 가능한 component->onPress 함수를 실행해야함->prop으로 받아야 함
    // const width=Dimensions.get("window").width;
    // const height=Dimensions.get("window").height;
    // Dimensions.addEventListener()
    const width=useWindowDimensions().width;
    const height=useWindowDimensions().height;
    //android 오류가 있음 reliable
    return(
        <TouchableOpacity  onPress={props.onPress}>
              <View style={styles.card}>
                <View>
                    <Text>
                    {props.title}
                    </Text>
                </View>
              </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({

    card:{
        backgroundColor:"white",
        height:50,
        width:320,
        borderRadius:15,
        elevation:1, //android->ios에서는 작동 x
        shadowColor:"black" ,
        shadowRadius:1 , //ios->android 작동 x
        alignItems:"center",
        justifyContent:"center"
        
    }
})