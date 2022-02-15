import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export const NavigationContainer=(props)=>{
    

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Main"} component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}