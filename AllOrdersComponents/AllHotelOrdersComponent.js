import React, {useEffect, useState} from "react";
import {View,StyleSheet,TextInput, RefreshControl,ScrollView,ActivityIndicator, Modal,TouchableOpacity,Pressable,Image,Text,SafeAreaView, FlatList} from "react-native";
import {globalstyles} from '../Styles/globalstyles';
import axios from "axios";
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
import LotterViewScreen from '../Screens/LotterViewScreen';
import { useNavigation } from '@react-navigation/native';
import { EndPoint } from "../constantComponents/constants";
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';
import {useFonts} from 'expo-font';
const AllHotelOrdersComponent = () => {

// console.log("IDDDDDDDDDDDDDDD");
 // console.log(id);
 // console.log(username);

  const navigation = useNavigation();

const move =() =>{
  setModalVisible(false);
  navigation.navigate('Hotel Reports');
}

// console.log("ID",id);
// console.log("CATEGORY ID", CategoryId);

  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [orders, setOrders] = useState([]);
  const [mainTotalPrice, setMainTotalPrice] = useState(null);
  const [refresh, setRefresh] = useState(false);

//const [isPending, setisPending] = useState(false);
const [isRange, setisRange] = useState(false);



   let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});





//Load more
 // const [queryset, setOrders] = useState([]);
const [current_page, setcurrent_page] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [loading, setLoading] = useState(false);
const [endReached, setEndReached] = useState(false)
const [isPending, setPending] = useState(true);


  

 const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }





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
  // Calculate the main total price whenever orders change
  if (orders.length > 0) {
    const total = orders.reduce((acc, order) => acc + order.total_price, 0);
    setMainTotalPrice(total);
  }
}, [orders]);

const getProducts = () => {
  if (endReached) {
    setLoading(false);
    setIsLoading(false);
    setPending(false);
    return;
  } else {
    setIsLoading(true);
    const url = EndPoint + `/Cart/SeeAllHotelOrders/?page=${current_page}&page_size=2`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.orders.length > 0) {
          setOrders([...orders, ...data.orders]);
          setIsLoading(false);
          setLoading(false);
          setcurrent_page(current_page + 1);
          setPending(false);
        } else {
          setIsLoading(false);
          setEndReached(true);
          setLoading(false);
          setPending(false);
        }
      });
  }
};





 const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="red" />
        </View> : null
    );
  };

  // const loadMoreItem = () => {
  //   setcurrent_page(current_page + 1);
  // };

  useEffect(() => {
    setLoading(true)
    getProducts();
  }, []);

  // const handleScroll = (event) =>{
  //   const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
  //   const scrollEndY = layoutMeasurement.height + contentOffset.y
  //   const contetHeight = contentSize.height

  //   if (scrollEndY >= contetHeight - 50) {
  //     getProducts()
  //   }
  // }






