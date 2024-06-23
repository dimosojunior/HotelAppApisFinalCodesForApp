import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import COLORS from '../constantComponents/colors';
import { PrimaryButton } from '../constantComponents/Button';

const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const { width, height } = Dimensions.get('window');


const GlobalStyles = () => {


  return (

    <View >
      <Text>Gloal Styles</Text>
    </View>
  );


}
export default GlobalStyles;


export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#233329',
    //backgroundColor: 'white',
    // width:Dimensions.get('screen').width,
    // resizeMode:'contain'
    // alignItems: 'center',
    // justifyContent: 'center',

  },

// CloseBillReportScreenFilterReportContainer: {
//     position: "absolute",
//     bottom: 10,
//     alignItems:'center',
//     left: 100,
//     backgroundColor: 'yellow',
//     padding: 10,
//     borderRadius: 6,

//   },
//   CloseBillReportScreenFilterReportContainerText: {
//     color: 'white'

//   },

  RoomlistContainer: {
   // width: Dimensions.get('window').width / 2,
   width:'43%',
    //backgroundColor: 'white',
    // marginTop: height/2-320,
     marginTop: 20,
    borderRadius: 20,
    //justifyContent:'center',
    alignItems: 'center',
    // backgroundColor:'#D9D9D9',
    backgroundColor: '#fff',
    marginVertical: 15,
    paddingVertical: 18,
    paddingTop: 30,
    margin:10,
    // flex:1,


    elevation: 15,
    //backgroundColor:'white',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'white',
    shadowOpacity: 0,
    shadowRadius: 0,
    //marginHorizontal:20,


  },
   RoomimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width:'100%',
  },
  Roomimage:
  {
    width: '50%',
    //width:50,
    //height:50,
    height: undefined,
   aspectRatio: 1

  },



 AddCustomerModalView: {
    padding: 2,
    //paddingHorizontal:20,
    // width: 340,
    width:'90%',
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 3,
    shadowColor: Platform.OS === "android" ? 'white' : "Lightgrey",
    shadowOpacity: 1,
    paddingBottom:30,
    marginTop:10,

  },




CustomernameText: {
    color: 'white',
    fontFamily:'Medium',
    marginLeft: 1,
    
    marginBottom: 0,
    // fontFamily: 'SerifRegular',
  },

UsernameText: {
    color: 'white',
    fontFamily:'Medium',
    marginLeft: 1,
    
    marginBottom: 0,
    // fontFamily: 'SerifRegular',
  },







