import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
// import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';


import { useNavigation } from '@react-navigation/native';
import MinorHeader from '../Headers/MinorHeader';
import {globalstyles} from '../Styles/globalstyles';

import HomeScreenComponent from '../RenderedComponents/HomeScreenComponent';

const {width,height} = Dimensions.get('window');



export default function AboutScreen() {

  

const [isPending, setIsPending] = useState(false);



   // const navigation = useNavigation();

  const [hotelCategories, setHotelCategories] = useState([
  {CategoryName:'New sale',CategoryImage:require('../assets/sales.png'),id:'1'},
    {CategoryName:'Reports',CategoryImage:require('../assets/reports.png'), id:'5'},
  {CategoryName:'Customers',CategoryImage:require('../assets/customers.png'),id:'6'},

  {CategoryName:'Inventory',CategoryImage:require('../assets/inventory.png'),id:'2'},
  
    ]);
  
 //FOR  APIS
//const { services, isPending, error } = useFetch(MyDomain+'/apis/Services/');


 
  return (
    <View style={globalstyles.container}>
  
   
<MinorHeader title="About" screenName="Home Stack"/>


<View style={{
  justifyContent:'center',
  alignItems:'center',
  flex:1
}}>
  <TouchableOpacity>
  <Text style={{
    padding:15,
    fontSize:25,
    backgroundColor:'yellow',
    color:'black',
  }}>About Screen</Text>
  </TouchableOpacity>

</View>







    </View>
  );
}

const styles = StyleSheet.create({
 





});