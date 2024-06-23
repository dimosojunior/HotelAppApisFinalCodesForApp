import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StyleSheet, Text,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalstyles} from '../Styles/globalstyles';

import { MaterialIcons } from '@expo/vector-icons';
import useFetch from '../useFetch';
import axios from 'axios';
// import HomeScreenCard from '../Shared/HomeScreenCard';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MotiView} from 'moti';
import Card from '../Shared/Card';
import Card2 from '../Shared/Card2';



// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import React, {useState, useEffect, useContext} from 'react';
import ListItemsCard from '../Shared/ListItemsCard';

import {useFonts} from 'expo-font';
const {width,height} = Dimensions.get('window');



const RetailsNewSaleHomeScreenComponent =({inventory}) => {

  let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});



const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
const [Category, setCategory] = useState('');
    const move = (Category) =>{
      setCategory(Category);
     
      navigation.navigate('Retails NewSale ' +Category);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 



//FONTS

 
// MWANZO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE


  const renderItem = ({item, index}) => {




 
    return (


   
   


      <TouchableOpacity 
      style={globalstyles.listContainer}
       activeOpacity={1}
         // onPress={() => move(item.Category)}
         onPress = {() => navigation.navigate('Retails NewSale Products Categories', item)}
         >

      <MotiView
        
        style={globalstyles.MotiViewlistContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
        <View style={globalstyles.imageContainer}>
        
          <Image 
          // kama unatumia APIS
          source={{uri: item.CategoryImage}}
          //source={item.CategoryImage} 
          style={globalstyles.image} 
          />
       
        </View>
      













 
        <Text style={globalstyles.nameText}>{item.Category}</Text>
        

          
       


      </MotiView>
       </TouchableOpacity>





          );
  };

// MWISHO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE



  return (

 <>{!fontsLoaded ? (<View/>):(

    <View style={globalstyles.container}>
    

















{/*{MWANZO WA FLAT LIST COLUMN MBILI}*/}
      <FlatList
        data={inventory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>




 )}</>

  );
};






  
export default RetailsNewSaleHomeScreenComponent;



const styles = StyleSheet.create({
 
  
});