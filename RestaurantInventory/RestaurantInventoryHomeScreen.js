import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
// import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';

import LotterViewScreen from '../Screens/LotterViewScreen';

import { useNavigation } from '@react-navigation/native';
import MinorHeader from '../Headers/MinorHeader';
import {globalstyles} from '../Styles/globalstyles';

import RestaurantInventoryHomeScreenComponent from '../RenderedComponents/RestaurantInventoryHomeScreenComponent';

const {width,height} = Dimensions.get('window');

import {EndPoint} from '../constantComponents/constants';

export default function RestaurantInventoryHomeScreen() {

  

//const [isPending, setIsPending] = useState(false);


  
 //FOR APIS
const { datas:inventory,setDatas:setInventory, isPending, error } = useFetch(EndPoint+'/PostData/PostRestaurantInventory/');
//const { services:inventory, isPending, error } = useFetch(MyDomain+'/apis/Inventory/');


 
  return (

 <>
    {!isPending ? (



    <View style={globalstyles.container}>
  
   
<MinorHeader title="Inventory" screenName="Restaurants Category" />







{inventory && inventory.length > 0 ? (

  <RestaurantInventoryHomeScreenComponent inventory={inventory} />


  ) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No Data</Text>
</View>


  )} 









    </View>


      ):(

<LotterViewScreen />

)}

    </>
  
  );
}

const styles = StyleSheet.create({
 





});