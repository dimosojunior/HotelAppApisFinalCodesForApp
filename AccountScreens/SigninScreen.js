import React, { useState, useEffect } from 'react';

import { View,SafeAreaView, TextInput, Alert, Image, StyleSheet, ActivityIndicator, Text, Dimensions, ScrollView, Touchable, TouchableOpacity } from 'react-native';

import Background from './PageStyling/Background';
import Btn from './PageStyling/Btn';
import { black } from './PageStyling/Constants';
import LoginField from './PageStyling/LoginField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { EndPoint } from '../constantComponents/constants';
import { globalstyles, images } from '../Styles/globalstyles';
import LottieView from 'lottie-react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {useFonts} from 'expo-font';

const SigninScreen = ({ navigation }) => {

    //const [isPending, setIsPending] = useState(false);
let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});



  const { width, height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //TO MAKE A LOADING MESSAGE ON A BUTTON
  const [isPending, setPending] = useState(false);

  //const navigation = useNavigation();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      try {
        const userResponse = await axios.get(
          EndPoint + '/Account/user_data/',
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        const userData = userResponse.data;
        // Fetch and set cart data here
        // const cartResponse = await axios.get(
        //   'https://hotelappapisv1.pythonanywhere.com/Hotel/Cart/',
        //   {
        //     headers: {
        //       Authorization: `Token ${token}`,
        //     },
        //   }
        // );

        // const cartData = cartResponse.data;
        // // Update the cart state with the fetched data
        // setCart(cartData);

        // navigation.replace('Home Stack', { userData });
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home Stack' }],
        });
      } catch (error) {
        
      }
    }
  };


  const handleLogin = async () => {

    if (!email || !password) {
      setError('Please fill in all fields correctly');
      return;
    }
    setPending(true);

    try {
      const response = await axios.post(EndPoint + '/Account/login_user/', {
        email: email,
        password: password,
      });

      const token = response.data.token;
      await AsyncStorage.setItem('userToken', token);
      //navigation.emit('updateUserToken', token);

      // Now, make another request to get user data
      const userResponse = await axios.get(EndPoint + '/Account/user_data/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const userData = userResponse.data;
      // Save user data to AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      // Emit the 'updateUserToken' event
      // hii inasaidia kupata a login user token automatically without
      // page refreshing
      EventRegister.emit('updateUserToken', token);



      // Pass the userData to Home Stack
      // navigation.replace('MainScreen', { userData });
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home Stack' }],
      });
    } catch (error) {
      setError('Invalid credentials');
      setPending(false);
    }
  };




  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (

    <>{!fontsLoaded ? (<View/>):(

<SafeAreaView  style={{
  height:'100%',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: '#233329',
}}>

    <View style={{
      alignItems: 'center',
      // width: width,
      
      backgroundColor: '#233329',
      height:'100%'


    }}>
     


        <View
          style={{
            // backgroundColor: 'rgb(5,5,49)',

            justifyContent:'center',
            height: height,
            width: width,
            borderTopLeftRadius: 0,
            paddingTop: 10,
            alignItems: 'center',
             flex: 1,
            //marginTop: 10,
          }}>


           {/* <Image
            source={require('../assets/icon2.png')}
            style={{
              width: '50%',
              height: 60,
              marginBottom: 20,
              borderRadius: 8,
              //marginTop: 80,
            }}
          />
*/}


          <Text style={{
            fontSize: 25,
            color: 'white',
            // fontWeight: 'bold',
            marginBottom: 0,
            fontFamily:'Bold',

          }}>
            Login
          </Text>

          



          <LoginField
            placeholder="Enter valid email"
            keyboardType={'email-address'}
            value={email}
            onChangeText={text => setEmail(text)}

          />

          <View 
            style={{borderRadius: 10,
             color: 'black', 
             // paddingHorizontal: 20, 
             width:width-70, backgroundColor: 'white',
              marginVertical: 10,
              // paddingVertical:15,
              borderWidth:1,
              borderColor:'green',
              flexDirection:"row",
              justifyContent:"space-between"
          }}
          >
          <TextInput
          style={{
            // justifyContent:"center",
            // backgroundColor:"red",
            padding:15,
            paddingLeft:20,
            fontFamily:'Light',

          }}
          placeholder="Enter Password"
          secureTextEntry={!isPasswordVisible} // Toggle secureTextEntry based on isPasswordVisible state
          value={password}
          onChangeText={(text) => setPassword(text)}
        placeholderTextColor={black}/>

        <View style={{
          // width:width-70,
          justifyContent:"center",
        }}>

         {/* Add a button to toggle password visibility */}
        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}
          style={{ alignSelf: 'flex-end', marginRight: 20 }}>
          <Text style={{ color: 'blue', fontSize: 16,fontWeight:'bold' }}>
            {/*{isPasswordVisible ? 'Hide' : 'Show'} Password*/}
            {isPasswordVisible ? (
              <FontAwesome size={25} color="black" name="eye-slash" />
            ):(
              <FontAwesome size={25} color="black" name="eye" />
            )}
          </Text>
        </TouchableOpacity>

        </View>
        </View>




   <Text style={styles.errorText}>{error}</Text>


          {!isPending &&
            <TouchableOpacity
              onPress={handleLogin}
            >


              <Btn textColor='white' bgColor={black} btnLabel="Login" />



            </TouchableOpacity>}

          {isPending &&


            <ActivityIndicator size="large" color="green" /> 
            }



         

        </View>


     

    </View>




</SafeAreaView>

 )}</>

  );
};
export default SigninScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily:'Light',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily:'Light',
  },
});


