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
import HotelRoomsReportsComponent from '../RenderedComponents/HotelRoomsReportsComponent';
import LotterViewScreen from '../Screens/LotterViewScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import UserHotelRoomsReportsComponent from '../GetUserOrdersReportsComponents/UserHotelRoomsReportsComponent';


export default function HotelRoomsReportsHomeScreen({route, navigation}) {

  const { 
    username,
    email,
    id 
   } = route.params

  const [modalVisible, setModalVisible] = useState(false);

 //const navigation = useNavigation();
   const [userToken, setUserToken] = useState('');
   const [userData, setUserData] = useState({});


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
    <View style={{ flex: 1 }}>

    <MinorHeader title="Reports" pressMe={AddReport} screenName="Rooms Hotel Waiters" />
      <KeyboardAvoidingView

        behavior={Platform.OS == "ios" ? "padding" : ""}
         style={globalstyles.ReportKeyboardAvoidingView}

             >
        <View style={styles.DatePickerContainer}>
         























{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>PRINT REPORT</Text>

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            

            <View 

            style={[{
                      justifyContent:'center',
                      alignItems:'center'
                    },globalstyles.ButtonConatinere]}>
                    
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text 
                        style={globalstyles.ButtonAddText}
                      >PRINT REPORT</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>












{/*mwanzo wa Report */}
























{/*mwisho wa Report */}


        </View>

      {userData && userData.is_waiter === true ? (
      <UserHotelRoomsReportsComponent username={username} id={id} />)

      : (<HotelRoomsReportsComponent username={username} id={id} /> )}


   

      </KeyboardAvoidingView>





































    </View>
  );
}

const styles = StyleSheet.create({



});