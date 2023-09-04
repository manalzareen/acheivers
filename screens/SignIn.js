import React from "react"
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Dimensions, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import db from "../config"
import firebase from "firebase";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Entypo } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { SelectList } from 'react-native-dropdown-select-list'
import { ScreenHeight,ScreenWidth } from "react-native-elements/dist/helpers";
const screenheight = Dimensions.get("window").height;
const { height } = Dimensions.get("window");
const screenwidth = Dimensions.get("window").width;
const SPACING = 10;

export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            secureTextEntry: true,
            role: '',
            rolePart: '',

        }
    }

    changeSecureText = () => {

        this.setState({ secureTextEntry: !this.state.secureTextEntry })
    }

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                if (this.state.email != "" && this.state.password != "" && this.state.role != "") {
                    const user = firebase.auth().currentUser.uid;
                    var roleVal = firebase.database().ref('users/' + user);
                    roleVal.on('value', (snapshot) => {
                        let Dbdata = snapshot.val().role;

                        this.setState({ rolePart: Dbdata })
                    });

                    console.log("Rolepart", this.state.rolePart)
                    if (this.state.rolePart != "") {
                        if (this.state.rolePart == this.state.role && this.state.role == "Teacher") {
                            alert('Welcome back!');
                            this.props.navigation.navigate('CrFeed');
                        }
                        else if (this.state.rolePart == this.state.role && this.state.role == "Student") {
                            alert('Welcome back!');
                            this.props.navigation.navigate('StudentId');
                        }
                        else {
                            alert("Oops seems like you have chosen the entered an incorrect role");
                        }
                    }
                    else {
                        alert("Something went wrong! Please choose the role again!")
                    }
                }
                else {
                    alert("Please fill in both email and password fields!")
                }

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }

    sendEmail = () => {
        if (this.state.email != "") {
            firebase.auth().sendPasswordResetEmail(this.state.email)
                .then(() => {
                    alert('Email sent')
                })

                .catch((error) => {

                    var errorMessage = error.message;
                    alert(errorMessage)

                });
        }
        else {
            alert("Please enter the email id")
        }

    }






    render() {
        const data = [

            { key: '1', value: 'Teacher' },
            { key: '2', value: 'Student' },

        ]
        return (
            
                <KeyboardAwareScrollView style={{flex:0.8}}>
    
                <ImageBackground source={require('../assets/bg4.jpg')} style={{ padding: SPACING * 2,
                  height: height,
                 // padding: SPACING * 2,
                  //paddingTop: SPACING * 2,
                  //flexDirection: "row",
                  //justifyContent: "space-between" 
                }}>
                    
                    <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
                    <Image
                source={require('../assets/logo2.png')}
                style={styles.iconImage}></Image>
                <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>
    
              
                </View>
               
    
                <View style={{
padding: SPACING * 1,
paddingTop: SPACING * 3,
height:ScreenHeight/1,
width:ScreenWidth,
marginTop: ScreenHeight-660,
alignSelf:'center',
borderTopLeftRadius: SPACING * 6,
borderTopRightRadius: SPACING * 6,
borderBottomLeftRadius: SPACING * 2,
borderBottomRightRadius: SPACING * 2,
backgroundColor: 'white'}}>
    
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: '10%', marginTop: '5%', color: '#064663' }}>𝚂𝚒𝚐𝚗𝙸𝚗</Text>
                        <View style={{ flexDirection: 'row', marginTop: '5%',marginLeft:9, alignSelf: 'center', width: '85%', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome5 name="at" size={24} color="#064663" />
    
                            <TextInput style={{width: "80%",
                                            height: "90%",
                                        borderWidth: 3,
                                        borderRadius: 35,                                   
                                        borderColor: '#064663',
                                        backgroundColor:"#EEEEEE",
                                        marginLeft: 10,
                                        marginTop:10,
                                        padding:20
                                        }} placeholder=    'Enter Email Id' onChangeText={(val) => { this.setState({ email: val }); }} />
                                                        </View>
    
                        <View style={{ flexDirection: 'row', marginTop:'5%', alignSelf: 'center', width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="lock-open" size={24} color="#064663"  />
                
                            <TextInput style={{ width: "70%",
                                            height: "90%",
                                        borderWidth: 3,
                                        borderRadius: 35,                                   
                                        borderColor: '#064663',
                                        backgroundColor:"#EEEEEE",
                                        marginLeft: 13,
                                        marginRight:20,
                                        marginTop:5,
                                        alignItems:"center",
                                        padding:20,
                                        justifyContent :"center"}}  secureTextEntry={this.state.secureTextEntry} placeholder='Password' onChangeText={(val) => { this.setState({ password: val })}}/>
                            <TouchableOpacity  style = {{marginLeft:-60,marginRight:24, marginTop:10}}onPress={this.changeSecureText}>
                            {this.state.secureTextEntry? <Entypo name="eye-with-line" size={20} color="black" />: <Entypo name="eye" size={20} color="black" />}
                            </TouchableOpacity>
                        
                          
                            
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 15, alignSelf: 'center' }}>
                          <SelectList setSelected={(val)=>{this.setState({role:val})}}
                          data={data}
                          save="value"
                          maxHeight={120}
                          >
    
    
    
    
                          </SelectList>
                        </View>
    
    
    
                        <TouchableOpacity style={{ width: '80%', height: 50, backgroundColor: '#FAAB78', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center', marginTop: 15 }} onPress={() => { this.login() } }>
                            <Text style={{ fontWeight: 'bold', color: '#064663', fontSize: 20 }}>𝚂𝚒𝚐𝚗𝙸𝚗</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{alignSelf:'center',marginTop:15}}  onPress={() => { this.sendEmail() }}>
                        <Text style={{ fontWeight: 'bold', color:"#064663", fontSize: 15,borderRadius:10 }} >Forget Password</Text>
                        </TouchableOpacity>
                
                        </View>
    
                        </ImageBackground>
                
                </KeyboardAwareScrollView>
            )
        }
    }
    const styles = StyleSheet.create({
        container: {
         flex:1,
    
         
        },
        androidView: {
          marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        },
        titletext: {
            textAlign: 'center',
            color: '#FAAB78',
            fontSize: 50,
            fontWeight: 'bold',
           
            marginLeft: 10,
          },
        
        iconImage: {
            width: 80,
            height: 80,    
            borderRadius:60
          },
    })