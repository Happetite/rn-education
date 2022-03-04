import React, {useState,useEffect} from 'react';
import {View, TextInput,StyleSheet,Button} from 'react-native';
import { login, signUp,autoLogin,refreshLogin } from '../store/actions/AuthActions';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthScreen=(props)=>{
    const [email,setEmail]=useState('');
    const [pw,setPw]=useState('');
    const dispatch=useDispatch();

    useEffect(()=>{
        const tryLogin=async ()=>{
            //내부저장소에 데이터가 있는지 확인
            //내부저장소에 얻은 데이터로 로그인
            try {
                const userData = await AsyncStorage.getItem('userData');
                //데이터가 있다->로그인을 하고 다음화면으로 넘어가면 된다.
                if(userData){
                    const transformedData=JSON.parse(userData);
                    // console.log(transformedData);
                    await dispatch(refreshLogin(transformedData.refreshToken));
                    props.navigation.replace("Main");
                    console.log("auto login");
                } else{
                    console.log("there is no data in asyncstorage");
                    //데이터가 없다->이 화면에 남아있으면 됨
                }
              } catch(err) {
                console.log(err)
              }
        }
        tryLogin();
    },[])

    const sign= async ()=>{
        try{
            await dispatch(signUp(email,pw));
            props.navigation.replace('Main');
        } catch(err){
            
        }
    }
   const log = async ()=>{
       try{
        await dispatch(login(email,pw));
        props.navigation.replace('Main');
       }catch(err){
        
       }
       
    }
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={styles.input}>
                <TextInput 
                value={email}
                onChangeText={setEmail}
                style={{borderBottomWidth:1}}
                keyboardType={"email-address"}
                />
            </View>
            <View style={styles.input}>
                <TextInput 
                value={pw}
                onChangeText={setPw}
                style={{borderBottomWidth:1}}
                secureTextEntry={true}
                />
            </View>
            <View style={{width:100,marginTop:10}}>
                <Button title={"login"} onPress={log}/>
            </View>
            <View style={{width:100,marginTop:10}}>
                <Button title={"sign-up"} onPress={sign}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        width:200,
        marginTop:50,
        backgroundColor:"white",
        
    }
})