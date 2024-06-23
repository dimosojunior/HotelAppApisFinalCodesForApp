import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';



import SigninScreen from '../AccountScreens/SigninScreen';

import PreLoaderScreen from '../Screens/PreLoaderScreen';

import {NavigationContainer} from '@react-navigation/native';

const Account = createStackNavigator();

function AccountStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Account.Navigator
    initialRouteName="Home Stack"
      screenOptions={{
      	headerShown:false,
        headerStyle:{
          backgroundColor:"green",
           //height:100,

        },
        headerTintColor:"white",
        headerTitleStyle: {
              fontWeight: 'bold',
            },
      }}
      >




<Account.Screen
      name="PreLoader Stack"
      component={PreLoaderScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




 <Account.Screen
      name="Signin Stack"
      component={SigninScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      </Account.Navigator>
      	// </NavigationContainer>

    );
  }
  export default AccountStack;