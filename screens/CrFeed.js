import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
  TextInput,
  SearchBar
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import StoryCard from './ReportCard';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ScreenHeight ,ScreenWidth} from 'react-native-elements/dist/helpers';

export default class CrFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myReports: [],
      loading: false,
      error: null,
      searchValue: "",

    };
  }
  renderItem = ({ item: mystory }) => {
    return <StoryCard story={mystory} navigation={this.props.navigation} />;
  };
  keyExtractor = (item, index) => index.toString();

  componentDidMount() {
    this.fetchReportCards();
    this._unsubcribe = this.props.navigation.addListener('focus', () => {
      this.fetchReportCards();
    });
  }
emptylist=()=>{
    return(
      <View style = {{alignSelf:'center',justifyContent:'center'}}>
      <Text style={{color:'white',fontSize:24,fontWeight:'bold',textAlign:'center'}}>Sorry no reports right now</Text>
      </View>
    )
  }

 

  componentWillUnmount() {
    this._unsubcribe()
  }

  fetchReportCards = () => {
    firebase
      .database()
      .ref('/reports/')
      .on(
        'value',
        (snapshot) => {
          let myReports = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              myReports.push({
                key: key,
                value: snapshot.val()[key],
              });
            });
          }
          this.setState({ myReports: myReports });
        },
        function (errorObject) {
          // console.log('The read failed: ' + errorObject.code);
        }
      );
    //console.log(this.state.myReports);
  };
 




  render() {
    return (
      <ImageBackground
        source={require('../assets/bg1.jpg')}
        style={styles.container}>
        <SafeAreaView style={styles.androidView} />

        <View style={{marginRight: 15,alignSelf:'flex-end'}}>
                 <AntDesign name="logout" size={24} color="black" onPress={()=>firebase.auth().signOut().then(() => {
       alert('Logged Out!!');
       this.props.navigation.navigate("Home")
      }).catch((error) => {
       alert(error.message);
       //alert("Oops something went wrong! Try again later.")
      })} /></View>

        <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
          <Image
            source={require('../assets/logo2.png')}
            style={styles.iconImage}></Image>
          <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>


        </View>

        <View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreateReport')}
            style={styles.addReport}>
            <AntDesign name="plus" size={25} color="white" />
          </TouchableOpacity>
        </View>


        <View style={styles.cardContainer}>
          {!this.state.myReports[0] ? (
            <View style={styles.noStories}>
              <Text style={styles.noStoriesText}>
                No Report Cards Available
              </Text>
            </View>
          )
            :
            (

              <View style={styles.cardContainer}>
                <FlatList
                  data={this.state.myReports}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderItem}
                  ListEmptyComponent={()=>this.emptylist()}
                />
              </View>
            )}


        </View>

      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:ScreenHeight
  },
  androidView: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  cardContainer: {
    marginTop: 45,
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
  noStories: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noStoriesText: {
    color: 'black',
    fontSize: RFValue(30),
    alignSelf: 'center',

  },
  addReport: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    right: 30,
    top: 20,
    backgroundColor: '#FAAB78',
    borderRadius: 30,
    elevation: 8,
  },
  scroll: {
    marginVertical: 40,
    paddingVertical: 20
  },

});
