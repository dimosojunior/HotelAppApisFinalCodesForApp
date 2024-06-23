import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Dimensions } from 'react-native';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';


const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const {width,height} = Dimensions.get('window');

 
const GlobalStyles =() => {

 
  return(

    <View>
      <Text>Gloal Styles</Text>
    </View>
    );


}
export default GlobalStyles;


export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black',
    // width:Dimensions.get('screen').width,
    // resizeMode:'contain'
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },

//------------------HOTEL CATEGORIES--------------

categoriesComponentText:{
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
  paddingVertical:30,
},



//--------------------------SEARCH PAGE-----------------

SearchContainer:{
  marginTop: 10,
  paddingHorizontal: 20,

},

InputContainer:{
marginTop: 10,
padding:2,
paddingLeft: 1,
backgroundColor: 'white',
borderRadius: 20,
alignItems: 'center',
flexDirection: 'row',
marginBottom:10,
elevation:3,
borderColor:'black',
borderWidth:2,

shadowOffset:{width:1, height:1},
shadowColor:'#333',
shadowOpacity:1,
shadowRadius:2,
},

TextInput:{
  fontSize: 16, 
marginLeft: 10,

color:'black',
fontWeight:'bold',
width:Dimensions.get('window').width-100,
backgroundColor:'white',
padding:15,
borderRadius:10,
},
  






//---------------------MODAL STYLE-----------------

    ModalView:{
       padding:20,
       width:340,
       backgroundColor:"white",
       borderRadius:20,
   },
   ButtonClose:{

       alignItems:'center',
       justifyContent:"center",
       width:140,
       height:50,
       backgroundColor:"red",
       borderRadius:5,

   },
   ButtonAdd:{

    alignItems:'center',
    justifyContent:"center",
    width:140,
    height:50,
    backgroundColor:"green",
    borderRadius:5,

},
ButtonScan:{

    alignItems:'center',
    justifyContent:"center",
    width:140,
    height:50,
    backgroundColor:"gray",
    borderRadius:5,

},
ButtonBarcode:{

 alignItems:'center',
 justifyContent:"center",
 width:140,
 height:50,
//  backgroundColor:"green",
 borderRadius:5,
 borderWidth:1,

},ButtonConatiner:{
   flexDirection:'row',
   marginTop:20,
   justifyContent:"space-between"
},
   input:{
      flexDirection:"row",
      width:300,
      height:50,
      borderColor:"black",
      borderWidth:1,
      alignItems:"center",
      padding:10,
      borderRadius:10,
      marginTop:10
   },
inputTax:{
    flexDirection:"row",
    width:300,
    height:50,
    backgroundColor:'#746C70',
    // borderColor:"black",
    // borderWidth:1,
    alignItems:"center",
    padding:10,
    borderRadius:1,
    marginTop:10,
    justifyContent:'space-between'
 },
 picker:{
    width:170,
    height:40,
    backgroundColor:'white',
    borderRadius:5,
 },
 pickerInput:{
    top:-7
 },
   
   textInput:{
       fontSize:20
   },
   form:{
       marginTop:30,
       alignItems:'center'
   },
   Inputicon:{
       fontSize:29,
       marginRight:10
       
   },
   TaxType:{
       fontSize:20,
       color:"black",
       fontWeight:'400'
   },
   open:{
       width:200,
       height:50,
       backgroundColor:'yellow',
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       elevation:5,

   },













//----------------------HOTEL CATEGORIES--------------
//----------ITEMS ZINAZOPISHANA-------------------

HoteCategoriesHomeHeaderContainer:{
    alignItems:'center',
    marginBottom:20,
    justifyContent:'center',
    width:width,
    flexDirection:'row',
    paddingHorizontal:20,

  },
  HoteCategoriesHomeHeaderText:{
    alignItems:'center',
    fontWeight:'bold',
    fontSize:18,

    

  },
  HoteCategoriesHomeHeaderImage:{
    width:40,
    height:40,
    marginRight:20,
    borderRadius:20,

  },
  HoteCategorieslistContainer: {
    width: Dimensions.get('window').width / 2-20,
    //backgroundColor: 'black',
    margin: 0,
    borderRadius: 20,
    //justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#D9D9D9',
    marginVertical:15,
    paddingVertical:18,
    paddingTop:30,


    elevation:10,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'#D9D9D9',
    shadowOpacity:1,
    shadowRadius:2,
    
  },

  HoteCategoriesimage:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 ,

    
  },