WaitersactionBtn: {
    width: 80,
    height: 30,
    backgroundColor: '#233329',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

WaitersnameText: {
    color: 'white',
    fontFamily:'Medium',
    marginLeft: 1,
    
    marginBottom: 0,
    // fontFamily: 'SerifRegular',
  },



 WaitersitemView: {
    flex: 1,
    flexDirection: 'row',
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: '#233329',
    elevation: 4,
    elevation: 10,
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 1,
    marginTop: 10,
    borderRadius: 10,
    height: 85,
    marginBottom: 10,
    marginHorizontal: 20,
    paddingHorizontal:10,
    alignItems:'center',
  },
   WaitersnameView: {
    justifyContent: 'center',
    width: '75%'
    //width: '43%',
    // margin: 10,


  },

WaitersText: {
     fontFamily:'Light',
     color:'red',
    //fontWeight: '700'

  },
WaitersApprovedText:{
  fontFamily:'Light',
     color:'white',
},





//--------------PENDING AND APPROVED--------------------
pendingText:{
  //fontWeight:'bold',
  color:'red',
  marginBottom:10,
   fontFamily:'Light',

},

approvedText:{
  //fontWeight:'bold',
  color:'white',
  marginBottom:10,
   fontFamily:'Light',
  

},






  //---------------------ACTIVITY INDICATOR-------------

  ActivityIndicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    flex: 1,

    height: height,
    backgroundColor: '#233329',

  },
  ActivityIndicatorText: {
    color: 'red',
    marginBottom: 15,
    marginTop: 20,
     fontFamily:'Light',
    fontFamily:'Light',


  },


  //------------------HOTEL CATEGORIES--------------

  categoriesComponentText: {
    //  fontFamily:'Light',
    fontFamily: 'Bold',
    textAlign: 'center',
    paddingVertical: 15,
    color: 'white'
  },



  //--------------------------SEARCH PAGE-----------------

  SearchContainer: {
    marginTop: 10,
    paddingHorizontal: 20,

  },

  InputContainer: {
    marginTop: 10,
    padding: 2,
    paddingLeft: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    elevation: 3,
    borderColor: 'white',
    borderWidth: 1,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 1,
    shadowRadius: 2,
  },

  TextInput: {
     fontFamily:'Light',
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
  },







  //---------------------MODAL STYLE-----------------

  ModalView: {
    padding: 2,
    paddingHorizontal:20,
    // width: 340,
    width:'90%',
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 3,
    shadowColor: Platform.OS === "android" ? 'white' : "Lightgrey",
    shadowOpacity: 1,
    paddingBottom:30,
    marginTop:10,

  },
  ButtonClose: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "red",
    borderRadius: 5,

  },
  ButtonAdd: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "green",
    borderRadius: 5,


  },
  ButtonScan: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 5,

  },
  ButtonBarcode: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    //  backgroundColor:"green",
    borderRadius: 5,
    borderWidth: 1,

  }, ButtonConatiner: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "space-between"
  },
  input: {
    flexDirection: "row",
    width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  inputTax: {
    flexDirection: "row",
    width: 300,
    height: 50,
    backgroundColor: 'green',
    // borderColor:"black",
    // borderWidth:1,
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  picker: {
    width: 170,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  pickerInput: {
    top: -7
  },

  textInput: {
    // fontSize: 20
     
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white',
    
    borderRadius: 10,
  },
  form: {
    marginTop: 10,
    alignItems: 'center'
  },
  Inputicon: {
    fontSize: 29,
    marginRight: 10

  },
  TaxType: {
     fontFamily:'Light',
    color: "white",
    fontWeight: '400'
  },
  open: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },


  ButtonAddText: {
    color: 'white',
     fontFamily:'Light',
  },











  //----------------------HOTEL CATEGORIES--------------
  //----------ITEMS ZINAZOPISHANA-------------------

  HoteCategoriesHomeHeaderContainer: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    width: width,
    flexDirection: 'row',
    paddingHorizontal: 20,

  },
  HoteCategoriesHomeHeaderText: {
    alignItems: 'center',
    fontFamily:'Light',
     



  },
  HoteCategoriesHomeHeaderImage: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 20,

  },
  HoteCategorieslistContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    //backgroundColor: 'white',
    marginTop: height/2-340,
    borderRadius: 20,
    //justifyContent:'center',
    alignItems: 'center',
    // backgroundColor:'#D9D9D9',
    backgroundColor: '#233329',
    marginVertical: 15,
    paddingVertical: 18,
    //paddingTop: 30,


    elevation: 15,
    //backgroundColor:'white',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 0,
    shadowRadius: 0,

  },





  HoteCategoriesimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },



  HoteCategoriesimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },









  HoteCategoriesnameText: {
    color: 'white',
 fontFamily:'Light',
    marginLeft: 0,
    // fontFamily:'Light',
    marginBottom: 20,
    marginTop: 10,
    fontFamily: 'Light',
  },
  HoteCategoriespriceText: {
    color: 'orange',
    fontFamily:'Light',
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
    color: 'white',
    textAlign: 'center',
     fontFamily:'Light',
    // fontFamily: 'SerifRegular',
  },





























  //--------------------------INVENTORY CATEGORIES------------------------





  HomeHeaderContainer: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    width: width,
    flexDirection: 'row',
    paddingHorizontal: 20,

  },

  HomeHeaderImage: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 20,

  },

  listContainer: {
   //width: Dimensions.get('window').width / 2-10,
   width:'47%',
    backgroundColor: '#233329',
    // marginTop: height/2-320,
     marginTop: 10,
    borderRadius: 20,
    //justifyContent:'center',
    alignItems: 'center',
    // backgroundColor:'#D9D9D9',
    //backgroundColor: '#fff',
    marginVertical: 1,
    paddingVertical: 18,
    paddingTop: 5,
    //margin:10,
    //flex:1,



    elevation: 15,
    //backgroundColor:'white',
    shadowOffset: { width: 0, height: 0 },
    //shadowColor: 'white',
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 0,
    shadowRadius: 0,
    marginHorizontal:5,


 

  },

  MotiViewlistContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:'95%',
    backgroundColor: '#233329',

  },
   imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '95%',
    //backgroundColor:'red',
    //flex:1,

  },
  image:
  {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,


  },
  NewSalesimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  NewSalesimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },



  InventoryimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },
  Inventoryimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },



  CustomersimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },
  Customersimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },



  ReportsimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,


  },
  Reportsimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },




  nameText: {
    color: 'white',
    fontFamily:'Light',
    marginLeft: 1,
    
    marginBottom: 0,
    // fontFamily: 'SerifRegular',
  },

  button: {
    backgroundColor: 'wheat',
    padding: 10,
    margin: 15,
    borderRadius: 10,

  },
























  //-----------ITEM 1----------HOME COMPONENT and ALL OTHER HOME CATEGORIES COMPONENTS ---------------







  HomeHeaderText: {
    alignItems: 'center',
    fontFamily:'Light',
     



  },


 








  buttonText: {
    color: 'white',
    textAlign: 'center',
    // fontFamily: 'SerifRegular',
     fontFamily:'Light',
  },


















  //-----------------------HEADER.JS------------------


  headerHeaderFile: {
    //width:Dimensions.get('window').width,     
    width: '100%',
    // height: 60,
    paddingVertical: 10,
    flexDirection: 'row',
   backgroundColor: '#233329',
    borderBottomWidth: 2,
    paddingTop: Dimensions.get("window").height * 0.04,

    // alignItems: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
    //backgroundColor: 'white',  //"#2B3856",
    marginBottom: 0,

    justifyContent: 'space-between',
    elevation: 3,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: 0,

    //paddingVertical:15,




  },
  headerTextHeaderFile1:{
    fontFamily:'Light',
     fontFamily:'Light',
    color: 'white',
    letterSpacing: 1,

    // flex:1,
    alignItems: "center",
    marginTop: 10,
    // fontFamily:'SerifRegular',

  },
  headerTextHeaderFile: {
 fontFamily:'Light',
     fontFamily:'Light',
    color: 'black',
    letterSpacing: 1,

    // flex:1,
    alignItems: "center",
    marginTop: 10,
    // fontFamily:'SerifRegular',


  },
  iconHeaderFile: {
    position: 'relative',
    marginLeft: 20,

    //flex:1,
    color: 'white',
    fontFamily:'Light',
    marginTop: 0,

    fontSize: 35,


  },

  headerImageHeaderFile: {
    width: 40,
    height: 40,
    // marginHorizontal:10,
    marginTop: 0,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 0
  },













  //-------------------------OTHER HEADER.JS----------

  headerArticleHeaderFile: {
    width: Dimensions.get('screen').width,
    height: 100,
    flexDirection: 'row',

    // alignItems: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
    backgroundColor: "black",
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 2,




  },
  headerTextArticleHeaderFile: {
 fontFamily:'Bold',
    
    // textAlign:'center',
    // marginLeft:30,
    //color:'white',
    //fontWeight:'bold',
    marginHorizontal: 30,
    color: 'white',
    
  },
  iconArticleHeaderFile: {
    position: 'relative',
    marginLeft: 5,
    flexDirection: 'row',
    flex: 0.5,
    color: 'wite',
    fontFamily:'Light',
    marginTop: 20,
    fontSize: 40,


  },


  headerImageArticleHeaderFile: {
    width: 30,
    height: 30,
    // marginHorizontal:10,
    marginTop: 0,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 0
  },

















  //--------------------------HOTEL CATEGORIES STYLES---


  //-------------------------------HOTELS HOME SCREEN----------


  fontSize: {
     fontFamily:'Light',
    color: 'white',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  place: {
     fontFamily:'Light',
    color: 'white',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  ShortDescription: {
     fontFamily:'Light',
    // fontFamily:'SerifRegular',

  },
  HotelImage: {
    width: 50,
    height: 50,
    borderRadius: 45,
    marginRight: 10,
  },
  wrapText: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    flex: 1,
  },

  LocationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'red',
    marginTop: 1,
    paddingRight: 10,
    flex: 1,

  },
  LocationText: {
    color: 'white',
     fontFamily:'Light',

  },


  item: {

    flexDirection: 'row',
    //justifyContent:'space-around',
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    borderColor: '#E3E4FA',
    borderWidth: 0.5,
    //elevation:6,
    shadowColor: 'white',
    shadowOffset: {
      width: 1.5,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    paddingLeft: 10,
    marginHorizontal: 0,
    paddingVertical: 5,
  },


  ImageRatings: {
    width: '80%',
    height: 15,
    marginTop: 3,

  },

















  CartitemView: {
    flex: 1,
    flexDirection: 'row',
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: '#233329',
    elevation: 4,
    elevation: 10,
     shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 1,
    marginTop: 2,
    borderRadius: 10,
    height: 70,
    marginBottom: 10,
    marginHorizontal: 20,

  },



  //HOTEL CATEGORIES, ROW LIST  DISPLAY
  //CUSTOMERS, FOOD, DRINKS, OTHERS, ROOMS

  AllListcontainer: {
    flex: 1,
    backgroundColor: '#233329',

  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: '#233329',
    elevation: 4,
    elevation: 10,
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 1,
    marginTop: 10,
    borderRadius: 10,
    height: 70,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  ImageListContainer: {
    justifyContent: 'center',
    width: '25%'

  },
  itemImage: {
    width: '80%',
    height: 60,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    justifyContent: 'center',
    width: '75%'
    //width: '43%',
    // margin: 10,


  },
  priceView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    width: '35%',
  },

  descText: {
     fontFamily:'Light',
     color: 'white',
    //fontWeight: '600',
  },
  LastNameText: {
     fontFamily:'Light',
     color: 'white',
    //fontWeight: '700'

  },
  UnitText: {
     fontFamily:'Light',
    color: 'white',
    //fontWeight: '700',
    justifyContent: 'center',

  },
  priceText: {
     fontFamily:'SemiBold',
    color: 'white',
    //fontWeight: '700',
    justifyContent: 'center',
  },
  discountText: {
     fontFamily:'Light',
    //fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  ClickableIconicon: {
    width: 50,
    height: 50,
    marginRight: 50,

  },



  IconContainer: {
    justifyContent: 'center',
    marginRight: 0,
    flex: 1,
    alignItems: 'flex-end',
    width: '15%',
    paddingRight: 10,

  },

  FoodNameView: {
    marginRight: 0,
    // flex:1,
    marginLeft: 10,
    justifyContent: 'center',
    width: '35%'

  },













  //----------------CART CARD STYLES_--------
  NoCartItem: {
    textAlign: 'center',
     fontFamily:'Light',
    
    color: 'red'

  },
  NoCartItemContainer: {
    alignItems: 'center',

  },



  NoProductContainerContainer: {
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center'

  },

  NoProductText: {
    color: 'white',
     fontFamily:'Light',
 

  },





  CartContainer: {
    // flex:1,
    backgroundColor: COLORS.white,

    height: height / 3 + 30,

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
  CartTitle: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  CheckOutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  TotalPriceText: {
     fontFamily:'Light',
 
  },
  PriceText: {
    fontFamily:'Light'
  },
  ItemName1: {
    fontFamily:'Light', 
  },
  ItemName2: {
    fontFamily:'Light', 
  },
  CartContainerCOntainer2: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center'
  },
  CartUnitText: {
     fontFamily:  'Light',
  },
  CartPriceText: {
    fontFamily:'Light'
  },
  CartPriceTextUnit: {
    color: 'red',
 fontFamily:'Light'

  },
  CartActionButtonText: {
    marginRight: 20, alignItems: 'center'
  },

  CartListHeaderContainer: {
    marginVertical: 1,
    // alignItems:'center',
    elevation: 5,
    marginHorizontal: 20,

  },
  CartListHeader: {
     fontFamily:'SemiBold',
     color: 'white',
 
  },












  //----------------VIEW BOOKED ROOM
  BookedUnitactionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: 200,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    marginHorizontal: 20,

  },
















  //-------------------UNIT PAGE CART---------


  UnitNoCartItem: {
    textAlign: 'center',
     fontFamily:'Light',
    
    color: 'red'

  },

  UnitCartContainer: {
    flex: 1,
    backgroundColor: COLORS.white,

    height: height,

  },
  Unitheader: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  UnitcartCard: {
    height: 70,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#233329',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  UnitactionBtn: {
    width: 80,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UnitCartTitle: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  UnitCheckOutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  UnitTotalPriceText: {
     fontFamily:'Light',
 
  },
  UnitPriceText: {
    fontFamily:'Light',
    color: 'white',
  },
  UnitItemName1: {
    fontFamily:'Light', 
    color: 'white',
  },
  UnitItemName2: {
    fontFamily:'Light', 
    color: 'white',
  },
  UnitItemName2: {
     fontFamily:'Light',
    color: 'green',
 
  },
  UnitCartContainerCOntainer2: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center'
  },
  UnitCartUnitText: {
     fontFamily:  'Light',
     color: 'white',
  },
  UnitCartPriceText: {
    fontFamily:'Light',
    color: 'white',
  },
  UnitCartPriceTextUnit: {
    color: 'red',
 fontFamily:'Light'

  },
  UnitCartActionButtonText: {
    marginRight: 20, alignItems: 'center'
  },

  UnitCartListHeaderContainer: {
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,

  },
  UnitCartListHeader: {
     fontFamily:'Light',
     color: 'white',
 
  },

















  // REPORTS STYLES-------------------------


  ReportKeyboardAvoidingView: {
    width: "100%",
    height: "100%",
    backgroundColor: '#233329',
    flex: 1,
  },





























  //-------------------REPORT SCREEN---------------------


  ReportScreenreportCardHeader: {
    fontFamily:'Light',
    color:'white',
    // fontSize: 20,

  },
  ReportScreencontainer: {
    width: "95%",
    paddingHorizontal: 35,
    paddingVertical: 5,
    marginVertical: 20,
    elevation: 10,
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 1,



    alignSelf: "center",
    borderRadius: 10,
    // shadowOpacity: 0.5,
    // shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5
    },
    backgroundColor: '#233329',
    marginVertical: 10
  },

  ReportScreentitle: {
     fontFamily:'Light',
     color: 'white',


    marginTop: 10
  },
  ReportScreendescription: {
     fontFamily:'Light',
    fontWeight: "400",
    marginTop: 10
  },
  ReportScreendata: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  ReportScreenheading: {

  },
  ReportScreenauthor: {
    // fontWeight: "bold",
     fontFamily:  'Light',
  },
  ReportScreendate: {
    // fontWeight: "bold",
    color: "#e63946",
     fontFamily:  'Light',
  },
  ReportScreensource: {
    color: "#e63946",
    // fontWeight: "bold",
     fontFamily:  'Light',
  },














  ReportScreenDatePickerContainer: {
    flex: 1,
    alignItems: "center",


  },


  ReportScreentextSubHeader: {
    // fontSize: 20,
    color: "#111",
     fontFamily:'Light',
  },
  ReportScreeninputBtn: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#222",
    height: 50,
    paddingLeft: 8,
     fontFamily:'Light',
    justifyContent: "center",
    marginTop: 14,
  },
  ReportScreensubmitBtn: {
    backgroundColor: "green",
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
    width: 200,
  },
  ReportScreencenteredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ReportScreenmodalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ReportScreenEndDateContainer: {
    marginTop: 15,
  },

  ReportScreenItemcontainer: {
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',

  },

  ReportScreenFilterReportContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 6,

  },
  ReportScreenFilterReportContainerText: {
    color: '#fff',
    fontFamily:'Light',

  },


  ReportScreenFilterformContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'

  },
  ReportScreenFilterText: {
    marginLeft: 90,  fontFamily:  'Light',
  },
  ReportCalenderContainer: {
    width: "100%",
    paddingHorizontal: 4,

    marginTop: 14
  },
  ReportCalenderStartDateText: {
     fontFamily:  'Light',
  },
  ReportCalenderEndDateText: {
     fontFamily:  'Light',
  },




  ReportScreenItemscontainer2: {
    // flexDirection:'row',
    // alignItems:'center',
    // width:'100%',
    // flex:1,

    padding: 5,
    //ustifyContent:'space-between',
    flexDirection: 'row',


  },

  ReportScreenIndividualItemLeftcontainer: {
    width: '70%',
    // flex:1,


  },
  ReportScreenIndividualItemRightcontainer: {
    width: '30%',
    // flex:1,

  },


  ReportScreencontainer2: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    elevation: 10,
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 1,



    alignSelf: "center",
    borderRadius: 10,
    // shadowOpacity: 0.5,
    // shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5
    },
    backgroundColor: '#233329',

  },


















  //------------------ORDER CART ITEMS PART----------

  MakeOrderButton: {
     fontFamily:'Light',
    backgroundColor: 'green',
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    fontFamily:'Light',

  },
  OrderCheckOutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    alignItems: 'center',
    width: '90%',
  },
  CartOrderTotalPriceText: {
     fontFamily:  'Medium',
     color: 'white',
 
  },
  CartOrderTotalText: {
     
 fontFamily:'Medium',
  color: 'white',

  },
  MakeOrderButtonContainer: {
    marginBottom: 15,
    alignItems: 'center'

  },




































  //------------ALL PRODUCTS INVENTORY SCREENS---------


  //HOTEL CATEGORIES, ROW LIST  DISPLAY
  //CUSTOMERS, FOOD, DRINKS, OTHERS, ROOMS

  InventoryAllListcontainer: {
    flex: 1,
    backgroundColor: '#233329',

  },
  InventoryitemView: {
    flex: 1,
    flexDirection: 'row',
    width: width - 30,
    alignSelf: 'center',
   backgroundColor: '#233329',
    elevation: 4,
    elevation: 10,
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 1,
    marginTop: 2,
    borderRadius: 10,
    height: 80,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  InventoryImageListContainer: {
    justifyContent: 'center',
    width: '25%'

  },
  InventoryitemImage: {
    width: '80%',
    height: 60,
    borderRadius: 10,
    margin: 5,
  },
  InventorynameView: {
    justifyContent: 'center',
    width: '75%'
    //width: '43%',
    // margin: 10,


  },
  InventorypriceView1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    width: '10%',
  },

  InventorypriceView2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    width: '20%',
  },


  InventorypriceView3: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    width: '20%',
  },

  InventorydescText: {
     fontFamily:'Light',
     color: 'white',
    
  },
  InventorynameText: {
     fontFamily:'Light',
    //fontWeight: '600',
    color: 'white',
  },
  InventoryLastNameText: {
     fontFamily:'Light',
     color: 'white',
    //fontWeight: '700'

  },
  InventoryUnitText: {
     fontFamily:'Light',
     color: 'white',
    // color: 'green',
    //fontWeight: '700',
    justifyContent: 'center',

  },
  InventorypriceText: {
     fontFamily:'Light',
    color: 'green',
    //fontWeight: '700',
    justifyContent: 'center',
  },
  InventorydiscountText: {
     fontFamily:'Light',
    //fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  InventoryClickableIconicon: {
    width: 50,
    height: 50,
    marginRight: 50,

  },



  InventoryIconContainer: {
    justifyContent: 'center',
    marginRight: 0,
    flex: 1,
    alignItems: 'flex-end',
    width: '10%',
    paddingRight: 10,

  },

  InventoryFoodNameView: {
    marginRight: 0,
    // flex:1,
    marginLeft: 10,
    justifyContent: 'center',
    width: '30%'

  },


























  //---------------REPORT FILTER MODAL------------------

  FilterModalcontainer: {
    flex: 1,
    padding: 16,
  },
  FilterModalfilterButton: {
    padding: 16,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  FilterModalfilterButtonText: {
    color: "white",
    // fontWeight: "bold",
    fontFamily:'Light',
  },
  FilterModalmodalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  FilterModalmodalContent: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    width: "90%",
  },
  FilterModalmodalTitle: {
     fontFamily:'Light',
    // fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 6,
    color: 'white',
  },
  FilterModalapplyButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  FilterModalapplyButtonText: {
    color: "white",
    // fontWeight: "bold",
  },
  FilterModaltotalAmountText: {
     fontFamily:'Light',
    // fontWeight: "bold",
    marginTop: 20,
  },
  FilterModalorderContainer: {
    //backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    elevation: 10,
    shadowColor: 'green',
    shadowOpacity: 1,
    flex: 1,
    flexDirection: 'row',



    //alignSelf: "center",
    borderRadius: 10,
    // shadowOpacity: 0.5,
    // shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5
    },
    backgroundColor: "white",
    marginVertical: 10
  },


  ReportRangeText: {
    color: 'red',
     fontFamily:'Light',
 fontFamily:'Light'

  },


  ProcessOrderReportScreenFilterReportContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 6,

  },
  ProcessOrderReportScreenFilterReportContainerText: {
    color: 'black'

  },







