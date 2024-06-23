import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';



import SigninScreen from '../AccountScreens/SigninScreen';

import PreLoaderScreen from '../Screens/PreLoaderScreen';

import {NavigationContainer} from '@react-navigation/native';
import ShareScreen from '../Screens/ShareScreen';
import UsersScreen from '../Screens/UsersScreen';

const Stack = createStackNavigator();

function UsersStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
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




<Stack.Screen
      name="Users Stack"
      component={UsersScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />







      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default UsersStack;