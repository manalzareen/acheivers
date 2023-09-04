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
  TextInput,
  ScrollView,
  Alert,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScreenWidth,ScreenHeight } from 'react-native-elements/dist/helpers';

export default class CreateReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_1',
      dropdownHeight: 40,
      light_theme: true,
    };
  }
  async addReport() {
    if (this.state.name && this.state.classGrade && this.state.section) {
      var today = new Date();
      var dd = String(today.getDate());
      var mm = String(today.getMonth() + 1); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + '/' + mm + '/' + yyyy;

      let cardData = {
        name: this.state.name.toUpperCase(),
        classGrade: this.state.classGrade,
        section: this.state.section,
        studentid:this.state.studentid,
        engmarks:this.state.engmarks,
        mathmarks:this.state.mathmarks,
        sciencemarks:this.state.sciencemarks,
        socialmarks:this.state.socialmarks,
        hindimarks:this.state.hindimarks,
        telugumarks:this.state.telugumarks,

        engmarks2:this.state.engmarks2,
        mathmarks2:this.state.mathmarks2,
        sciencemarks2:this.state.sciencemarks2,
        socialmarks2:this.state.socialmarks2,
        hindimarks2:this.state.hindimarks2,
        telugumarks2:this.state.telugumarks2,

        //faAverage:this.state.faAverage,
       // absence:this.state.absence,
        attendence:this.state.attendence,

        created_on : today
      };
      var combine = this.state.name.toUpperCase() + this.state.classGrade + this.state.studentid;
      console.log(combine);
      await firebase
        .database()
        .ref('/reports/'+combine)
        .set(cardData)
        .then(function (snapshot) { alert('Saved')
       });
       this.props.navigation.navigate('CrFeed');
      console.log(cardData);
     
    }
    //alert(title, message?, buttons?, options?)
    // cancelable : Defines if alert can be dismissed by tapping outside of the alert box.
    else {
     
      Alert.alert(
        'Error',
        'All fields are required !!!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  }
  

  render() {
    return (
     
      <ImageBackground
        source={require('../assets/bg4.jpg')}
        style={styles.container}>
       
       <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' ,marginTop:10}}>
          <Image
            source={require('../assets/logo2.png')}
            style={styles.iconImage}></Image>
          <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>


        </View>

          {/* <View>
            <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("CrFeed")}>
            <Image 
            source ={require("../assets/arrowImg.png")}
            style ={{
                      width:70,
                      height:70,
                      marginLeft:-10,
                      marginTop:-45,
                      borderColor:"black", 
                    }}>
              </Image>
              </TouchableOpacity>
            </View> */}

        <KeyboardAwareScrollView >
          <View style={styles.baseReport}>
            <Text
              style={{
                color: '#F1F6F5',
                fontSize: 30,
                //marginLeft: 90,
               marginTop:-60,
                marginBottom: 10,
              }}>
              𝚁𝚎𝚙𝚘𝚛𝚝 𝙲𝚊𝚛𝚍
            </Text>
    



            <View
              style={{
    
                borderRadius: 20,
                height: 50,
              marginTop:30,
                alignContent:'space-between',             
                flexDirection:'row',
              width:ScreenWidth,
              }}>
              <TextInput
                style={styles.nameInput}
                onChangeText={(name) => this.setState({ name })}
                placeholder={'𝙽𝚊𝚖𝚎'}
                placeholderTextColor={'#E6BA95'}
                placeholderColor={'#E6BA95'}
              />
           

            
              <TextInput
                style={styles.classInput}
                onChangeText={(classGrade) => this.setState({ classGrade })}
                placeholder={'𝙲𝚕𝚊𝚜𝚜'}
                placeholderTextColor={'#E6BA95'}
                placeholderColor={'#E6BA95'}
                keyboardType = 'numeric'
              />
           
              <TextInput
                style={styles.secInput}
                onChangeText={(section) => this.setState({ section })}
                placeholder={'Sec'}
                placeholderTextColor={'#E6BA95'}
                placeholderColor={'#E6BA95'}
              />
              </View>
           {/* <View style={{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}>
              <Text style = {{textAlign: 'center',
    color: '#064663',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop:30,
    flexDirection:"row"}}>
              𝙰 - 𝙴𝚡𝚌𝚎𝚕𝚕𝚎𝚗𝚝     𝙲 - 𝙰𝚟𝚎𝚛𝚊𝚐𝚎      𝙴- 𝙿𝚘𝚘𝚛
              </Text>
              </View>
              <View style={{flexDirection:'row',alignContent:'space-around'}}>
              <Text style={{
                color: '#064663',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: -330,
    marginTop:60,
    flexDirection:"row"}}>
              𝙱 - 𝚅𝚎𝚛𝚢 𝙶𝚘𝚘𝚍     𝙳 - 𝙱𝚎𝚕𝚘𝚠 𝙰𝚟𝚎𝚛𝚊𝚐𝚎     𝙵 - 𝙽𝚘 𝙴𝚏𝚏𝚘𝚛𝚝
              </Text>
              </View> */}

              <View>
              <TextInput
                style={styles.studentInput}
                onChangeText={(studentid) => this.setState({studentid})}
                placeholder={'𝚂𝚝𝚞𝚍𝚎𝚗𝚝𝙸𝚍'}
                placeholderTextColor={'#E6BA95'}
                placeholderColor={'#E6BA95'}
              />

              </View>

             <View style={styles.subjects}>
              <View style= {{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}>
              <Text
                style={{
                  marginTop: 10,
                  color: '#064663',
                  fontSize: 20,
                  marginLeft: -30,
                }}>
                𝚂𝚞𝚋𝚓𝚎𝚌𝚝𝚜
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#E6BA95',
                  marginTop: 10,
                  fontSize:20,
                  fontWeight:"bold",
                  marginLeft:-15
                }}>
                𝚂𝚊𝟷
              </Text>
              <Text style ={{
                  textAlign: 'center',
                  color: '#E6BA95',
                  marginTop: 10,
                  fontSize:20,
                  marginLeft:20,
                  fontWeight:"bold"
                }}>
              𝚂𝚊𝟸
              </Text>
              </View>
              <View style={{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}>
              <Text style={styles.subtext}> 𝙴𝚗𝚐𝚕𝚒𝚜𝚑</Text>

              <TextInput
                style={styles.fa1input}
                onChangeText={(engmarks) => this.setState({ engmarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={"#8E806A"}
                keyboardType = 'numeric'
              />

              <TextInput
                style={styles.fa2input}
                onChangeText={(engmarks2) => this.setState({ engmarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />
                </View> 
                
                <View style = {{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}>
              <Text style={{marginTop: 15,
    marginLeft: 10,
    color: '#E6BA95',
    fontWeight:"bold",
    fontSize:18}}> 𝙼𝚊𝚝𝚑 </Text>

              <TextInput
                style={{
                  width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10,
                  marginLeft: 30,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30,}}
                onChangeText={(mathmarks) => this.setState({ mathmarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />

             <TextInput
                style={{ width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10 ,
                  marginRight: 5,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30}}
                onChangeText={(mathmarks2) => this.setState({ mathmarks2})}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />
               </View>
              
            <View style = {{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}>
             <Text style={{marginTop: 20,
    marginLeft: 2,
    color: '#E6BA95',
    fontWeight:"bold",
    fontSize:18}}> 𝚂𝚌𝚒𝚎𝚗𝚌𝚎 </Text>

<TextInput
                style={{width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10,
                  marginLeft: 10,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30,}}
                onChangeText={(sciencemarks) => this.setState({ sciencemarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />

<TextInput
                style={{width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10 ,
                  marginRight: 7,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30}}
                onChangeText={(sciencemarks2) => this.setState({ sciencemarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />
             </View>  
                       
                
              <View  style = {{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}> 
              <Text style={{marginTop: 15,
    marginLeft: 10,
    color: '#E6BA95',
    fontWeight:"bold",
    fontSize:18}}> 𝚂𝚘𝚌𝚒𝚊𝚕 </Text>

    <TextInput
                style={{width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10,
                  marginLeft: 10,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30,}}
                onChangeText={(socialmarks) => this.setState({ socialmarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />

               <TextInput
                style={{width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10 ,
                  marginRight: 7,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30}}
                onChangeText={(socialmarks2) => this.setState({ socialmarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />

              </View>
               
               <View  style = {{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}>
             <Text style={{marginTop: 15,
    marginLeft: 10,
    color: '#E6BA95',
    fontWeight:"bold",
    fontSize:18}}> 𝙷𝚒𝚗𝚍𝚒 </Text>

<TextInput
                style={{width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10,
                  marginLeft: 15,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30,}}
                onChangeText={(hindimarks) => this.setState({ hindimarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />

<TextInput
                style={{width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10 ,
                  marginRight: 5,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30}}
                onChangeText={(hindimarks2) => this.setState({ hindimarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />


             </View>
            
               
               <View style = {{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}>
               <Text style={{marginTop: 15,
    marginLeft: 10,
    color: '#E6BA95',
    fontWeight:"bold",
    fontSize:18}}> 𝚃𝚎𝚕𝚞𝚐𝚞 </Text>

    <TextInput
                style={{
                  width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10,
                  marginLeft: 9,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30,
                }}
                onChangeText={(telugumarks) => this.setState({ telugumarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />

              
              <TextInput
                style={{width: 95,
                  height: 39,
                  color: '#064663',
                  borderColor: '#064663',
                  marginTop: 10 ,
                  marginRight: 5,
                  borderWidth:3,
                  borderRadius:9,
                  paddingLeft:30}}
                onChangeText={(telugumarks2) => this.setState({ telugumarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
                keyboardType = 'numeric'
              />


               
               </View>
               
             </View>  

           

           <View style={{flexDirection:'row',marginTop:20,alignSelf:'center',alignContent:"space-around"}}>
             <Text style={styles.text}> 𝙰𝚝𝚝𝚎𝚗𝚍𝚊𝚗𝚌𝚎 :- </Text>
              <TextInput
                style={{ width: 180,
                  height: 35,
                  //color: '#064663',
                  borderColor: '#E6BA95',
                  //marginTop:-30,
                 // marginLeft: 120,
                  borderWidth:2,
                  borderRadius:9,
                  paddingLeft:10,}}
                onChangeText={(attendence) => this.setState({attendence })}
                placeholder={''}
                placeholderColor={'#E6BA95'}
                placeholderTextColor={"#E6BA95"}
                keyboardType = 'numeric'
              />
            </View>
              
          
            <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.addReport()}>
            <Text style={styles.submitButtonText}> 𝚂𝚞𝚋𝚖𝚒𝚝 </Text>
                </TouchableOpacity>
                </View>
        

        </KeyboardAwareScrollView>
        <View>
          

          <FlatList
            keyExtractor={this.keyExtractor}
            //data={}
            renderItem={this.renderItem}
            horizontal={true}></FlatList>
        </View>
        
      </ImageBackground>
  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:ScreenWidth,

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
  baseReport: {
    width:ScreenWidth,
    backgroundColor: '#F1F6F5',
    //width: 500,
    height: ScreenHeight,
    marginTop:90,
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginLeft:3,
    marginRight:3,
    borderRadius: 20,
    bordercolor: '#E05D5D',
  },
  androidView: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  schoolInput: {
    width: 300,
    height:60,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#064663',
    marginLeft: 25,
    paddingLeft:20,
    marginTop:25,
    fontSize:20
  },
  
  nameInput: {
    width: 160,
    height: 55,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#064663',
    marginLeft: 16,
    paddingLeft:10,
    fontSize:15
  },
  classInput: {
    width: 100,
    height: 55,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#064663',
    marginLeft: 10,
    paddingLeft:10,
    fontSize:15
  },
  secInput: {
    width: 80,
    height: 55,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#064663',
    marginLeft: 20,
    paddingLeft:10,
    fontSize:15
  },
  studentInput: {
    width: 140,
    height: 55,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#064663',
    marginLeft: -180,
    marginTop:20,
    paddingLeft:10,
    fontSize:15
  },
  grade:{
    textAlign: 'center',
    color: '#FAAB78',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop:120,
    flexDirection:"row"
  },
  submitButton: {
    marginTop: 20,
   // marginRight:ScreenWidth-300,
    borderWidth: 2,
    borderColor: '#E6BA95',
    alignItems: 'center',
    alignSelf:'center',
    //justifyContent:'center',
    width: 180,
    height: 50,
    backgroundColor: '#E6BA95',
    borderRadius: 20,
    fontSize:35,
  },
  subjects: {
    width: ScreenWidth,
    height: 450,
    color: 'white',
    borderColor: '#E6BA95',
    borderWidth: 3,
    marginTop: 30,
    borderRadius:10
    //marginRight: 10,
  },
  fa1: {
    //width: 96,
    //height: 360,
    //color: 'white',
    //borderColor: '#E4E9BE',
    //borderWidth: 3,
    marginTop: -345,
    //marginLeft: 120,
   // borderWidth: 3,
  },

  fa2: {
    marginTop: -371,
  },
  extra: {
    width: ScreenWidth-25,
    height: 60,
    color: '#99A799',
    borderColor: '#99A799',
    borderWidth: 4,
    marginTop: 30,
    marginLeft:10,
    borderWidth: 2.5,
    alignSelf:"flex-start",
    alignContent:'center',
    borderRadius:30,
    flexDirection:'row',

  },
  text: {
   // marginTop:60,
    color: '#064663',
    
    fontSize:20,
    //marginLeft:-230
  },
  subtext: {
    marginTop: 25,
    marginLeft: 1,
    color: '#E6BA95',
    fontWeight:"bold",
    fontSize:18
  },
  fa1input:{
  width: 95,
    height: 39,
    color: '#064663',
    borderColor: '#064663',
    marginTop: 22,
    marginRight: -130,
    borderWidth:3,
    borderRadius:9,
    paddingLeft:30,
  },
  fa2input:{
    width: 95,
    height: 39,
    color: '#064663',
    borderColor: '#064663',
    marginTop: 22,
    marginLeft: 120,
    borderWidth:3,
    borderRadius:9,
    paddingLeft:30,
  },
attendenceinput:{
  width: 160,
  height: 1,
  color: '#064663',
  borderColor: '#064663',
  marginTop:-10,
  marginLeft: 120,
  borderWidth:1,
  borderRadius:9,
  paddingLeft:10,
},
plaintext:{
fontSize:20,
textAlign:'center'
},
text1: {
    marginTop: 20,
    color: '#BB9981',
  },
  submitButtonText:{
fontSize:25,
textAlign:'center',
color:""
  },
  
});