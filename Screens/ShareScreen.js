import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Alert,Linking,ScrollView,TouchableOpacity, Platform, Text, View, Button, Image } from 'react-native';
import {globalstyles} from '../Styles/globalstyles';
import Card from '../Shared/Card';
import { Dimensions } from 'react-native';
import { MaterialIcons,  } from '@expo/vector-icons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MinorHeader from '../Headers/MinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useCallback, useEffect, useContext} from 'react';
import Logo from '../Shared/Logo';
import {useFonts} from 'expo-font';

export default function ShareScreen({  route, navigation  }) {

  //FUNCTION YA KURUDI KWENY HOME PAGE
const {width, height} = Dimensions.get('window');
  const goBackPage = () =>{
    navigation.goBack();

  }



let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});








//const source = 'https://programmers.pythonanywhere.com/admin/DimosoApp/uploadfiles/32/change/pdfs/test_01__test_02.pdf'

// const Github = "https://github.com/vishal-pawar";
const url2 = "abcd://abcd.com";
const Phone = '+255628431507'
const message = "Welcome!!"
const Email = "juniordimoso8@gmail.com"
const WhatsappLink = "juniordimoso8@gmail.com"
const Youtube = "www.youtube.com"
const CompanyName = "Easy-Fix"



  const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }


const sendTextMessage = useCallback(async (phNumber, message) => {
        const separator = Platform.OS === 'ios' ? '&' : '?'
        const url = `sms:${phNumber}${separator}body=${message}`
        await Linking.openURL(url)
    }, [])






  return (

<>{!fontsLoaded ? (<View/>):(
    
    <View style={styles.detailpagecontainer}>
  
   
  {/* <MinorHeader title="Share" screenName="Home Stack"/>
*/}
   
    <ScrollView>

  

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
        
             
              <Image 
          source={require('../assets/i3.png')}  
            style={{
              width:70,
              height:70,
              borderRadius:38
            }}/>
            
          
          <View style={{marginLeft: 20}}>
            <Text style={styles.title, {
              marginTop:20,
              marginBottom: 5,
              // fontSize:22,
              fontFamily:'Medium'
              
            }}>EASY-FIX</Text>
           {/* <Text style={styles.caption}>{CategoryName}</Text>
         */}
          </View>
        </View>
      </View>

    














  <Card >


      <View style={styles.menuWrapper}>
       
     


        <TouchableOpacity onPress={() => {Linking.openURL(Youtube)}}>
          <View style={styles.menuItem}>
            <FontAwesome name="youtube" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Youtube Channel</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { Linking.openURL(`whatsapp://send?phone=${Phone}&text=${message}`)}}>
          <View style={styles.menuItem}>
            <FontAwesome name="whatsapp" color="green" size={25}/>
            <Text style={styles.menuItemText}>Whatsapp Link</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => sendTextMessage(Phone, message)}>
          <View style={styles.menuItem}>
            <Icon name="message" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Send Message</Text>
          </View>
        </TouchableOpacity>


         <TouchableOpacity onPress={() => {  Linking.openURL(`mailto:${Email}?subject=Hello ${CompanyName}&body=${message}`)}}>
          <View style={styles.menuItem}>
            <Icon name="email" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Send Email</Text>
          </View>
        </TouchableOpacity>


         <TouchableOpacity onPress={() => {   Linking.openURL(`tel:${Phone}`)}}>
          <View style={styles.menuItem}>
            <Icon name="phone" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Call</Text>
          </View>
        </TouchableOpacity>



      </View>


 </Card >









 

</ScrollView>

<Logo />
    </View>

    )}</>
    
  );
}

const styles = StyleSheet.create({



  // ---------------------READ EXPERT.js-------------------



  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    // fontSize: 18,
    //fontWeight: 'bold',
    // fontFamily:'SerifRegular',
    fontFamily:'Bold',
  },
  caption: {
    // fontSize: 14,
    lineHeight: 14,
    fontFamily:'Light',
    //fontWeight: '500',
    // fontFamily:'SerifRegular',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    //borderBottomColor: '#dddddd',
    //borderBottomWidth: 1,
   // borderTopColor: '#dddddd',
    //borderTopWidth: 1,
    paddingHorizontal:15,
    paddingVertical:20,
    backgroundColor:'white',
    borderRadius:5
    //flexDirection: 'row',
    //height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
    paddingBottom:50,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    // fontWeight: '600',
    // fontSize: 16,
    lineHeight: 26,
    fontFamily:'Light',
  },



  
  });