//mwisho wa load more









  const handleFilter = () => {
    // Convert the selected dates to the desired format (e.g., "YYYY-MM-DD")
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    if (!startDate || !endDate) {
      // Check if either startDate or endDate is falsy (null or undefined)
      alert("Please select both start and end dates.");
      return;
    }

    axios
      .get(
        `${EndPoint}/Cart/FilterHotelOrderReport/?startDate=${formattedStartDate}&endDate=${formattedEndDate}`
      )
      .then((response) => {
        const { orders, main_total_price } = response.data;
        setOrders(orders);
        //setisPending(true);
        setModalVisible(false);
        setMainTotalPrice(main_total_price);
        setisRange(true);
        

        // setStartDate('');
        // setEndDate('');
      })
      .catch((error) => {
        console.error("Error fetching filtered data: ", error);
        //setisPending(true);
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




//FOR SEARCHING
const [input, setInput] = useState('');





const ReportCard = ({item, index}) => {

  

     // mwanzo kwa ajili ya search
    if (input === ""){

    return(

     <>
     {item.total_price > 0 && (
        <Pressable 
          // onPress={() => navigation.navigate('View Hotel  Orders', item)}
        
        style={globalstyles.ReportScreencontainer2} >
              
        {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Id: {item.id}</Text>
     </View>

     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     {item.order_status === false ? (
     <Text style=
     {[
      {
        color:'green',
        fontWeight:'bold',
   },globalstyles.ReportScreentitle]}>
     Pending....</Text>
     ):(
    <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="check-square-o" size={20} color={COLORS.white} />
                      
          </View>

     )}
     </View>

            </View>
 {/*    MWISHO */}







   {/*    MWANZO */}
{item.closed_order_state === true && (

           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Status:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={[{
      color:'red',
      fontWeight:'bold'
     },
      globalstyles.ReportScreentitle]}>Closed</Text>
     
     </View>

            </View>)}
 {/*    MWISHO */}






     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Total Price:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Tsh. {formatToThreeDigits(item.total_price)}/=</Text>
     
     </View>

            </View>
 {/*    MWISHO */}





     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Date:</Text>
    
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>{formatToShortDate(item.created)}</Text>

       </View>

            </View>
 {/*    MWISHO */}

 




 {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Table Number:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
      
     <Text style={[{
      color:'green',
      fontWeight:'bold'
     },globalstyles.ReportScreentitle]}>{item.table_number}</Text>
   
     </View>


            </View>
              
 {/*    MWISHO */}







       

       <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={[{
      color:'red',
      fontWeight:'Medium'
     },globalstyles.ReportScreentitle]}>Pay Bill</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
  <TouchableOpacity
   


 >
  <MaterialCommunityIcons
onPress={() => navigation.navigate('Hotel Orders Detail Screen', item)} 
name="gesture-tap-button"
size={30} 
color="green"
style={globalstyles.ClickableIcon}

/>
                  
  </TouchableOpacity>  

       </View>

            </View>

   
  


           
        </Pressable>
    
)}
     </>
   
    )



  // hili bano la chini ni la if ya juu kama mtu akitype   
}







if(item.table_number.toLowerCase().includes(input.toLowerCase())){


  return(

     <>
     {item.total_price > 0 && (
        <Pressable 
          // onPress={() => navigation.navigate('View Hotel  Orders', item)}
        
        style={globalstyles.ReportScreencontainer2} >
              
        {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Id: {item.id}</Text>
     </View>

     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     {item.order_status === false ? (
     <Text style=
     {[
      {
        color:'green',
        fontWeight:'bold',
   },globalstyles.ReportScreentitle]}>
     Pending....</Text>
     ):(
    <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="check-square-o" size={20} color={COLORS.white} />
                      
          </View>

     )}
     </View>

            </View>
 {/*    MWISHO */}







   {/*    MWANZO */}
{item.closed_order_state === true && (

           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Status:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={[{
      color:'red',
      fontWeight:'bold'
     },
      globalstyles.ReportScreentitle]}>Closed</Text>
     
     </View>

            </View>)}
 {/*    MWISHO */}






     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Total Price:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Tsh. {formatToThreeDigits(item.total_price)}/=</Text>
     
     </View>

            </View>
 {/*    MWISHO */}





     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Date:</Text>
    
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>{formatToShortDate(item.created)}</Text>

       </View>

            </View>
 {/*    MWISHO */}

 




 {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Table Number:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
      
     <Text style={[{
      color:'green',
      fontWeight:'bold'
     },globalstyles.ReportScreentitle]}>{item.table_number}</Text>
   
     </View>


            </View>
              
 {/*    MWISHO */}






    


       

       <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={[{
      color:'red',
      fontWeight:'Medium'
     },globalstyles.ReportScreentitle]}>Pay Bill</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
  <TouchableOpacity
   


 >
  <MaterialCommunityIcons
onPress={() => navigation.navigate('Hotel Orders Detail Screen', item)} 
name="gesture-tap-button"
size={30} 
color="green"
style={globalstyles.ClickableIcon}

/>
                  
  </TouchableOpacity>  

       </View>

            </View>

   
  


           
        </Pressable>
    
)}
     </>
   
    )


// hili bano la chini ni la if ya pili mwisho
  }





 // mabano ya chini ni kufunga function ya  Rendered items

}



















  return (

<>{!fontsLoaded ? (<View/>):(
  
     <>
    {!isPending ? (

       <SafeAreaView style={{
            flex:1,
        }}>



  
    










{/*MWANZO WA  REPORT*/}





{/*{orders && orders.length > 0 ? (
 <View>
    <View style={globalstyles.OrderCheckOutContainer}>
      <Text style={[{
        color:'green'
      },globalstyles.CartOrderTotalText]}>Total Amount</Text>
      <Text style={[{
        color:'green'
      },globalstyles.CartOrderTotalPriceText]}>
       Tsh. {formatToThreeDigits(mainTotalPrice)}/=
      </Text>
    </View>
    
  </View>

 ) : ''}  


*/}





 {orders && orders.length > 0 ? (

   <View style={{flex:1,marginBottom:50}}>
               
 <View style={globalstyles.CartListHeaderContainer}>
 

  

  {/*MWANZO WA VIEW YA SEARCH*/}

      <View 
      style={globalstyles.SearchContainer}
      >
        
        <View
          
            
       style={globalstyles.InputContainer}     
            

          >

          <TouchableOpacity>
          {/*<FontAwesome size={20} name="search" />*/}
          
          <TextInput
          style={globalstyles.TextInput}
          value={input} onChangeText ={(text) => setInput(text)}
            
            placeholder="Enter Table Number"
             placeholderTextColor='green'
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}




<Text style={globalstyles.CartListHeader}>All Orders</Text>

  {isRange ? (
  <Text style={globalstyles.ReportRangeText}>
  from {formatDate(startDate)} to {formatDate(endDate)}
  </Text>): ''}

  </View>







 {setLoading===true?(<ActivityIndicator/>):(
      <>
      
      <FlatList
        data={orders}
        renderItem={ReportCard}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderLoader}
        onEndReached={getProducts}
        onEndReachedThreshold={0.5}
      />
      </>
      )}




  </View>







  ) :(
   <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No any report
  
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

   >Check Closed Bills</Text>

</TouchableOpacity>






      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <View style={globalstyles.ModalView}>
            <Text style={globalstyles.ViewOrderModalTitle}>VIEW ORDERS</Text>

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            



               <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={() => setModalVisible(false)} >
                        <Text style={globalstyles.ConfirmCancelButtonText}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={() => navigation.navigate('All Hotel Closed Orders')} >
                        <Text style={globalstyles.ConfirmCancelButtonText}>CONFIRM</Text>
                    </TouchableOpacity>
            </View>




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

export default AllHotelOrdersComponent;
