import React from 'react';
import { StyleSheet,Image, Text, View, Button,TouchableOpacity } from 'react-native';
import {globalstyles} from '../Styles/globalstyles';
import { Dimensions } from 'react-native';
export default function Card(props){

	return(

		

   
<View style={{
  justifyContent:'center',
  alignItems:'center',
  height:'10%',
}}> 

 <Image 
source={require('../assets/easy.jpg')}  
style={{
  width:'50%',
  height:40,
  marginBottom:20,
  borderRadius:8,
  marginTop:20,
}} 
          />


</View>


		
		

		);
}


const styles = StyleSheet.create({
  
  });