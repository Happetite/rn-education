import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Modal
} from "react-native";
import React, { useState } from "react";
import {Container} from './Navigator/Container'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { TodoReducer } from "./store/reducer/TodoReducer";
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

export default function App(){
  //여러가지 reducer들을 한번에 모아주는  역할
  
  const rootReducer= combineReducers({
    todo: TodoReducer
  });

  const store=createStore(rootReducer,applyMiddleware(ReduxThunk));

  return(
    
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
