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
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report_id: this.props.story.key,
      report_data: this.props.story.value,
    };
  }

  render() {
    let report = this.state.report_data;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate('ReportScreen', {
            report: report,
          })
        }>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.cardContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.nameText}>𝙽𝚊𝚖𝚎 : {report.name}</Text>
            <Text style={styles.classText}>𝙲𝚕𝚊𝚜𝚜 : {report.classGrade}</Text>
            <Text style={styles.sectionText}>𝚂𝚎𝚌𝚝𝚒𝚘𝚗 : {report.section}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor:'#F9F9F9',
    borderRadius: RFValue(20),
    width:"90%",
    height:"75%"
  },
  nameText: {
   fontSize: RFValue(14),
    color:"#1C315E",
    fontWeight:"bold"
    
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },
classText: {
    fontSize: RFValue(14),
    fontWeight:"bold",
    color: '#1C315E',
  },
  sectionText: {
    fontSize: RFValue(14),
    color: '#1C315E',
    fontWeight:"bold"
  },
  
});
