import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen} from '../screens/MainScreen';
import {ReadScreen} from '../screens/ReadScreen';
import {WriteScreen} from '../screens/WriteScreen';
import {Button} from 'react-native'

const Stack = createNativeStackNavigator();

export const Container=(props)=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Main"}>
                <Stack.Screen name={"Main"} component={MainScreen}  />
                <Stack.Screen name={"Write"}
                component={WriteScreen} 
                options={(props)=>
                   { 
                       return(
                        {headerLeft:()=>(<Button title="작성취소" onPress={()=>{props.navigation.navigate("Main")}} />),
                        headerRight:()=>(<Button title="저장" onPress={()=>{props.navigation.navigate("Main")}}/>)
                        }
                        )
                    }
                }
                />
                <Stack.Screen name={"Read"} component={ReadScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}