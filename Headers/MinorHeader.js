
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, { useState, useEffect, useContext } from 'react';
import { globalstyles, images } from '../Styles/globalstyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFonts} from 'expo-font';

export default function MinorHeader({ title, pressMe, screenName }) {


   let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});


  const navigation = useNavigation();

  const goBackPage = () => {
    //navigation.navigate(screenName);
    navigation.goBack();
  }

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);

        
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>{!fontsLoaded ? (<View/>):(

    <View
      style={{
        //backgroundColor:'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        
        borderBottomColor: '#2D3436',
         elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: Platform.OS === "android" ? 'white' : "white",
        shadowOpacity: 1,
        shadowRadius: 2,

        borderBottomWidth: 2,
        paddingTop: Dimensions.get("window").height * 0.04
      }}
    >
      {/*mwanzo wa view ya icon na title*/}

      <View
        style={{
          //backgroundColor:'black',
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent:'space-around',
        }}
      >
        <Ionicons name='arrow-back'
          size={32} onPress={goBackPage}
          color="white"
          style={{
            marginLeft: 20,
          }}
        />
        <Text style={globalstyles.headerTextArticleHeaderFile
        }>{title}</Text>
      </View>
    </View>
    // {mwisho wa view ya image na icon}








    // {MWISHO WA HEADER}





)}</>



  );
}



const styles = StyleSheet.create({


});

