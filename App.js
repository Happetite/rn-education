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
import { TodoCard } from "./components/TodoCard";
import {useFonts} from 'expo-font';
import {Container} from './Navigator/Container'
//styling with flexbox, shadows, borderRadius check
//컴포넌트화 하기 check
//expo fonts review
//javascript async await
  
//useWindowDimensions, Dimensions
//expo screen orientation 넘어가기
//platform API and platform specific code 


//react navigation

//SafeAreaView
//KeyboardAvoidingView

//modal <- 얘의 사용을 비추

// export default function App() {
  
//   const [loaded]=useFonts({
//     customFont1: require('./assets/OpenSans-Regular.ttf')
//   })
//   const [text, setText] = useState();
//   const [todos, setTodos] = useState([]);
//   const [isModalVisible, setIsModalVisible]=useState(false);

//   const handleTextChange = (value) => {
//     setText(value);
//   };

//   const addTodo = () => {

//     setTodos((prev) => {
//       return [...prev, { key: text, content: text }];
//     });
//     setText("")
//   };
  
//   // const deleteTodo=()=>{
//   //   setTodos((prev)=>{
//   //     return prev.filter((todo)=>{return todo.key!=text});
//   //   })
//   // }
//   const deleteTodo=(string)=>{
//     setTodos((prev)=>{
//       return prev.filter((todo)=>{return todo.key!=string});
//     })
//   }

  
//   if(!loaded){
//     return null;
//   }
//   const [page,setPage]=useState(0);
//   return (
//     <View style={{ padding: 50 }}>
//       {/* 추가버튼과, 입력창 */}

//       {/* <TextInput
//         placeholder="할 일을 적으세요"
//         value={text}
//         onChangeText={handleTextChange}
//       /> */}
//       <View>
//       <Button title={"추가"} onPress={()=>{setIsModalVisible(true)}} />
//       </View>
//       {/* 데이터를 리스트로 제공하는 형태가 나와야 함 */}

//       {/*<ScrollView >
//         {todos.map((item)=>{
//         return(
//           <View>
//             <Text>
//               {item.content}
//             </Text>
//           </View>
//         )
//         })}
//       </ScrollView> */}
//       <FlatList
//         data={todos}
//         contentContainerStyle={{ alignItems:"center",}}
//         renderItem={(itemData) => {
//           return (
//             <View style={{marginBottom:5}}>
//               <TodoCard onPress={()=>{deleteTodo(itemData.item.content)}} 
//               index={itemData.index} 
//               content={itemData.item.content}/>
//             </View>
//           );
//         }}
//       />
//       {isModalVisible?
//       <View style={{position:"absolute",top:100,backgroundColor:"white", alignSelf:"center",height:600,width:300,borderRadius:25,borderWidth:2}}>
//         <TextInput
//         placeholder="할 일을 적으세요"
//         value={text}
//         onChangeText={handleTextChange}
//         />
//         <Button title={"close"} onPress={()=>{setIsModalVisible(false)}}/>
//         <Button title={"저장"} onPress={()=>{addTodo(); setIsModalVisible(false)}}/>
//       </View>
//       :null}
//       </View>
//   );
// }

export default function App(){
  
  const [state1,setState1]=useState()
  return(
    <Container />
    // <View>
    //   <Button onPress={()=>{setState1(false)}}/>
    //   <Component1 bool={state1}/>
    //   <Component1 />
    // </View>
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
