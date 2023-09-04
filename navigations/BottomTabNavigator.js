import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CrFeed from '../screens/CrFeed';
import CreateReport from '../screens/CreateReport';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomtabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'CrFeed') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'CreateReport') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icon}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FFF8E5',
          inactiveTintColor: 'green',
        }}>
        <Tab.Screen name="CrFeed" component={CrFeed} />
        <Tab.Screen name="CreateReport" component={CreateReport} />
        
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  bottomtabStyle: {
    backgroundColor: '#E05D5D',
    height: '9%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: 'hidden',
    position: 'absolute',
  },
});
