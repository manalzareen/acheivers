import React from 'react';
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import StudentId from '../screens/StudentId';
import Home from '../screens/Home';
import CrFeed from '../screens/CrFeed';
import BottomTabNavigator from './BottomTabNavigator';
import CreateReport from "../screens/CreateReport";
import ReportCard from "../screens/ReportCard";
import StoryCard from "../screens/ReportScreen";
import Search from "../screens/Search";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import { MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';
import  { Component } from 'react';
const Stack = createStackNavigator();

export default class StackNavigator extends Component{
  constructor(props) {
    super(props);
   
      
    };
  
  render() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor:'#000F1A' ,
          shadowOpacity: 0,
          elevation: 0,
          height:70,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{title:" ", headerShown: true, headerBackTitleStyle:{fontSize:20} } }/>
      <Stack.Screen name="SignIn" component={SignIn} options={{title:" ", headerShown: true, headerBackTitleStyle:{fontSize:20} } }/>
      <Stack.Screen name="StudentId" component={StudentId} options={{title:" ", headerShown: false, headerBackTitleStyle:{fontSize:20} } } />
      {/* <Stack.Screen name="tab" component={BottomTabNavigator} /> */}
      <Stack.Screen name="CrFeed" component={CrFeed} options={{title:" ", headerShown: false, headerBackTitleStyle:{fontSize:20},
    //   headerRight: () => (
    //           <View style={{marginRight: 10}}>
    //             <MaterialIcons name="logout" size={24} color="white" onPress={()=>firebase.auth().signOut().then(() => {
    //   alert('Logged Out!!');
    //   this.props.navigation.navigate("Home")
    //  }).catch((error) => {
    //   alert(error.message);
    //   //alert("Oops something went wrong! Try again later.")
    //  })} /></View>
    //  ), 
     }}/>
      <Stack.Screen name="CreateReport" component={CreateReport} options={{title:" ", headerShown: true, headerBackTitleStyle:{fontSize:20} } }/>
      <Stack.Screen name="ReportCard" component={ReportCard} options={{title:" ", headerShown: true, headerBackTitleStyle:{fontSize:20} } }/>
       <Stack.Screen name="ReportScreen" component={StoryCard} options={{title:" ", headerShown: true, headerBackTitleStyle:{fontSize:20} } }/>
      <Stack.Screen name="Search" component={Search} options={{title:" ", headerShown: true, headerBackTitleStyle:{fontSize:20} } }/>
    
    </Stack.Navigator>
  );
  

    }
  }


