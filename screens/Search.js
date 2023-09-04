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
  Alert,
  ScrollView,
} from 'react-native';
import ReportScreen from "./ReportScreen";
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScreenWidth, ScreenHeight } from 'react-native-elements/dist/helpers';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      sdetails: '',
      avg: "",
      avg2: "",
    };
  }
  averagemarks = () => {
     var avg = (+(this.state.sdetails.engmarks) +
      +(this.state.sdetails.mathmarks) +
      +(this.state.sdetails.sciencemarks) +
      +(this.state.sdetails.socialmarks) +
      +(this.state.sdetails.hindimarks) +
      +(this.state.sdetails.telugumarks)) / 6;
    //console.log("Average", avg)
     var avg2 = +(+(this.state.sdetails.engmarks2)+
    +(this.state.sdetails.mathmarks2) +
    +(this.state.sdetails.sciencemarks2) +
    +(this.state.sdetails.socialmarks2) +
    +(this.state.sdetails.hindimarks2) + 
    +( this.state.sdetails.telugumarks2))/6 
    this.setState({ avg: avg.toFixed(2) });
    this.setState({ avg2:avg2.toFixed(2)});
  }
  componentDidMount() {
   
    //this.averagemarks()
    this.handleSearch(
      this.props.route.params.name,
      this.props.route.params.classGrade,
      this.props.route.params.studentid,
    );
  }
  handleSearch = async (name, classGrade ,studentid) => {
    let searchkey = name.toUpperCase() + classGrade + studentid;
    console.log(searchkey);

    let studentname;
    await firebase
      .database()
      .ref('/reports/' + searchkey)
      .on('value', (snapshot) => {
        studentname = snapshot.val();
        this.setState({ sdetails: studentname });
      });
  };


  render() {
    return (
      <ImageBackground
        source={require('../assets/bg1.jpg')}
        style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', }}>
          <Image
            source={require('../assets/logo2.png')}
            style={styles.iconImage}></Image>
          <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>


        </View>

        {!this.state.sdetails ? (
          <Text style={styles.noStudentText}>
            𝙽𝚘 𝚂𝚝𝚞𝚍𝚎𝚗𝚝 𝙳𝚊𝚝𝚊 𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚑𝚎𝚌𝚔 𝚝𝚑𝚎 𝚜𝚝𝚞𝚍𝚎𝚗𝚝 𝚗𝚊𝚖𝚎 𝚊𝚗𝚍 𝚌𝚕𝚊𝚜𝚜
          </Text>
        ) : (
          <ScrollView>
            <View style={styles.storyCard}>
            
              <View style={{
                flexDirection: 'row', width: RFValue(300), justifyContent: 'space-around', alignSelf: 'center', alignContent: 'center',
                height: 40,
                marginTop: 10,
                borderColor: '#064663',
                backgroundColor: '#F1F6F5',
                borderRadius: RFValue(20), borderEndWidth: RFValue(3),
              }}>
                <Text style={styles.reportInfo}>
                 𝙽𝚊𝚖𝚎: {this.state.sdetails.name}
                </Text>
              
                <Text style={styles.classText}>
                  𝙲𝚕𝚊𝚜𝚜 : {this.state.sdetails.classGrade}
                </Text>
              </View>


              <View style={{ flexDirection: 'row', alignContent: 'space-around', justifyContent: 'space-around' }}>
                <Text
                  style={{
                    marginTop: RFValue(10),
                    color: '#73A9AD',
                    fontSize: RFValue(20),
                    fontWeight: 'bold',

                  }}>
                  𝚂𝚊𝟷
                </Text>
                <Text
                  style={{
                    marginTop: RFValue(10),
                    color: '#73A9AD',
                    fontSize: RFValue(20),
                    fontWeight: 'bold',
                    marginLeft: RFValue(50),

                  }}>
                𝚂𝚊𝟸
                </Text>
              </View>


              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝙴𝚗𝚐𝚕𝚒𝚜𝚑 : {this.state.sdetails.engmarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝙴𝚗𝚐𝚕𝚒𝚜𝚑 : {this.state.sdetails.engmarks2}
                </Text>
              </View>


              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝙼𝚊𝚝𝚑 : {this.state.sdetails.mathmarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝙼𝚊𝚝𝚑 : {this.state.sdetails.mathmarks2}
                </Text>
              </View>


              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝚂𝚌𝚒𝚎𝚗𝚌𝚎 : {this.state.sdetails.sciencemarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝚂𝚌𝚒𝚎𝚗𝚌𝚎 : {this.state.sdetails.sciencemarks2}
                </Text>
              </View>

              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝚂𝚘𝚌𝚒𝚊𝚕 : {this.state.sdetails.socialmarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝚂𝚘𝚌𝚒𝚊𝚕 : {this.state.sdetails.socialmarks2}
                </Text>
              </View>

              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝙷𝚒𝚗𝚍𝚒: {this.state.sdetails.hindimarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝙷𝚒𝚗𝚍𝚒: {this.state.sdetails.hindimarks2}
                </Text>
              </View>

              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝚃𝚎𝚕𝚞𝚐𝚞: {this.state.sdetails.telugumarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝚃𝚎𝚕𝚞𝚐𝚞: {this.state.sdetails.telugumarks2}
                </Text>
              </View>


              <View style={styles.others}>
                <Text style={styles.attendenceText}>
                  𝙰𝚝𝚝𝚎𝚗𝚍𝚊𝚗𝚌𝚎 : {this.state.sdetails.attendence}
                </Text>
              </View>
              {/* <View style={{
                      width:320,
                      height:50,
                      borderWidth: RFValue(3),
                      borderRadius: RFValue(20),
                      backgroundColor: '#73A9AD',
                      borderColor: '#C4DFAA',
                      marginTop:20,
                      alignContent:'space-around',
                      justifyContent:'space-around',
                      flexDirection:'row',
                      marginLeft:20,
                                         
              }}>
                <Text style={styles.reportInfo}>
                  𝙶𝙿𝙰1 : {this.state.avg}
              </Text>
              <Text style={styles.reportInfo}>
                  𝙶𝙿𝙰2 : {this.state.avg2}
              </Text>                      
              </View>      */}
              <View style={{ marginLeft:20}} >

                <TouchableOpacity onPress={this.averagemarks} >
                <Text style={styles.absentText}>
                   Click here to know your SA1 and SA2 averages
                  </Text> 
                  </TouchableOpacity>
              </View>
<View style={styles.average}>
                 
                    <Text style={{
    marginTop: 10,
    color: '#064663',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
                    }}> 
                    𝚂𝚊𝟷 :
                    {this.state.avg}</Text>
                    <Text style={{
    marginTop: 10,
    color: "#064663",
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,}}>
                    𝚂𝚊𝟸 :
                    {this.state.avg2}
                    </Text>

                    </View>

               
            </View>
          </ScrollView>
        )}


        {/* </View> */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#15193c',
  },
  noStudentText: {
    alignSelf:'center',
    alignContent:'center',
     marginTop: 60,
    //marginLeft: 40,
    color: '#F1F6F5',
    fontSize: 22,
   
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
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
  absentText: {
    marginTop: 10,
    color: '#064663',
    fontSize: 15,
    fontWeight: 'bold',
  },
 

 
  storyCard: {
    flex:1,
    margin: RFValue(5),
    backgroundColor: 'white',
    borderRadius: RFValue(30),
  },

  reportInfo: {
    marginTop: 10,
    color: '#064663',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  gpatext: {
    marginTop: 10,
    color: '#F1F6F5',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  classGrade: {
    width: RFValue(120),
    height: RFValue(65),
    borderWidth: RFValue(3),
    borderRadius: RFValue(20),
    backgroundColor: '#C4DFAA',
    borderColor: '#73A9AD',
    marginLeft: 140,
    marginTop: -55,
  },
  classText:{
  marginTop: 10,
    color: '#064663',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: -1, 
    marginTop:7,
  },

  dataContainer: {
    //flexDirection: 'row',
    padding: RFValue(20),
  },
  titleTextContainer: {
    flex: 0.8,
  },
  fa1text:{
     // marginTop: RFValue(5),
      marginLeft: RFValue(100),
      marginRight:RFValue(-200),
      color: '#73A9AD',
      fontSize: RFValue(25),
  },   
  subz: {
    width: ScreenWidth-60,
    height: RFValue(60),
    borderWidth: RFValue(3),
    borderRadius: RFValue(20),
    borderColor:'#064663',
    backgroundColor: '#F1F6F5',
    marginLeft: RFValue(15),
    marginTop: RFValue(10),
    alignContent:"space-around",
    justifyContent:'space-around',
    flexDirection:'row',alignContent:'space-around'
  },
  average:{
    width: ScreenWidth-60,
    height: RFValue(40),
    borderWidth: RFValue(3),
    borderRadius: RFValue(20),
    borderColor:'#064663',
    backgroundColor: '#F1F6F5',
    marginLeft: RFValue(15),
    marginTop: RFValue(10),
    marginBottom:10,
    alignContent:"space-around",
    justifyContent:'space-around',
    flexDirection:'row',alignContent:'space-around'
  },
  others: {
    width: 150,
    height: 50,
    borderWidth: 3,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F6F5',
    borderColor: '#064663',
    marginLeft: 20,
    marginTop: 15,
    alignSelf:'center'
  },
 
  attendenceText: {
    alignSelf: 'center',
    //marginTop: 10,
    color:'#064663',
    fontSize: 15,
    fontWeight: 'bold',
  },

});