import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import {globalstyles,images} from '../Styles/globalstyles';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';
import React, {useState, useEffect, useContext} from 'react';


const FoodCard = ({navigation}) => {


 const [foodCart, setFoodCart] = useState([
 
 //  {
 //    FoodName1:'Pepsi',
 //    FoodName2:'Big',
 //    Unit:'Chupa 1',
 //    FoodImage:require('../assets/i2.png'),
 //    FoodPrice:2000,
 //    id:'1'
 //  },

 // {
 //    FoodName1:'Sayona',
 //    Unit:'Chupa 5',
 //    FoodName2:'Twist',
 //    FoodImage:require('../assets/i3.png'),
 //    FoodPrice:5000,
 //    id:'2'
 //  },

  
    ]);

  const CartCard = ({item}) => {
    return (
      <View style={globalstyles.cartCard}>

      <View style={globalstyles.CartTitle}>
         <Text
         style={globalstyles.ItemName1} 
         >{item.FoodName1 }</Text>
         <Text
         style={globalstyles.ItemName2} 
         >{item.FoodName2}</Text>
     </View>
       
        <View
        style={globalstyles.CartContainerCOntainer2}

         >
          <Text 
          style={globalstyles.CartUnitText} 
          >{item.Unit}</Text>
       
          <Text 
          style={globalstyles.CartPriceText} 
          >Tsh. {item.FoodPrice}</Text>
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
    {foodCart && foodCart.length > 0 ? (
    <SafeAreaView 
    style={globalstyles.CartContainer} 
    >

    <View style={globalstyles.CartListHeaderContainer}>
    <Text style={globalstyles.CartListHeader}>Cart List</Text>
    </View>
     
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foodCart}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
            style={globalstyles.CheckOutContainer}
             >
              <Text
              style={globalstyles.TotalPriceText} 
              >
                Total Price
              </Text>
              <Text 
              style={globalstyles.PriceText}
              >Tsh. 5000/=</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="ORDER" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
    ):(
    <Text style={globalstyles.NoCartItem}>No Item in a cart</Text>
    )}
    </>
  );
};


export default FoodCard;
const style = StyleSheet.create({
 

});