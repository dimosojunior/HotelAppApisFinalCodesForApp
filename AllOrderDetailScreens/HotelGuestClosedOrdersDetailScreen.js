import React, {useEffect, useState} from "react";
import {View,StyleSheet,RefreshControl,ScrollView,Alert, Modal,TouchableOpacity,Pressable,Image,Text,SafeAreaView, FlatList} from "react-native";
import {globalstyles} from '../Styles/globalstyles';
import axios from "axios";
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
import LotterViewScreen from '../Screens/LotterViewScreen';
import { useNavigation } from '@react-navigation/native';
import { EndPoint } from "../constantComponents/constants";
import MinorHeader from '../Headers/MinorHeader';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

import {useFonts} from 'expo-font';

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      EASY-FIX
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;



const HotelGuestClosedOrdersDetailScreen = ({route ,navigation }) => {

   const { 
    total_price,
    order_status,
    closed_order_state,
    table_number,
    id 
   } = route.params

  //const navigation = useNavigation();
   const [userToken, setUserToken] = useState('');
   const [userData, setUserData] = useState({});

const move =() =>{
  setModalVisible(false);
  navigation.navigate('Hotel Reports');
}


 let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});

// TO GET USER TOKEN


useFocusEffect(
    React.useCallback(() => {
      const updateUserToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        setUserToken(token || '');
      };

      updateUserToken();

      // Listen for the 'updateUserToken' event
      const unsubscribe = navigation.addListener('updateUserToken', updateUserToken);

      // Cleanup the listener when the component unmounts
      return unsubscribe;
    }, [navigation])
  );





  useEffect(() => {
    fetchUserData();
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        
        //console.log("USERDATA ARE");
        //console.log(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };











  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleProcessOrder, setModalVisibleProcessOrder] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [queryset, setQueryset] = useState([]);
  const [mainTotalPrice, setMainTotalPrice] = useState(null);
  const [refresh, setRefresh] = useState(false);

const [isPending, setisPending] = useState(false);
const [isRange, setisRange] = useState(false);
  // Utility function to format the date as "YYYY-MM-DD"
  const formatDate = (dateString) => {
    if (!dateString) {
      return null;
    }
    const [year, month, day] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (startDate && endDate) {
      handleFilter();
      //setisPending(true);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    // Make a GET request to fetch queryset and main total price
    axios.get(`${EndPoint}/Cart/GetHotelOrderItems/?id=${id}`)


      .then((response) => {
        const { queryset, main_total_price } = response.data;
        setQueryset(queryset);
        setisPending(true);
         setisRange(false);
        setMainTotalPrice(main_total_price);
        
      })
      .catch((error) => {
        
        setisPending(true);
      });
  }, []);

  










const removeOrderItem = (cartId) => {
  

   // navigation.replace('View Hotel  Orders', {id}); 
    navigation.replace('All Hotel Orders');
  // Make an API request to delete the item from the cart
  const apiUrl = `${EndPoint}/Cart/HotelDeleteOrderItem/?id=${id}&cartId=${cartId}`;
  
  
  axios
    .delete(apiUrl, {
      headers: {
        Authorization: `Token ${userToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.status === 204) {
        // Item removed successfully, update the cartItems state
        setQueryset(queryset.filter((item) => item.id !== cartId));
         //setIsOrderButtonVisible(false);
         Alert.alert('item is removed successfully from your order');

         // navigation.replace('Hotel NewSale Other ');  

     

      } 
      else {
        // Handle the error if the item couldn't be removed
        
        //Alert.alert('Error', 'Failed to remove item from cart');
        Alert.alert('item is removed successfully from your order');
      }
    })
    .catch((error) => {
      
      // Handle the error here, for example, show a user-friendly error message
      //Alert.alert('Error', 'Failed to remove item from cart');
      Alert.alert('item is removed successfully from your order');
    });
};







//----------------PRINTING RECEIPT-----------------

 const [selectedPrinter, setSelectedPrinter] = React.useState();
 const [order, setOrder] = useState([]);
 const [modalVisibleReceipt, setModalVisibleReceipt] = useState(false);






  const print = async () => {
    setModalVisible(false);
    
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: createDynamicTable(),
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html
    });
    
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }


  const createDynamicTable = () => {
    var table = '';
    for (let i in queryset) {
      const item = queryset[i];
      table = table + `
      <tr>
        <td>${item.id}</td>
        <td>${item.product.product_name} 
      
        ${item?.product.product_second_name}</td>
       
        <td>${item.quantity}</td>
         <td>${item.product.price}</td>
        
      </tr>
      `
    }
    
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        
        tr:nth-child(even) {
          background-color: #dddddd;
        }
        h2{
          color:black;
          font-weight:bold;
          font-size:16;
        }

         h1{
          color:white;
          font-weight:bold;
          text-align:center;
          font-size:18;

        }
        img{
          width:50%;
          height:40px;
          marginBottom:20;
         border-radius:8;
        margin-top:20;
        }
        #totalCartPrice{

        }

         #totalCartPrice h3{
          text-align:center;
          font-size:20;
          margin-top:20;

        }

        #Header-container{
          background-color:'green';
          padding:15px;
          border-radius:6px;
        }

      #company_name{
        margin-bottom:15px;
        color:white;
        font-size:18px;
      }
      </style>
      </head>
      <body>

      <div class="Header-container" style="background-color:green;">

        <h1>EASY-FIX</h1>
       

 <div id="totalCartPrice">

      <h3 id="company_name"> ${userData.company_name}</h3>
      </div>

</div>




      
      <h2>Receipt</h2>
      
      <table>
        <tr>
          <th>ID</th>
          <th>Product Name</th> 
          <th>Quantity Ordered</th>
          <th>Item Price</th>
          
        </tr>
        ${table}
      </table>



      <div id="totalCartPrice">

      <h3>Total Order Price: ${total_price}/=</h3>

       <h3>Issued By: ${userData.username}</h3>
      </div>
      
      </body>
    </html>
      `;
    return html;
  }











const setOrderStatusTrue = () => {
   navigation.replace('All Hotel Orders');
  setModalVisibleProcessOrder(false);
  const url = `${EndPoint}/Cart/HotelOrderChangeStatusToTrue/?id=${id}`;
  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      if (response.ok) {
        // Request was successful
        
        Alert.alert('Order processed successfully');
        
      } else {
        // Request failed with a status code other than 200
        
        Alert.alert('Order processed successfully');
      }
    })
    .catch((error) => {
      // Handle request error
      
      Alert.alert('Order processed successfully');
    });
};

// const setOrderStatusFalse = () => {
//    navigation.replace('All Hotel Orders');
//   setModalVisibleProcessOrder(false);
//   const url = `${EndPoint}/Cart/HotelOrderChangeStatusToFalse/?id=${id}`;
//   fetch(url, {
//     method: 'POST',
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Request was successful
        
//         Alert.alert('Order un-checked successfully');
//       } else {
//         // Request failed with a status code other than 200
        
//         Alert.alert('Order un-checked successfully');
//       }
//     })
//     .catch((error) => {
//       // Handle request error
      
//       Alert.alert('Order un-checked successfully');
//     });
// };





const closeBill = () => {
   navigation.replace('All Hotel Orders');
  setModalVisibleProcessOrder(false);
  const url = `${EndPoint}/Cart/HotelOrderCloseBill/?id=${id}`;
  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      if (response.ok) {
        // Request was successful
        
        Alert.alert('Bill Closed successfully');
      } else {
        // Request failed with a status code other than 200
        
        Alert.alert('Bill Closed successfully');
      }
    })
    .catch((error) => {
      // Handle request error
      
      Alert.alert('Bill Closed successfully');
    });
};




