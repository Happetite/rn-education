import React, {useState} from 'react';
import {View, TextInput,StyleSheet,Button} from 'react-native';
import { login, signUp } from '../store/actions/AuthActions';
import { useDispatch } from 'react-redux';

export const AuthScreen=(props)=>{
    const [email,setEmail]=useState('');
    const [pw,setPw]=useState('');
    const dispatch=useDispatch();
    const sign=()=>{
        dispatch(signUp(email,pw));
    }
   const log = async ()=>{
        await dispatch(login(email,pw));
        props.navigation.replace('Main');
        
    }
    return(
        
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={styles.input}>
                <TextInput 
                value={email}
                onChangeText={setEmail}
                style={{borderBottomWidth:1}}
                />
            </View>
            <View style={styles.input}>
                <TextInput 
                value={pw}
                onChangeText={setPw}
                style={{borderBottomWidth:1}}
                />
            </View>
            <View style={{width:70,marginTop:10}}>
                <Button title={"login"} onPress={log}/>
            </View>
            <View style={{width:70,marginTop:10}}>
                <Button title={"sign-up"} onPress={sign}/>
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        width:200,
        height:100,
        marginTop:50,
        backgroundColor:"white"
    }
})