AddNewCustomer:{
  backgroundColor:'wheat',
  alignItems:'center',
  justifyContent:'center',
  flex:1

},

AddNewCustomerText:{
  color:'black',
  // fontSize:14,
  paddingHorizontal:10,
  // fontWeight:'bold',
  
  padding:10,
  borderRadius:6,
   fontFamily:'Light',

},









//-------------WALKING AND GUEST CUSTOMERS CATEGORY--------
WalkingGuestOutercontainer:{
  flexDirection:'column',
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  height:height,
  width:'100%',

},

WalkingGuestTextName:{
  width:width-20,

  padding:10,
  backgroundColor:'green',
  color:'white',
  borderRadius:8,
  textAlign:'center',
  paddingVertical:15,
   fontFamily:'Medium',
},

WalkingGuestListContainer:{
  // flex:1,
  marginRight:0,
  // marginLeft:10,
  marginVertical:20,
  width:'100%'
},







ViewOrderModalTitle:{
  textAlign:'center',
  fontFamily:'SemiBold'
},
ConfirmCancelButtonText:{
  color:'white',
  fontFamily:'Light'
},

EnterQuntityText:{
  fontSize:16, 
  marginLeft:3,
   fontFamily:'Light',
},










//SWITCH SELECTOR

 swapButtonsheader:{
  justifyContent:'center',
  alignItems:'center',
  flex:1,
  height:height,


 },
 swapButtonsContainer:{
  width:'100%',
  // height:200,
  alignItems:'center',
  justifyContent:'center',
  marginBottom:20,
 },
 swapButtonsInnerContainer:{
  width:'90%',
  marginTop:20,

 },
 swapButtonsContentsContainer:{
  alignItems:'center',
 },
 customSwitchContainer: {
  backgroundColor:'#0f0',
    borderRadius: 10, // Adjust the border radius value as needed
    overflow: 'hidden', // This ensures the border radius is applied correctly
  },
swapButtonsheaderText:{
  color:'white',
  textAlign:'center',
  fontFamily:'Medium'

},




KeyboardAvoidingViewModal:{
  flex: 1,
  backgroundColor:'#233329'

},

});





export const images = {
  ratings: {
    // '1': require('../assets/rating/rating-1.png'),
    // '2': require('../assets/rating/rating-2.png'),
    // '3': require('../assets/rating/rating-3.png'),
    // '4': require('../assets/rating/rating-4.png'),
    // '5': require('../assets/rating/rating-5.png'),
  }
};