import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
// import MainHeader from './Headers/MainHeader';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import MyDrawer from './Drawer/drawer';

import { Ionicons, MaterialIcons, AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import React, { useState, useEffect, useContext } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import MyStack from './Stack/Stack';
export default function App() {

  const [userToken, setUserToken] = useState('');
  const Stack = createStackNavigator();

  useEffect(() => {
    // Listen for the 'updateUserToken' event
    const tokenUpdateListener = EventRegister.addEventListener('updateUserToken', (token) => {
      setUserToken(token);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      EventRegister.removeEventListener(tokenUpdateListener);
    };
  }, []);

  return (
    <View style={styles.container}>
      <MyStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    //marginTop: 30,
  },
});
