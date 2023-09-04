import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScreenWidth, ScreenHeight } from 'react-native-elements/dist/helpers';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
        this.state = {
          avg :"",
        avg2: "",  
        };
}     
  
    averagemarks =  ()  => {   
      avg = (+(this.props.route.params.report.engmarks) + 
      +(this.props.route.params.report.mathmarks) +
      +(this.props.route.params.report.sciencemarks )+
      +(this.props.route.params.report.socialmarks) +
      +(this.props.route.params.report.hindimarks) + 
      +(this.props.route.params.report.telugumarks))/6;

      avg2 = +(+(this.props.route.params.report.engmarks2)+
      +(this.props.route.params.report.mathmarks2) +
      +(this.props.route.params.report.sciencemarks2) +
      +(this.props.route.params.report.socialmarks2) +
      +(this.props.route.params.report.hindimarks2) + 
      +( this.props.route.params.report.telugumarks2))/6

      // Math.ceil(avg,avg2);  

      this.setState({ avg: avg.toFixed(2) });
      this.setState({ avg2:avg2.toFixed(2)})
      }
componentDidMount(){
  this.averagemarks()
}

  render() {
    return (
      
      <ImageBackground
        source={require('../assets/bg1.jpg')}
        style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
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
          style ={styles.arrowImg}>
            </Image>
            </TouchableOpacity>
          </View> */}

         
       
       
          <ScrollView style={styles.storyCard}>
            <View style={styles.dataContainer}>
               {/* <View style={styles.titleTextContainer}>  */}
              <View style={{flexDirection:'row', width: RFValue(300), alignSelf:'center',justifyContent:'space-around',alignContent:'center',
    height: RFValue(40),
    borderColor: '#064663',
    backgroundColor: '#F1F6F5',
    borderRadius: RFValue(20),borderEndWidth:RFValue(3),}}>
                

                  <Text style={styles.reportInfo}>
                  𝙽𝚊𝚖𝚎 : {this.props.route.params.report.name}
                  </Text>
                {/* </View>
                <View style={styles.classGrade}> */}
                  <Text style={styles.classText}>
                    𝙲𝚕𝚊𝚜𝚜 : {this.props.route.params.report.classGrade}
                  </Text>
                </View>
                <View style={styles.studentInfo}>
                <Text style={styles.studentText}>
                𝚂𝚝𝚞𝚍𝚎𝚗𝚝𝙸𝚍 : {this.props.route.params.report.studentid}
                  </Text>
                </View>
                {/* </View> */}
                {/* <View style={styles.name}>
                  <Text style={styles.reportInfo}>
                    𝙽𝚊𝚖𝚎: {this.props.route.params.report.name}
                  </Text>
                </View>
                <View style={styles.classGrade}>
                  <Text style={styles.classText}>
                    𝙲𝚕𝚊𝚜𝚜 : {this.props.route.params.report.classGrade}
                  </Text>
                </View> */}
{/* 
                <Text style = {styles.fa1text}>
                  𝙵𝚊1
                </Text> */}
                 <View style={{flexDirection:'row',alignContent:'space-around',marginTop:5,justifyContent:'space-around'}}>
                <Text
                  style={{
                    marginTop: RFValue(10),
                    color: '#064663',
                    fontSize: RFValue(25),
                    fontWeight:'bold',
                    //marginLeft: RFValue(70),
                    //marginRight: RFValue(-180),
                  }}>
                  Sa1
                </Text>
                <Text
                  style={{
                    marginTop: RFValue(10),
                    color: '#064663',
                    fontSize: RFValue(25),
                    fontWeight:'bold',
                    marginLeft: RFValue(70),
                    //marginRight: RFValue(-180),
                  }}>
                  Sa2
                </Text>
              </View>
            
              <View style={styles.subz}>

                <Text style={styles.reportInfo}>
                  𝙴𝚗𝚐𝚕𝚒𝚜𝚑 : {this.props.route.params.report.engmarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝙴𝚗𝚐𝚕𝚒𝚜𝚑 : {this.props.route.params.report.engmarks2}
                </Text>
              </View>
              <View style={styles.subz} >
                <Text style={styles.reportInfo}>
                  𝙼𝚊𝚝𝚑 : {this.props.route.params.report.mathmarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝙼𝚊𝚝𝚑 : {this.props.route.params.report.mathmarks2}
                </Text>
              </View>

               <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝚂𝚌𝚒𝚎𝚗𝚌𝚎 : {this.props.route.params.report.sciencemarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝚂𝚌𝚒𝚎𝚗𝚌𝚎 : {this.props.route.params.report.sciencemarks2}
                </Text>
              </View>

              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝚂𝚘𝚌𝚒𝚊𝚕 : {this.props.route.params.report.socialmarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝚂𝚘𝚌𝚒𝚊𝚕 : {this.props.route.params.report.socialmarks2}
                </Text>
              </View>
              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝙷𝚒𝚗𝚍𝚒: {this.props.route.params.report.hindimarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝙷𝚒𝚗𝚍𝚒: {this.props.route.params.report.hindimarks2}
                </Text>
              </View>

              <View style={styles.subz}>
                <Text style={styles.reportInfo}>
                  𝚃𝚎𝚕𝚞𝚐𝚞: {this.props.route.params.report.telugumarks}
                </Text>
                <Text style={styles.reportInfo}>
                  𝚃𝚎𝚕𝚞𝚐𝚞: {this.props.route.params.report.telugumarks2}
                </Text>
              </View>
             

              <View style={{
                      width:ScreenWidth-60,
                      height:50,
                      borderWidth: RFValue(3),
                      borderRadius: RFValue(20),
                      backgroundColor:'#064663',
                     borderColor: '#F1F6F5',
                      marginTop:20,
                    alignContent:'space-around',
                      justifyContent:'space-around',
                      flexDirection:'row',
                                         
              }}>
            
                <Text style={styles.gpatext}>
                  𝙶𝙿𝙰1 : {this.state.avg}
              </Text>
              <Text style={styles.gpatext}>
                  𝙶𝙿𝙰2 : {this.state.avg2}
              </Text>               
              </View>           
              
             </View> 
          </ScrollView>
    
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#15193c',
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
  studentText:{
    marginTop: 12,
      color: '#064663',
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft:-30, 
    },
    studentInfo:{
      width: ScreenWidth-180,
      height: RFValue(50),
      borderWidth: RFValue(2),
      borderRadius: RFValue(30),
      borderColor:'#064663',
      backgroundColor: '#F1F6F5',
      marginLeft: RFValue(0),
      marginTop: RFValue(20),
      alignContent:"space-around",
      justifyContent:'space-around',
      flexDirection:'row',alignContent:'space-around'
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
    marginLeft: RFValue(0),
    marginTop: RFValue(10),
    alignContent:"space-around",
    justifyContent:'space-around',
    flexDirection:'row',alignContent:'space-around'
  },
  

  
});














// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Platform,
//   StatusBar,
//   Image,
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { RFValue } from 'react-native-responsive-fontsize';

// import { TouchableOpacity } from 'react-native-gesture-handler';

// export default class StoryCard extends Component {
//   constructor(props) {
//     super(props);
//         this.state = {
//           avg :"",
//         avg2: "",  
//         };
// }     
  
//     averagemarks =  ()  => {   
//       avg = (+(this.props.route.params.report.engmarks) + 
//       +(this.props.route.params.report.mathmarks) +
//       +(this.props.route.params.report.sciencemarks )+
//       +(this.props.route.params.report.socialmarks) +
//       +(this.props.route.params.report.hindimarks) + 
//       +(this.props.route.params.report.telugumarks))/7;

//       avg2 = +(+(this.props.route.params.report.engmarks2)+
//       +(this.props.route.params.report.mathmarks2) +
//       +(this.props.route.params.report.sciencemarks2) +
//       +(this.props.route.params.report.socialmarks2) +
//       +(this.props.route.params.report.hindimarks2) + 
//       +( this.props.route.params.report.telugumarks2))/7

//       // Math.ceil(avg,avg2);  

//       this.setState({ avg: avg.toFixed(2) });
//       this.setState({ avg2:avg2.toFixed(2)})
//       }
// componentDidMount(){
//   this.averagemarks()
// }

//   render() {
//     return (
      
//       <ImageBackground
//         source={require('../assets/bg1.jpg')}
//         style={styles.container}>
//         <SafeAreaView style={styles.droidSafeArea} />
//         <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
//           <Image
//             source={require('../assets/logo2.png')}
//             style={styles.iconImage}></Image>
//           <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>


//         </View>
        

//           {/* <View>
//           <TouchableOpacity onPress={() =>
//           this.props.navigation.navigate("CrFeed")}>
//           <Image 
//           source ={require("../assets/arrowImg.png")}
//           style ={styles.arrowImg}>
//             </Image>
//             </TouchableOpacity>
//           </View> */}

         
       
//         <View style={styles.storyContainer}>
//           <ScrollView style={styles.storyCard}>
//             <View style={styles.dataContainer}>
//               <View style={styles.titleTextContainer}>
//               <View style={{flexDirection:'row', width: RFValue(300), alignSelf:'center',justifyContent:'space-around',marginLeft:RFValue(330),alignContent:'center',
//     height: RFValue(40),
//     borderColor: '#73A9AD',
//     backgroundColor: '#C4DFAA',
//     borderRadius: RFValue(20),borderEndWidth:RFValue(3),}}>
//                   <Text style={styles.reportInfo}>
//                     𝙽𝚊𝚖𝚎: {this.props.route.params.report.name}
//                   </Text>
//                 {/* </View>
//                 <View style={styles.classGrade}> */}
//                   <Text style={styles.classText}>
//                     𝙲𝚕𝚊𝚜𝚜 : {this.props.route.params.report.classGrade}
//                   </Text>
//                 </View>
//                 </View>
//                 {/* <View style={styles.name}>
//                   <Text style={styles.reportInfo}>
//                     𝙽𝚊𝚖𝚎: {this.props.route.params.report.name}
//                   </Text>
//                 </View>
//                 <View style={styles.classGrade}>
//                   <Text style={styles.classText}>
//                     𝙲𝚕𝚊𝚜𝚜 : {this.props.route.params.report.classGrade}
//                   </Text>
//                 </View> */}
// {/* 
//                 <Text style = {styles.fa1text}>
//                   𝙵𝚊1
//                 </Text> */}
//                  <View>
//                 <Text
//                   style={{
//                     marginTop: RFValue(40),
//                     color: '#73A9AD',
//                     fontSize: RFValue(25),
//                     fontWeight:'bold',
//                     marginLeft: RFValue(70),
//                     marginRight: RFValue(-180),
//                   }}>
//                   𝙵𝚊1
//                 </Text>
//               </View>
            
//               <View style={styles.sub1}>
//                 <Text style={styles.reportInfo}>
//                   𝙴𝚗𝚐𝚕𝚒𝚜𝚑 : {this.props.route.params.report.engmarks}
//                 </Text>
//               </View>
//               <View style={styles.sub2}>
//                 <Text style={styles.reportInfo}>
//                   𝙼𝚊𝚝𝚑 : {this.props.route.params.report.mathmarks2}
//                 </Text>
//               </View>

//               <View style={styles.sub3}>
//                 <Text style={styles.reportInfo}>
//                   𝚂𝚌𝚒𝚎𝚗𝚌𝚎 : {this.props.route.params.report.sciencemarks}
//                 </Text>
//               </View>

//               <View style={styles.sub4}>
//                 <Text style={styles.reportInfo}>
//                   𝚂𝚘𝚌𝚒𝚊𝚕 : {this.props.route.params.report.socialmarks}
//                 </Text>
//               </View>
//               <View style={styles.sub5}>
//                 <Text style={styles.reportInfo}>
//                   𝙷𝚒𝚗𝚍𝚒: {this.props.route.params.report.hindimarks}
//                 </Text>
//               </View>

//               <View style={styles.sub6}>
//                 <Text style={styles.reportInfo}>
//                   𝚃𝚎𝚕𝚞𝚐𝚞: {this.props.route.params.report.telugumarks}
//                 </Text>
//               </View>

//               <View>
//                 <Text
//                   style={{
//                     marginTop: RFValue(40),
//                     color: '#73A9AD',
//                     fontSize: RFValue(25),
//                     fontWeight:'bold',
//                     marginLeft: RFValue(70),
//                     marginRight: RFValue(-180),
//                   }}>
//                   𝙵𝚊2
//                 </Text>
//               </View>
//               <View style={styles.sub1}>
//                 <Text style={styles.reportInfo}>
//                   𝙴𝚗𝚐𝚕𝚒𝚜𝚑 : {this.props.route.params.report.engmarks2}
//                 </Text>
//               </View>
//               <View style={styles.sub2}>
//                 <Text style={styles.reportInfo}>
//                   𝙼𝚊𝚝𝚑 : {this.props.route.params.report.mathmarks2}
//                 </Text>
//               </View>

//               <View style={styles.sub3}>
//                 <Text style={styles.reportInfo}>
//                   𝚂𝚌𝚒𝚎𝚗𝚌𝚎 : {this.props.route.params.report.sciencemarks2}
//                 </Text>
//               </View>

//               <View style={styles.sub4}>
//                 <Text style={styles.reportInfo}>
//                   𝚂𝚘𝚌𝚒𝚊𝚕 : {this.props.route.params.report.socialmarks2}
//                 </Text>
//               </View>
//               <View style={styles.sub5}>
//                 <Text style={styles.reportInfo}>
//                   𝙷𝚒𝚗𝚍𝚒: {this.props.route.params.report.hindimarks2}
//                 </Text>
//               </View>

//               <View style={styles.sub6}>
//                 <Text style={styles.reportInfo}>
//                   𝚃𝚎𝚕𝚞𝚐𝚞: {this.props.route.params.report.telugumarks2}
//                 </Text>
//               </View>

//               <View style={{
//                       width:RFValue(350),
//                       height:RFValue(70),
//                       borderWidth: RFValue(3),
//                       borderRadius: RFValue(20),
//                       backgroundColor: '#C4DFAA',
//                       borderColor: '#73A9AD',
//                       marginTop:RFValue(490),
//                       marginLeft:RFValue(-360),                     
//               }}>
//                 <Text style={styles.reportInfo}>
//                   𝙶𝙿𝙰 : {this.state.avg}
//               </Text>                      
//               </View>           
              
//             </View>
//           </ScrollView>
//         </View>
//       </ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: '#15193c',
//   },
//   droidSafeArea: {
//     marginTop:
//       Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
//   },
//   appTitle: {
//     flex: 0.07,
//     flexDirection: 'row',
//   },
//   appIcon: {
//     flex: 0.3,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titletext: {
//     textAlign: 'center',
//     color: '#FAAB78',
//     fontSize: RFValue(50),
//     fontWeight: 'bold',
//     marginLeft: 5,
//     //marginTop: RFValue(45),
//     //marginRight: RFValue(-60),
//   },
//   iconImage: {
//     width: 50,
//     height: 50,
//     //marginRight: RFValue(3),
//     //marginTop:   RFValue(-60),
//     // marginLeft: RFValue(3),
//     borderRadius: 40
//   },
//   // iconImage: {
//   //   width: '100%',
//   //   height: '100%',
//   //   resizeMode: 'contain',
//   // },
//   appTitleTextContainer: {
//     flex: 0.7,
//     justifyContent: 'center',
//   },

//   storyContainer: {
//     flex: 1,
//   },
//   storyCard: {
//     margin: RFValue(5),
//     backgroundColor: '#F5F0BB',
//     borderRadius: RFValue(50),
//   },
//   name: {
//     width: RFValue(190),
//     height: RFValue(80),
//     borderColor: '#73A9AD',
//     backgroundColor: '#C4DFAA',
//     borderRadius: RFValue(20),
//     marginLeft: -10,
//     marginTop: -10,
//     borderWidth: RFValue(3),
//   },
//   reportInfo: {
//     marginTop: 10,
//     color: '#233E8B',
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   classGrade: {
//     width: RFValue(120),
//     height: RFValue(65),
//     borderWidth: RFValue(3),
//     borderRadius: RFValue(20),
//     backgroundColor: '#C4DFAA',
//     borderColor: '#73A9AD',
//     marginLeft: 140,
//     marginTop: -55,
//   },
//   classText:{
//   marginTop: 10,
//     color: '#233E8B',
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginLeft: -1, 
//     marginTop:7,
//   },

//   dataContainer: {
//     flexDirection: 'row',
//     padding: RFValue(20),
//   },
//   titleTextContainer: {
//     flex: 0.8,
//   },
//   fa1text:{
//      // marginTop: RFValue(5),
//       marginLeft: RFValue(100),
//       marginRight:RFValue(-200),
//       color: '#73A9AD',
//       fontSize: RFValue(25),
//   },   
//   sub1: {
//     width: RFValue(155),
//     height: RFValue(60),
//     borderWidth: RFValue(3),
//     borderRadius: RFValue(20),
//     backgroundColor: '#C4DFAA',
//     borderColor: '#73A9AD',
//     marginLeft: RFValue(20),
//     marginRight: RFValue(20),
//     marginTop: RFValue(80),
//   },
//   sub2: {
//     width: RFValue(155),
//     height: RFValue(60),
//     borderWidth: RFValue(3),
//     borderRadius: RFValue(20),
//     backgroundColor: '#C4DFAA',
//     borderColor: '#73A9AD',
//     marginLeft: -160,
//     marginTop: RFValue(150),
//     //marginRightRFValue
//   },
//   sub3: {
//     width: RFValue(155),
//     height: RFValue(60),
//     borderWidth: RFValue(3),
//     borderRadius: RFValue(20),
//     backgroundColor: '#C4DFAA',
//     borderColor: '#73A9AD',
//     marginLeft: RFValue(-150),
//     marginTop: RFValue(220),
//   },
//   sub4: {
//     width: RFValue(155),
//     height: RFValue(60),
//     borderWidth: RFValue(3),
//     borderRadius: RFValue(20),
//     backgroundColor: '#C4DFAA',
//     borderColor: '#73A9AD',
//     marginLeft: RFValue(-155),
//     marginTop: RFValue(290),
//   },
//   sub5: {
//     width: RFValue(155),
//     height: RFValue(60),
//     borderWidth: RFValue(3),
//     borderRadius: RFValue(20),
//     backgroundColor: '#C4DFAA',
//     borderColor: '#73A9AD',
//     marginLeft: RFValue(-155),
//     marginTop: RFValue(360),
//   },
//   sub6: {
//     width: RFValue(155),
//     height: RFValue(60),
//     borderWidth: RFValue(3),
//     borderRadius: RFValue(20),
//     backgroundColor: '#C4DFAA',
//     borderColor: '#73A9AD',
//     marginLeft: RFValue(-155),
//     marginTop: RFValue(430),
//   },
// arrowImg:{
//   width:70,
//   height:70,
//   marginLeft:-90,
//   marginTop:-20,
//   borderColor:"black", 
  

// }

  
// });