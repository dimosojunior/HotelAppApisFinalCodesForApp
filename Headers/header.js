
import { StyleSheet,TouchableOpacity, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, { useState, useEffect, useContext } from 'react';
import { globalstyles } from '../Styles/globalstyles';

import {useFonts} from 'expo-font';
import axios from 'axios';
import {EndPoint} from '../constantComponents/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Header({ title }) {
  const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  }

   let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});



  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        //console.log(userData.username);

        
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [greeting, setGreeting] = useState('');

  // Function to get the current time and set the greeting based on the time
  const setGreetingBasedOnTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour <= 15) {
      setGreeting('Good Afternoon');
    } else if (currentHour > 15 && currentHour <= 18) {
      setGreeting('Good Evening');
    } else {
      setGreeting('Good Night');
    }

  };

  // Use useEffect to set the initial greeting and update it when needed
  useEffect(() => {
    setGreetingBasedOnTime();
  }, []);




  const [hotelpendingOrders, setHotelPendingOrders] = useState(0);
  const [hotelapprovedOrders, setHotelApprovedOrders] = useState(0);

  useEffect(() => {
    // Make an API request to your Django API
    axios
      .get(EndPoint+'/Cart/CountHotelOrder/')
      .then((response) => {
        const { _pending_orders, _approved_orders } = response.data;
        setHotelPendingOrders(_pending_orders);
        setHotelApprovedOrders(_approved_orders);
        //setIsPending(false);
      })
      .catch((error) => {
        
        //setIsPending(false);
      });
  }, []);




 const [restaurantpendingOrders, setRestaurantPendingOrders] = useState(0);
  const [restaurantapprovedOrders, setRestaurantApprovedOrders] = useState(0);

  useEffect(() => {
    // Make an API request to your Django API
    axios
      .get(EndPoint+'/Cart/CountRestaurantOrder/')
      .then((response) => {
        const { _pending_orders, _approved_orders } = response.data;
        setRestaurantPendingOrders(_pending_orders);
        setRestaurantApprovedOrders(_approved_orders);
        //setIsPending(false);
      })
      .catch((error) => {
        
        //setIsPending(false);
      });
  }, []);



 const [retailspendingOrders, setRetailsPendingOrders] = useState(0);
  const [retailsapprovedOrders, setRetailsApprovedOrders] = useState(0);

  useEffect(() => {
    // Make an API request to your Django API
    axios
      .get(EndPoint+'/Cart/CountRetailsOrder/')
      .then((response) => {
        const { _pending_orders, _approved_orders } = response.data;
        setRetailsPendingOrders(_pending_orders);
        setRetailsApprovedOrders(_approved_orders);
        //setIsPending(false);
      })
      .catch((error) => {
        
        //setIsPending(false);
      });
  }, []);



  return (

    <>{!fontsLoaded ? (<View/>):(


    <View style={globalstyles.headerHeaderFile}>
      <MaterialIcons name='menu'
        size={28} onPress={openMenu} style={globalstyles.iconHeaderFile} />
      <Text style={globalstyles.headerTextHeaderFile1}>{greeting}</Text>

{userData && userData.is_hotel_user === true && (
  <TouchableOpacity 
  onPress={() => navigation.navigate('All Hotel Orders')} 
  >
        <Text style={[{
        marginRight:10,
        fontFamily:'Bold',
        backgroundColor:'yellow',
        paddingHorizontal:8,
        borderRadius:4,
        paddingVertical:0,
        textAlign:'center',


      },globalstyles.headerTextHeaderFile]}>{hotelpendingOrders}</Text>
      </TouchableOpacity>

      )}

{userData && userData.is_restaurant_user === true && (
   <TouchableOpacity 
  onPress={() => navigation.navigate('All Restaurant Orders')} 
  >
      <Text style={[{
        marginRight:10,
        fontFamily:'Bold',
        backgroundColor:'yellow',
        paddingHorizontal:8,
        borderRadius:4,
        paddingVertical:0,
        textAlign:'center',

      },globalstyles.headerTextHeaderFile]}>{restaurantpendingOrders}</Text>
      </TouchableOpacity>
      )}


{userData && userData.is_retails_user === true && (
   <TouchableOpacity 
  onPress={() => navigation.navigate('All Retails Orders')} 
  >
      <Text style={[{
        marginRight:10,
        fontFamily:'Bold',
        backgroundColor:'yellow',
        paddingHorizontal:8,
        borderRadius:4,
        paddingVertical:0,
        textAlign:'center',

      },globalstyles.headerTextHeaderFile]}>{retailspendingOrders}</Text>
      </TouchableOpacity>
      )}
     
    {!userData && ( 
     <Image source={require('../assets/i3.png')}
        style={globalstyles.headerImageHeaderFile} />)}


    </View>

)}</>
  );
}