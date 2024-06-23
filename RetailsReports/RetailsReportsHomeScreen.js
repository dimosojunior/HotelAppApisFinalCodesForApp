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

import RetailsReportsHomeScreenComponent from '../RenderedComponents/RetailsReportsHomeScreenComponent';

const {width,height} = Dimensions.get('window');

import {EndPoint} from '../constantComponents/constants';
import LotterViewScreen from '../Screens/LotterViewScreen';

export default function RetailsReportsHomeScreen() {

  

//const [isPending, setIsPending] = useState(false);



 
  
 //FOR APIS
const { datas:inventory,setDatas:setInventory, isPending, error } = useFetch(EndPoint+'/PostData/PostRetailsInventory/');
//const { services:inventory, isPending, error } = useFetch(MyDomain+'/apis/Inventory/');


 
  return (

 <>
    {!isPending ? (



    <View style={globalstyles.container}>
  
   
<MinorHeader title="Reports" screenName="Retails Reports Customer Categories" />







{inventory && inventory.length > 0 ? (

  <RetailsReportsHomeScreenComponent inventory={inventory} />


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