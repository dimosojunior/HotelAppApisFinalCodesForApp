import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import {globalstyles,images} from '../Styles/globalstyles';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';
import React, {useState, useEffect, useContext} from 'react';


const ProductUnitComponent = ({productsUnit,navigation}) => {



 //FOR APIS
//const { services:productsUnit, isPending, error } = useFetch(MyDomain+'/apis/productsUnit/');


  const CartCard = ({item}) => {
    return (
      <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
         <Text
         style={globalstyles.UnitItemName1} 
         >{item.ProductName }</Text>
         
     </View>
       
        <View
        style={globalstyles.UnitCartContainerCOntainer2}

         >
         <Text 
          style={globalstyles.UnitCartPriceText} 
          >unit</Text>
       
          <Text 
          style={globalstyles.UnitCartPriceTextUnit} 
          >{item.Unit}</Text>
        </View>
        <View 
        style={globalstyles.UnitCartActionButtonText}
        >
         
          <View style={globalstyles.UnitactionBtn}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
            }}>Change</Text>           
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
    {productsUnit && productsUnit.length > 0 ? (
    <SafeAreaView 
    style={globalstyles.UnitCartContainer} 
    >

    







     
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={productsUnit}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
          
          </View>
        )}
      />
    </SafeAreaView>
    ):(
    <Text style={globalstyles.UnitNoCartItem}>No any Product Unit</Text>
    )}
    </>
  );
};


export default ProductUnitComponent;
const style = StyleSheet.create({
 

});