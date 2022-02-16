import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen} from '../screens/MainScreen';
import {ReadScreen} from '../screens/ReadScreen';
import {WriteScreen} from '../screens/WriteScreen';

const Stack = createNativeStackNavigator();

export const Container=(props)=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Main"}>
                <Stack.Screen name={"Main"} component={MainScreen}  />
                <Stack.Screen name={"Write"} component={WriteScreen} />
                <Stack.Screen name={"Read"} component={ReadScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}