HoteCategoriesimage:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },



HoteCategoriesimageContainer:{
  margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,

},









  HoteCategoriesnameText: {
    color: 'black',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:16,
    marginBottom:20,
    marginTop:10,
    // fontFamily: 'SerifRegular',
  },
  HoteCategoriespriceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  HoteCategoriesbutton: {
    backgroundColor: 'wheat',
    padding: 10,
    margin: 15,
    borderRadius: 10,

  },
  HoteCategoriesbuttonText: {
    color: 'black',
    textAlign: 'center',
    // fontFamily: 'SerifRegular',
  },





























//--------------------------INVENTORY CATEGORIES------------------------




    
HomeHeaderContainer:{
    alignItems:'center',
    marginBottom:20,
    justifyContent:'center',
    width:width,
    flexDirection:'row',
    paddingHorizontal:20,

  },
  HomeHeaderText:{
    alignItems:'center',
    fontWeight:'bold',
    fontSize:18,

    

  },
  HomeHeaderImage:{
    width:40,
    height:40,
    marginRight:20,
    borderRadius:20,

  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 18,
    //backgroundColor: 'black',
    margin: 10,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#D9D9D9',
    marginVertical:15,
    paddingVertical:18,
    paddingTop:50,

    elevation:10,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'red',
    shadowOpacity:1,
    shadowRadius:2,
    
  },
  NewSalesimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30,
  },
  NewSalesimage:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },



InventoryimageContainer:{
  margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,

},
Inventoryimage:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },



