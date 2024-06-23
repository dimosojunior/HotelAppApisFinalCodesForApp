import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import {globalstyles} from '../Styles/globalstyles';
import { Dimensions } from 'react-native';
export default function ListItemsCard(props){

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
    //flex: 1,
    // height:100,
    borderRadius:10,
   
     //width:'100%',
    elevation:4,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'#D9D9D9',
    shadowOpacity:1,
    shadowRadius:5,
    marginHorizontal:0,
    marginVertical:10,
    opacity:1,
    
    alignItems:'center'

    
    
  },
  cardContent:{
     	

    //width:Dimensions.get('window').width,
    //width:'80%'
  }
,
  });