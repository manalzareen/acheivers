import React, { Component } from 'react';
  import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
  } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';

  export default class Home extends Component {
    render() {
      return (
        <ImageBackground
          source={require('../assets/bg6.jpg')}
          style={styles.container}>
          <SafeAreaView style={styles.androidView} />
          <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>

        <Image
            source={require('../assets/logo.png')}
            style={styles.iconImage}></Image>
         
        <TouchableOpacity
        style={styles.studentbutton}
        onPress={() => this.props.navigation.navigate('studentId')}>
          <Text style={styles.st}>Student </Text>
        </TouchableOpacity>
      
        
        <TouchableOpacity
        style={styles.teacherbutton}
        onPress={() => this.props.navigation.navigate('CrFeed')}>
          <Text style={styles.teacher}>Student </Text>
        </TouchableOpacity>
      
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
     flex:0.97,
     borderRadius:"3px",
     marginLeft:5,
     marginTop:30

    },
    androidView: {
      marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    titletext: {
      textAlign: 'center',
      color: '#FAAB78',
      fontSize: RFValue(40),
      fontWeight: 'bold',
      marginTop: RFValue(35),
      marginRight: RFValue(-60),
    },
    studentbutton:{
      width: 230,
      height:60,
      backgroundColor: '#FFFBEB',
      borderRadius: RFValue(70)  , 
      marginLeft:80,
      marginTop:20
    },
    st:{
      marginTop:  RFValue(10),
      marginLeft: RFValue(37),
      fontSize: RFValue(20),
      color: '#FAAB78',
      fontWeight:"bold"
    },
    iconImage: {
      width: "22%",
      height: "11%",
      marginRight: RFValue(70),
      marginTop:   RFValue(-60),
      marginLeft: RFValue(3),
      borderRadius:40
    },
    teacherbutton:{
        width: 230,
        height:60,
        backgroundColor: '#FFFBEB',
        borderRadius: RFValue(70)  , 
        marginLeft:80,
        marginTop:20
      },
      teacher:{
        marginTop:  RFValue(100),
        marginLeft: RFValue(37),
        fontSize: RFValue(20),
        color: '#FAAB78',
        fontWeight:"bold"
      },
  });