const formatToThreeDigits = (number) => {
  if (number !== null) {
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 0, // Ensure two decimal places
      maximumFractionDigits: 2, // Limit to two decimal places
      minimumIntegerDigits: 1, // Ensure at least one integer digit
    });
  }
  return null;
};




















// Function to format the datetime to date
  const formatToShortDate = (dateTimeString) => {
    if (!dateTimeString) {
      return "";
    }
    const date = new Date(dateTimeString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };





const ReportCard = ({item, index}) => {
  // console.log("NEW YOUR ITEMS");
  // console.log(item);

    // const goToSource = () =>{
    //     WebBrowser.openBrowserAsync(item.url);
    // }

    return(
 
        <Pressable 

        
        

        style={globalstyles.ReportScreencontainer2} >
              
        {/*    MWANZO */}

          
           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Item Name:</Text>

      {item.product.product_second_name && (
     <Text style={globalstyles.ReportScreentitle}>Item Second Name:</Text>
      )}
     </View>

     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={[{color:'green'},globalstyles.ReportScreentitle]}>{item.product.product_name}
    </Text>

     {item.product.product_second_name && (
     <Text style={[{color:'green'},globalstyles.ReportScreentitle]}>
     
    {item.product.product_second_name}
    </Text>
    )}
   

     
     </View>

            </View>
 {/*    MWISHO */}



     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Total Price:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Tsh. {formatToThreeDigits(item.price)}/=</Text>
     
     </View>

            </View>
 {/*    MWISHO */}





     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Quantity:</Text>
     <Text style={globalstyles.ReportScreentitle}>Order Price:</Text>
     <Text style={globalstyles.ReportScreentitle}>Order Date:</Text>

    
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
       <Text style={globalstyles.ReportScreentitle}>{item.quantity}</Text>
       <Text style={globalstyles.ReportScreentitle}>{item.product.price}/=</Text>
 
     <Text style={globalstyles.ReportScreentitle}>{formatToShortDate(item.Created)}</Text>
    





     </View>

            </View>
 {/*    MWISHO */}

 




     {/*    MWANZO */}

{item && item.Customer && item.Customer.CustomerFullName && ( 
           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Customer Name:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
      
     <Text style={globalstyles.ReportScreentitle}>{item.Customer.CustomerFullName}</Text>
   
     </View>


            </View>
              )}
 {/*    MWISHO */}





 {/*    MWANZO */}

{item && item.Customer && item.Customer.PhoneNumber && ( 
           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Customer Number:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
      
     <Text style={globalstyles.ReportScreentitle}>{item.Customer.PhoneNumber}</Text>
   
     </View>


            </View>
              )}
 {/*    MWISHO */}





 {/*    MWANZO */}

{item && item.Customer && item.Customer.CustomerAddress && ( 
           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Customer Address:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
      
     <Text style={globalstyles.ReportScreentitle}>{item.Customer.CustomerAddress}</Text>
   
     </View>


            </View>
              )}
 {/*    MWISHO */}









  {/*    MWANZO */}

{item && item.table && item.table.TableNumber && ( 
           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={[{
      color:'green',
      fontWeight:'bold',
     },globalstyles.ReportScreentitle]}>Order Table No:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
      
     <Text style={[{
      color:'green',
      fontWeight:'bold',

     },globalstyles.ReportScreentitle]}>{item.table.TableNumber}</Text>
   
     </View>


            </View>
              )}


 {/*    MWISHO */}




 {/*    MWANZO */}

{item && item.room && item.room.RoomName && ( 
           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={[{
      color:'green',
      fontWeight:'bold',
     },globalstyles.ReportScreentitle]}>Order Room No:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
      
     <Text style={[{
      color:'green',
      fontWeight:'bold',
     },globalstyles.ReportScreentitle]}>{item.room.RoomName}</Text>
   
     </View>


            </View>
              ) }
 {/*    MWISHO */}
       



           
        </Pressable>
       
    )
}



















  return (

<>{!fontsLoaded ? (<View/>):(
  
     <>
    {isPending ? (

       <SafeAreaView style={globalstyles.container}>

<MinorHeader title="Items"  screenName="Hotel  Reports" />



  
    






{/*MWANZO WA  REPORT*/}





{queryset && queryset.length > 0 ? (
 <View>
    <View style={globalstyles.OrderCheckOutContainer}>
      <Text style={[{
        color:'green'
      },globalstyles.CartOrderTotalText]}>Total Amount</Text>
      <Text style={[{
        color:'green'
      },globalstyles.CartOrderTotalPriceText]}>
       Tsh. {formatToThreeDigits(total_price)}/=
      </Text>
    </View>
    
  </View>

 ) : ''}  








 {queryset && queryset.length > 0 ? (

   <View style={{
    marginBottom:40,
    flex:1,
   }} >
               
 <View style={globalstyles.CartListHeaderContainer}>
 

  <Text style={globalstyles.CartListHeader}>Ordered Items</Text>
  

  </View>


















    <FlatList
        data={queryset}
        renderItem={ReportCard}
        keyExtractor={(item) => item.id.toString()}
        // ListFooterComponent={renderLoader}
        // onEndReached={getProducts}
        // onEndReachedThreshold={0.5}
      />



  </View>


  ) :(
   <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No any item in your order
  
  </Text>
</View>

  )}  








{/*MWISHO WA  REPORT*/}










<TouchableOpacity
onPress={() => setModalVisible(true)}
style={globalstyles.ReportScreenFilterReportContainer}
 >
    <Text 
    style={globalstyles.ReportScreenFilterReportContainerText}

   >Print Receipt</Text>

</TouchableOpacity>



{/*<TouchableOpacity
onPress={() => setModalVisibleProcessOrder(true)}
style={globalstyles.ProcessOrderReportScreenFilterReportContainer}
 >


 <Text 
    style={globalstyles.ProcessOrderReportScreenFilterReportContainerText}

   >Pay Bill</Text>
   

</TouchableOpacity>

*/}







{/*MODAL FOR PRINTING*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontFamily:'Bold', }}>ORDER RECEIPT</Text>

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            


{userData && userData.is_supervisor === true ? (

               <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white',
                          fontFamily:'Light',
                        }}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={print} >
                        <Text style={{
                          color:'white',
                          fontFamily:'Light',
                        }}>PRINT</Text>
                    </TouchableOpacity>
            </View>):(

  <Text style={{ marginLeft:10,fontFamily:'Light', }}>You are not allowed to print Receipt</Text>

)}


          </View>
        </View>
      </Modal>







{/*MODAL FOR PROCESSING ORDERS*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleProcessOrder}
        onRequestClose={() => setModalVisibleProcessOrder(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
          
            <Text style={{fontFamily:'Medium', marginTop:10,color:'red'}}>         
            To pay bill for this order, click confirm button,
             order will be released from this table ({table_number}).</Text>
            

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            


{userData && userData.is_supervisor === true ? (

              
 <View style={globalstyles.ButtonConatiner}>

          <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={() => setModalVisibleProcessOrder(false)} >
                        <Text style={{
                          color:'white',
                          fontFamily:'Light',
                        }}>CLOSE</Text>
                    </TouchableOpacity>


               
                    <TouchableOpacity style={globalstyles.ButtonAdd}  
                    onPress={closeBill} >
                        <Text style={{
                          color:'white',
                          fontFamily:'Light',
                        }}>CONFIRM BILL</Text>
                    </TouchableOpacity>
                    
                 
            </View>
):(

  <Text style={{ marginLeft:10,fontFamily:'Light', }}>You are not allowed to Process Orders</Text>

)}


          </View>
        </View>
      </Modal>








</SafeAreaView>


):(

<LotterViewScreen />

)}

    </>

)}</>
  );
};

const styles = StyleSheet.create({
 
});

export default HotelGuestClosedOrdersDetailScreen;
