import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen} from '../screens/MainScreen';
import {ReadScreen} from '../screens/ReadScreen';
import {WriteScreen} from '../screens/WriteScreen';
import {Button} from 'react-native'
import { EditScreen } from '../screens/EditScreen';
import { AuthScreen } from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

export const Container=(props)=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Auth"}>
                <Stack.Screen name={"Main"} component={MainScreen}
                options={{headerTitleAlign:"center", title:"To Do List"}}
                />
                <Stack.Screen name={"Write"}
                component={WriteScreen} 
                options={{headerTitleAlign:"center", title:"작성 페이지"}}
                />
                <Stack.Screen name={"Read"} component={ReadScreen}  
                options={(props)=>{
                    return(
                    {
                        headerTitleAlign:"center",
                        title:props.route.params.title
                    })
                }}
                />
                <Stack.Screen name={"Edit"} component={EditScreen}  
                options={
                    {
                        headerTitleAlign:"center",
                        title:"수정 페이지"
                    }
                }
                />
                <Stack.Screen name={"Auth"} component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}