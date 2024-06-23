import {SafeAreaView, StyleSheet,TouchableOpacity, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import {globalstyles,images} from '../Styles/globalstyles';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';
import React, {useState, useEffect, useContext} from 'react';

import { useNavigation } from '@react-navigation/native';
const RoomCart = () => {

const navigation = useNavigation();
 
 const [roomsCart, setRoomsCart] = useState([
  {
    RoomName:'Room 5',
    RoomClass:'class A',
    RoomFloor:'Floor 4',
    RoomImage:"",
    id:'1'
  },

 {
    RoomName:'Room 10',
    RoomClass:'class B',
    RoomFloor:'Floor 1',
    RoomImage:"",
    id:'2'
  },

   {
    RoomName:'Room 4',
    RoomClass:'class C',
    RoomFloor:'Floor 8',
    RoomImage:"",
    id:'3'
  },
 
  
    ]);

  const CartCard = ({item}) => {
    return (
      <View style={globalstyles.cartCard}>

      <View style={globalstyles.CartTitle}>
         <Text
         style={globalstyles.ItemName1} 
         >{item.RoomName }</Text>
         <Text
         style={globalstyles.ItemName1} 
         >{item.RoomClass}</Text>
     </View>
       
        <View
        style={globalstyles.CartContainerCOntainer2}

         >
          <Text 
          style={globalstyles.CartUnitText} 
          >Floor Number</Text>
       
          <Text 
          style={globalstyles.CartPriceText} 
          >Tsh. {item.RoomFloor}</Text>
        </View>
        <View 
        style={globalstyles.CartActionButtonText}
        >
         
          <View style={globalstyles.actionBtn}>
            <FontAwesome name="check-square-o" size={20} color={COLORS.white} />
           
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
    {roomsCart && roomsCart.length > 0 ? (
    <SafeAreaView 
    style={globalstyles.BookegRoomCartContainer} 
    >

 
  <TouchableOpacity 
         onPress={() => navigation.navigate('Hotel Booked Rooms')}>
          <View style={globalstyles.BookedUnitactionBtn}>
            <Text style={{
              color:'white',
              fontWeight:'bold',


            }}>View Booked Rooms</Text> 

          </View>
          </TouchableOpacity>

    </SafeAreaView>
    ):(
    <Text style={globalstyles.NoCartItem}>No any room booked</Text>
    )}
    </>
  );
};


export default RoomCart;
const style = StyleSheet.create({
 

});