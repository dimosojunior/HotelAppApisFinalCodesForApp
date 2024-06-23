import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import {globalstyles} from '../Styles/globalstyles';
import { Dimensions } from 'react-native';


export default function BottomCard(props){

	return(

		<View style={styles.card}>

		<View style={styles.cardContent}>

		{props.children}
			

		</View>



			

		</View>


		);
}


const styles = StyleSheet.create({
  card: {
    // ila uidisplay verticaly ziweke
        // height:100,
    borderRadius:6,
     width:Dimensions.get('window').width,
     //width:'100%',
    elevation:5,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'white',
    shadowOpacity:1,
    shadowRadius:2,
    padding:10,
   
    // marginBottom:Dimensions.get('window').height/10,

   
    
    
    
  },
  cardContent:{
        // marginHorizontal:50,
    // backgroundColor:'wheat'
  	

    //width:Dimensions.get('window').width,
    //width:'80%'
  }
,
  });