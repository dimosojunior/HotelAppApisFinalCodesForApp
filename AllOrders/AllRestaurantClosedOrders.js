import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useEffect, useState} from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import MinorHeader from '../Headers/MinorHeader';
import {globalstyles,images} from '../Styles/globalstyles';
import HomeCard from '../Shared/HomeCard';
import {Picker} from '@react-native-picker/picker';
import RestaurantReportsComponent from '../RenderedComponents/RestaurantReportsComponent';
import LotterViewScreen from '../Screens/LotterViewScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import AllRestaurantClosedOrdersComponent from '../AllOrdersComponents/AllRestaurantClosedOrdersComponent';
import SwitchSelector from 'react-native-switch-selector';

export default function AllRestaurantClosedOrders() {

  // const { 
  //   username,
  //   email,
  //   id,
  //   CategoryId 
  //  } = route.params

  const [modalVisible, setModalVisible] = useState(false);
  const [showhide, setShowHide] = useState(false);

 //const navigation = useNavigation();
   const [userToken, setUserToken] = useState('');
   const [userData, setUserData] = useState({});
const navigation = useNavigation();

// TO GET USER TOKEN


useFocusEffect(
    React.useCallback(() => {
      const updateUserToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        setUserToken(token || '');
      };

      updateUserToken();

      // Listen for the 'updateUserToken' event
      const unsubscribe = navigation.addListener('updateUserToken', updateUserToken);

      // Cleanup the listener when the component unmounts
      return unsubscribe;
    }, [navigation])
  );





  useEffect(() => {
    fetchUserData();
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        
        //console.log("USERDATA ARE");
        //console.log(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

 



const AddReport =() =>{
  
   setModalVisible(true);
}

  return (
    <View style={globalstyles.container}>

    <MinorHeader title="Orders" pressMe={AddReport} screenName="Restaurants Category" />
    
  




{/*mwanzo wa swapButtonsContainer*/}

 <View style={globalstyles.swapButtonsContainer}>

  <View style={globalstyles.swapButtonsInnerContainer}>

  <View style={globalstyles.customSwitchContainer}>
   <SwitchSelector 
   initial={0}
   textColor={'#000'}
   selectedColor={'red'}
   fontSize={14}
   bold
   backgroundColor={'#0f0'}
   buttonColor={'#0f0'}
   borderColor={'#0f0'}
   height={45}
   valuePadding={0}
   hasPadding
   onPress={value => setShowHide(value)}
   options={[
      { label: "Pay Bill", value: false },
      { label: "Pay By Guest Customer", value: true },
    ]}


   />
   </View>  
  
  </View>
    
  </View>


{/*mwisho wa swapButtonsContainer*/}










{/*TUNAANZA KUDISPLAY HIZO COMPONENTS MBILI*/}

{ showhide !== true ? (



<AllRestaurantClosedOrdersComponent />





):(



<Text>PAY  BILL BY GUEST </Text>


)}

{/*MWISO WA  KUDISPLAY HIZO COMPONENTS MBILI*/}




























































    </View>
  );
}

const styles = StyleSheet.create({



});