CustomersimageContainer:{
  margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,

},
Customersimage:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },



   ReportsimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,


  },
  Reportsimage:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },




  nameText: {
    color: 'black',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:16,
    marginBottom:20,
    // fontFamily: 'SerifRegular',
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  button: {
    backgroundColor: 'wheat',
    padding: 10,
    margin: 15,
    borderRadius: 10,

  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    // fontFamily: 'SerifRegular',
  },























//-----------ITEM 1----------HOME COMPONENT and ALL OTHER HOME CATEGORIES COMPONENTS ---------------



    

    
HomeHeaderContainer:{
    alignItems:'center',
    marginBottom:20,
    justifyContent:'center',
    width:width,
    flexDirection:'row',
    paddingHorizontal:20,

  },
  HomeHeaderText:{
    alignItems:'center',
    fontWeight:'bold',
    fontSize:18,

    

  },
  HomeHeaderImage:{
    width:40,
    height:40,
    marginRight:20,
    borderRadius:20,

  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 23,
    //backgroundColor: 'black',
    margin: 10,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#D9D9D9',
    marginVertical:15,
    paddingVertical:18,
    paddingTop:50,

    elevation:100,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'#D9D9D9',
    shadowOpacity:0.5,
    shadowRadius:2,
    
  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30,
  },
  image:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },





  nameText: {
    color: 'black',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:16,
    marginBottom:20,
    // fontFamily: 'SerifRegular',
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  button: {
    backgroundColor: 'wheat',
    padding: 10,
    margin: 15,
    borderRadius: 10,

  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    // fontFamily: 'SerifRegular',
  },


















  //-----------------------HEADER.JS------------------


   headerHeaderFile: {      
        width:Dimensions.get('window').width,
        height:60,
        flexDirection: 'row',
        borderBottomColor:'#C0C0C0',
        borderBottomWidth:2,
        
        // alignItems: 'flex-start',
        marginLeft:0,
        paddingLeft:0,
        //backgroundColor: 'black',  //"#2B3856",
        marginBottom:10,
        
        justifyContent:'space-between',
        elevation:3,
    
    shadowOffset:{width:1, height:1},
    shadowColor:'white',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:0,
    marginVertical:0,
    paddingHorizontal:0,

        //paddingVertical:15,
        
        


    },
    headerTextHeaderFile: {
      //fontWeight: 'bold',
      fontSize: 16,
      color: 'black',
      letterSpacing: 1,

      // flex:1,
      alignItems:"center",
      marginTop:10,
      // fontFamily:'SerifRegular',

      
    },
    iconHeaderFile: {
      position: 'relative',
      marginLeft:20,
      
      //flex:1,
      color:'black',
      fontWeight:'bold',
      marginTop:0,

      fontSize:35,
      

    },

    headerImageHeaderFile:{
      width:40,
      height:40,
      // marginHorizontal:10,
      marginTop:0,
      borderRadius:20,
      marginRight:10,
      marginBottom:0
    },













  //-------------------------OTHER HEADER.JS----------

  headerArticleHeaderFile: {      
        width:Dimensions.get('screen').width,
        height:100,
        flexDirection: 'row',
        
        // alignItems: 'flex-start',
        marginLeft:0,
        paddingLeft:0,
        backgroundColor:"black",
        borderBottomColor:'#C0C0C0',
        borderBottomWidth:2,
        
        


    },
    headerTextArticleHeaderFile: {
      //fontWeight: 'bold',
      // fontFamily:'SerifRegular',

      fontSize:18,
      // textAlign:'center',
      // marginLeft:30,
      //color:'white',
      //fontWeight:'bold',
      marginHorizontal:30,
      color:'black',
      fontWeight:'bold',
    },
    iconArticleHeaderFile: {
      position: 'relative',
      marginLeft:5,
      flexDirection:'row',
      flex:0.5,
      color:'wite',
      fontWeight:'bold',
      marginTop:20,
      fontSize:40,
      

    },

    headerImageArticleHeaderFile:{
      width:50,
      height:50,
      marginHorizontal:10,
      marginTop:80,
      borderRadius:10,
    },
     headerImageArticleHeaderFile:{
      width:30,
      height:30,
      // marginHorizontal:10,
      marginTop:0,
      borderRadius:20,
      marginRight:10,
      marginBottom:0
    },

















//--------------------------HOTEL CATEGORIES STYLES---


//-------------------------------HOTELS HOME SCREEN----------


 fontSize: {
    fontSize: 16,
    color:'black',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  place: {
    fontSize: 16,
    color:'black',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  ShortDescription:{
    fontSize: 16,
    // fontFamily:'SerifRegular',

  },
  HotelImage: {
    width: 50,
    height: 50,
    borderRadius:45,
    marginRight:10,
  },
  wrapText: {
    marginLeft: 10,
    marginRight:10,
    justifyContent: 'center',
    flex:1,
  },

LocationContainer:{
   justifyContent:'center',
      alignItems:'center',
      //backgroundColor:'red',
      marginTop:1,
      paddingRight:10,
    flex: 1,

},
LocationText:{
  color:'black',
  fontSize:14,

},


item: {

    flexDirection: 'row',
    //justifyContent:'space-around',
    alignItems:'center',
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    borderColor:'#E3E4FA',
    borderWidth:0.5,
    //elevation:6,
    shadowColor: 'black',
    shadowOffset: {
      width: 1.5,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    paddingLeft: 10,
    marginHorizontal:0,
    paddingVertical:5
  },


ImageRatings:{
  width:'80%',
  height:15,
  marginTop:3,

},





















//HOTEL CATEGORIES, ROW LIST  DISPLAY
//CUSTOMERS, FOOD, DRINKS, OTHERS, ROOMS

    AllListcontainer: {
    flex: 1,

  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    width: width-30,
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    marginHorizontal:20,
  },
  ImageListContainer:{
    justifyContent:'center'

  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    width: '53%',
    margin: 10,
  },
  priceView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:10,
    flex:1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
    
  },
  descText: {
    fontSize: 14,
    fontWeight: '600',
  },
  LastNameText:{
    fontSize: 16,
    fontWeight: '700'

  },
  UnitText:{

  },
  priceText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '700',
    justifyContent:'center',
  },
  discountText: {
    fontSize: 17,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  ClickableIconicon: {
    width: 50,
    height: 50,
    marginRight:50,

  },



 IconContainer:{
    justifyContent:'center',
    marginRight:0,
    flex:1,

  },

  FoodNameView:{
    marginRight:0,
    flex:1,
    marginLeft:10,
    justifyContent:'center',

  },













  //----------------CART CARD STYLES_--------
  NoCartItem:{
    textAlign:'center',
      fontSize:18,
      fontWeight:'bold',
      color:'red'

    },

   CartContainer:{
    // flex:1,
        backgroundColor: COLORS.white,
    
        height:height/3+30,

  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CartTitle:{
    justifyContent:'center',
    flexDirection:'column',
    flex:1,
  },
  CheckOutContainer:{
    flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 15,
},
TotalPriceText:{
  fontSize: 18, 
  fontWeight: 'bold'
},
PriceText:{
  fontSize: 18, fontWeight: 'bold'
},
ItemName1:{
  fontWeight: 'bold', fontSize: 16
},
ItemName2:{
  fontWeight: 'bold', fontSize: 16
},
CartContainerCOntainer2:{
  height: 100,
marginLeft: 10,
paddingVertical: 20,
flex: 1,
justifyContent:'center'
},
CartUnitText:{
  fontSize: 16
},
CartPriceText:{
  fontSize: 17, fontWeight: 'bold'
},
CartPriceTextUnit:{
  color:'red',
  fontWeight:'bold'

},
CartActionButtonText:{
  marginRight: 20, alignItems: 'center'
},

CartListHeaderContainer:{
  marginVertical:10,
  alignItems:'center',
  elevation:5,

},
CartListHeader:{
  fontSize:18,
  fontWeight:'bold'
},












//----------------VIEW BOOKED ROOM
BookedUnitactionBtn:{
  justifyContent:'center',
  alignItems:'center',
  marginVertical:20,
  width: 200,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
   marginHorizontal:20,

},
















//-------------------UNIT PAGE CART---------


UnitNoCartItem:{
    textAlign:'center',
      fontSize:18,
      fontWeight:'bold',
      color:'red'

    },

   UnitCartContainer:{
    flex:1,
        backgroundColor: COLORS.white,
    
        height:height,

  },
  Unitheader: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  UnitcartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  UnitactionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UnitCartTitle:{
    justifyContent:'center',
    flexDirection:'column',
    flex:1,
  },
  UnitCheckOutContainer:{
    flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 15,
},
UnitTotalPriceText:{
  fontSize: 18, 
  fontWeight: 'bold'
},
UnitPriceText:{
  fontSize: 18, fontWeight: 'bold'
},
UnitItemName1:{
  fontWeight: 'bold', fontSize: 16
},
UnitItemName2:{
  fontWeight: 'bold', fontSize: 16
},
UnitCartContainerCOntainer2:{
  height: 100,
marginLeft: 10,
paddingVertical: 20,
flex: 1,
justifyContent:'center'
},
UnitCartUnitText:{
  fontSize: 16
},
UnitCartPriceText:{
  fontSize: 17, fontWeight: 'bold'
},
UnitCartPriceTextUnit:{
  color:'red',
  fontWeight:'bold'

},
UnitCartActionButtonText:{
  marginRight: 20, alignItems: 'center'
},

UnitCartListHeaderContainer:{
  marginVertical:10,
  alignItems:'center',
  elevation:5,

},
UnitCartListHeader:{
  fontSize:18,
  fontWeight:'bold'
}


  });





export const images = {
  ratings: {
    '1': require('../assets/rating/rating-1.png'),
    '2': require('../assets/rating/rating-2.png'),
    '3': require('../assets/rating/rating-3.png'),
    '4': require('../assets/rating/rating-4.png'),
    '5': require('../assets/rating/rating-5.png'),
  }
};