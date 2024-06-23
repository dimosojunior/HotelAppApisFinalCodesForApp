import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  Alert,
  ActivityIndicator,
  FlatList,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Animated,
  Modal
} from 'react-native';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LotterViewScreen from '../Screens/LotterViewScreen';

import AddMinorHeader from '../Headers/AddMinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import {Picker} from '@react-native-picker/picker';
import FoodCart from '../CartComponents/FoodCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {EndPoint} from '../constantComponents/constants';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';
// kama unatumia APIS toa hiyo projects prop
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 



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








const AllHotelWalkingRooms =({route, navigation}) => {

    const { 
    RoomClass,
    id 
   } = route.params;

const HeaderName = [RoomClass];
console.log("HEADER NAME",HeaderName);


  // ili uweze kuselect classes kwenye RoomClass 
// ForeignKey Field

 // State variable to store the RoomClasses data
  const [roomClasses, setRoomClasses] = useState([]);
  // State variable to store the selected RoomClass
  const [selectedRoomClass, setSelectedRoomClass] = useState(null);

  // Fetch RoomClasses data from your Django API when the component mounts
  useEffect(() => {
    fetch(`${EndPoint}/PostData/PostRoomsClasses/`)
      .then((response) => response.json())
      .then((data) => {
        setRoomClasses(data);
        console.log("DATA FETCHED SUCCESSFULLY")
        // Set the default selectedRoomClass if needed
        //setSelectedRoomClass(data[0]); // For example, set the first RoomClass as default
      })
      .catch((error) => {
        console.error('Error fetching RoomClasses:', error);
      });
  }, []);



 //FOR APIS
//const { datas:queryset,setDatas:setQueryset, isPending, error } = useFetch(EndPoint+'/PostData/PostHotelRoomsClassA/');

   const [product, setProduct] = useState({
    RoomName: '',
    RoomFloor: '',
    price: '',
    //RoomClass: '',
    //ProductQuantity: '',

  });
const handleSubmit = () => {
    if (
      product.RoomName.trim() === '' ||
      product.price.trim() === '' ||
      product.RoomFloor.trim() === '' ||
      !selectedRoomClass // Check if a RoomClass is selected
    ) {
      Alert.alert('Error', 'All fields are required');
    } else if (isNaN(Number(product.price))) {
      Alert.alert('Error', 'Price must be a valid number');
    } else {
      const formData = {
        ...product,
        RoomClass: selectedRoomClass.id, // Pass the RoomClass ID
      };

      fetch(`${EndPoint}/PostData/PostHotelRooms/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Room added:', data);
          Alert.alert('Success', 'Room added successfully');
          setModalVisibleAddProduct(false);
          setProduct({
            RoomName: '',
            RoomFloor: '',
            price: '',
          });
          setQueryset((prevqueryset) => [data, ...prevqueryset]);
        })
        .catch((error) => {
          console.error('Error adding Room:', error);
          Alert.alert('Error', 'Failed to add Room');
        });
    }
  };




  //const [isPending, setIsPending] = useState(false);

  
 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
  








//Load more
 const [queryset, setQueryset] = useState([]);
const [current_page, setcurrent_page] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [loading, setLoading] = useState(false);
const [endReached, setEndReached] = useState(false)
const [isPending, setPending] = useState(true);


  const getProducts = () => {
    if (endReached===true) {
      setLoading(false)
      setIsLoading(false)
      setPending(false)
      return
    }else{
      setIsLoading(true)
       const url = EndPoint+`/Hotel/HotelRoomsProducts/?id=${id}&page=${current_page}&page_size=8` 
       console.log(url)
       fetch(url)
       .then(res=>res.json())
       .then(data=>{
          if (data.queryset.length > 0) {
            setQueryset([...queryset, ...data.queryset])
            setIsLoading(false)
            setLoading(false)
            setcurrent_page(current_page+1)
            setPending(false)
            
          } else {
            setIsLoading(false)
            setEndReached(true)
            setLoading(false)
            setPending(false)
          }
       })
    }
  
  };



 const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
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

  const handleScroll = (event) =>{
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const scrollEndY = layoutMeasurement.height + contentOffset.y
    const contetHeight = contentSize.height

    if (scrollEndY >= contetHeight - 50) {
      getProducts()
    }
  }






//mwisho wa load more














const AddRoom =() =>{
  console.log("Food");
   setModalVisibleAddProduct(true);
}

 //const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 //kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }



// const [input, setInput] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [quantity, setQuantity] = useState('');
  const [CustomerFullName, setCustomerFullName] = useState('');
  const [CustomerAddress, setCustomerAddress] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [DaysNumber, setDaysNumber] = useState('');

  const [cart, setCart] = useState([]);
  const [userToken, setUserToken] = useState('');
  

  const [isOrderButtonVisible, setIsOrderButtonVisible] = useState(false);
 // const [isOrderPlaced, setIsOrderPlaced] = useState(false);
const [shouldReload, setShouldReload] = useState(false);

const [displayedItemsCount, setDisplayedItemsCount] = useState(cart.length);


 useEffect(() => {
  checkLoggedIn();
  // Fetch cart items only if the user is authenticated
  if (userToken) {
    fetchCartItems();
  }
 

}, [userToken]);



 useEffect(() => {


  // Calculate the number of displayed items
  const displayedItemsCount = cart.length;
 if (displayedItemsCount >= 1) {
      setIsOrderButtonVisible(true);
    }
 
}, [cart]);



 const checkLoggedIn = async () => {
  const token = await AsyncStorage.getItem('userToken');
  setUserToken(token);
  
 
};

 const fetchCartItems = async () => {
  try {
    const response = await axios.get(
      EndPoint + '/Cart/HotelRoomsCart/',
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );

    // Check if the response data is an empty array (cart is empty)
    if (Array.isArray(response.data) && response.data.length === 0) {
      // Handle the case when the cart is empty here
      console.log("No room in your cart");
      setCart([]); // Set cart to an empty array
    } else {
      // Cart is not empty, update the cart state with the data
      setCart(response.data);
      // Set isOrderButtonVisible to true after adding an item to the cart
    setIsOrderButtonVisible(true);
    }
  } catch (error) {
    console.error('Error fetching rooms:', error);
  }
};



const addCartItem = async () => {
  if (!selectedProduct || !CustomerFullName || !PhoneNumber || !CustomerAddress || !DaysNumber) {
    Alert.alert('Error', 'Please all fields are required');
    return;
  }

  // Check if the selected quantity is greater than available stock
  if (selectedProduct.ProductQuantity !== 1) {
    Alert.alert('Sorry, this room is not available');
    return;
  }

navigation.replace('Hotel Rooms', { id });  

  // Find the selected product's price
  const productPrice = selectedProduct.price; // Modify this to match your data structure

  // Calculate the total price for the cart item
  const itemPrice = productPrice * parseInt(DaysNumber);



  try {
    const response = await axios.post(


      EndPoint + '/Cart/HotelRoomsCart/',
      {
        room: selectedProduct.id,
        // quantity: parseInt(quantity),
        DaysNumber: parseInt(DaysNumber),
        CustomerFullName: CustomerFullName,
        PhoneNumber: PhoneNumber,
        CustomerAddress: CustomerAddress,
      },
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );


 

    // If the API call succeeds, replace the temporary ID with the real one
    const newItem = {
      id: response.data.id,
      room: selectedProduct,
      // quantity: parseInt(quantity),
      DaysNumber: parseInt(DaysNumber),
      CustomerFullName: CustomerFullName,
      PhoneNumber: PhoneNumber,
      CustomerAddress: CustomerAddress,
      price: itemPrice, // Update the price based on the quantity
    };



    // Update the local cart items list with the new item
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);

    // Update the local room data
    const updatedRooms = queryset.map((item) => {
      if (item.id === selectedProduct.id) {
        // Decrease the ProductQuantity by 1
        item.ProductQuantity -= 1;
      }
      return item;
    });

    // Update the state with the updated room data
    setQueryset(updatedRooms);

    // Close the modal and reset the selected product and quantity
    setModalVisible(false);
    setSelectedProduct(null);
    // setQuantity('');
    setCustomerFullName('');
    setCustomerAddress('');
    setDaysNumber('');
    setPhoneNumber('');
    

     // Set isOrderButtonVisible to true after adding an item to the cart
    //setIsOrderButtonVisible(true);
    // Increment the displayedItemsCount
    setDisplayedItemsCount((prevCount) => prevCount + 1);
    

  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
};


const removeCartItem = (cartId) => {
  console.log("CARTID",cartId);
  navigation.replace('Hotel Rooms', { id });  
  // Make an API request to delete the item from the cart
  const apiUrl = `${EndPoint}/Cart/HotelRoomsDeleteCartItem/?cartId=${cartId}`;
  console.log("URL",apiUrl);
  
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
        setCart(cart.filter((item) => item.id !== cartId));
         //setIsOrderButtonVisible(false);
         //Alert.alert('item is removed successfully from your cart');

          

           // Decrement the displayedItemsCount
      setDisplayedItemsCount((prevCount) => prevCount - 1);

      // Check if the displayedItemsCount is less than or equal to 1 and hide the order button
       // Check if the displayedItemsCount is less than or equal to 1 and hide the order button
        if (displayedItemsCount < 1) {
      setIsOrderButtonVisible(false);
    }


      } 
      else {
        // Handle the error if the item couldn't be removed
        console.error('Failed to remove item from cart:', response);
        Alert.alert('Error', 'Failed to remove item from cart');
      }
    })
    .catch((error) => {
      console.error('Error removing item from cart:', error);
      // Handle the error here, for example, show a user-friendly error message
      Alert.alert('Error', 'Failed to remove item from cart');
    });
};






const calculateTotalPrice = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  return total;
};

const totalCartPrice = calculateTotalPrice();




const makeOrder = async () => {

   navigation.replace('Hotel Rooms', { id }); 
   
  try {
    const response = await axios.post(
      EndPoint + '/Cart/HotelRoomsOrder/',
      { total_price: totalCartPrice },
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );

    // Clear the cart items from the local state, don't show the cart item
    setCart([]);
    
    
    // Set isOrderPlaced to true to hide the "Make Order" button and total price text
     // Set isOrderButtonVisible to false after placing the order
    setIsOrderButtonVisible(false);;

    // After a successful order, update your UI or show a confirmation message
    console.log('Order created successfully:', response.data);
    Alert.alert('Success', 'Order placed successfully!');


    //TO enable the orderedroom to disapper without refreshing the page

    // Fetch the updated list of available rooms and update the state
    // const updatedRoomsResponse = await axios.get(
    //   EndPoint+`/Hotel/HotelRoomsProducts/?id=${id}&page=${current_page}&page_size=8`
    // );
    // const updatedRoomsResponse = await axios.get(
    //   EndPoint+`/Hotel/HotelRoomsProducts/?id=${id}&page=${current_page}&page_size=8`
    // );

    // Set the updated list of rooms in your state (queryset)
    //setQueryset(updatedRoomsResponse.data);
   
    // print();
    //  printToFile();





  } catch (error) {
    console.error('Error creating order:', error);
  }
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







//----------------PRINTING RECEIPT-----------------

 const [selectedPrinter, setSelectedPrinter] = React.useState();
 const [order, setOrder] = useState([]);
 const [modalVisibleReceipt, setModalVisibleReceipt] = useState(false);






  const print = async () => {
    //setModalVisibleReceipt(false);
    console.log("DATA PRINTED");
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
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }

  // const array = [
  //   { product_name: "Wali maharage", price: 25000, quantity: 1, id:1 },
  //   { product_name: "Wali nazi", price: 3000, quantity: 2, id:2},
  //   { product_name: "Wali samaki", price: 2400, quantity: 4, id:3 },
  //   { product_name: "Chipsi yai", price: 10000, quantity: 2, id:4 },
  //   { product_name: "sambusa Nyama", price: 70000, quantity: 1, id:5 },
  //   { product_name: "Chipsi Kuku", price:32000, quantity: 5, id:6 },
  // ]
  const createDynamicTable = () => {
    var table = '';
    for (let i in cart) {
      const item = cart[i];
      table = table + `
      <tr>
        <td>${item.id}</td>
        <td>${item.CustomerFullName} 
      
        
       
        <td>${item.CustomerAddress}</td>
        <td>${item.PhoneNumber}</td>
        <td>${item.DaysNumber}</td>
         <td>${item.price}</td>
        
      </tr>
      `
    }
    console.log(table);
    console.log(totalCartPrice);
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
          color:green;
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
      </style>
      </head>
      <body>

        <h1>EASY-FIX</h1>
       




      
      <h2>Receipt</h2>
      
      <table>
        <tr>
          <th>ID</th>
          <th>Customer Full Name</th> 
          
          <th>Customer Address</th>
          <th>Phone Number</th>
          <th>Number of Days</th>
          <th>Total Price</th>
          
        </tr>
        ${table}
      </table>



      <div id="totalCartPrice">

      <h3>Total Order Price: ${totalCartPrice}/=</h3>
      </div>
      
      </body>
    </html>
      `;
    return html;
  }





















 


  const CartCard = ({item}) => {
  



 return (
            <View style={globalstyles.CartitemView} >
            <View
            style={globalstyles.FoodNameView}

            >
    {cart && item.room && item.room.RoomName ? (        
    <Text style={globalstyles.nameText}>{item.room.RoomName}</Text>
    ): '' }

  

               
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    Total Price 
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {formatToThreeDigits(item.price)}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

                <TouchableOpacity
              onPress={() => removeCartItem(item.id)}
              //onPress={removeCartItem}

               >
                <MaterialCommunityIcons 
    name="delete"
     size={30} 
     color="red"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>




                
             </View>   
             
            </View>
          );
}





const RenderedItems =({item}) =>{

     // mwanzo kwa ajili ya search
    if (input === ""){

          return (
            <View style={globalstyles.InventoryitemView}>
            <View
            style={globalstyles.InventoryFoodNameView}

            >
             <Text style={globalstyles.InventorynameText}>{item.RoomName}</Text>
              
                
             </View>
             
                

                <View style={globalstyles.InventorypriceView1}>

                <Text style={globalstyles.InventoryUnitText}>
                    Price  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {formatToThreeDigits(item.price)}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Floor  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.RoomFloor}
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView3}>

                   <TouchableOpacity
                 onPress={() => {
                setSelectedProduct(item);
                setModalVisible(true);
              }}

               >
                <MaterialCommunityIcons 
    name="gesture-tap-button"
     size={30} 
     color="green"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>
                  
                </View>
            

              
              
            
             
            </View>
          );



  // hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.RoomName.toLowerCase().includes(input.toLowerCase())){
  return (
            <View style={globalstyles.InventoryitemView}>
            <View
            style={globalstyles.InventoryFoodNameView}

            >
             <Text style={globalstyles.InventorynameText}>{item.RoomName}</Text>
              
                
             </View>
             
                

                <View style={globalstyles.InventorypriceView1}>

                <Text style={globalstyles.InventoryUnitText}>
                    Price  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {formatToThreeDigits(item.price)}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Floor  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.RoomFloor}
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView3}>

                   <TouchableOpacity
                 onPress={() => {
                setSelectedProduct(item);
                setModalVisible(true);
              }}

               >
                <MaterialCommunityIcons 
    name="gesture-tap-button"
     size={30} 
     color="green"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>
                  
                </View>
            

              
              
            
             
            </View>
          );



// hili bano la chini ni la if ya pili mwisho
  }


 // mabano ya chini ni kufunga function ya  Rendered items
}







  return (
    
     <>
    {!isPending ? (


     <View style={[

      globalstyles.AllListcontainer, modalVisible&&{backgroundColor:"rgba(0, 0, 0, 0.2)"}]}>


<AddMinorHeader title={HeaderName} pressMe={AddRoom} screenName="Hotel Rooms Walking Customers" />

<ScrollView
keyboardShouldPersistTaps="handled" 
refreshControl={
        <RefreshControl
        refreshing={refresh}
        onRefresh={() => pullMe()}
        />
       }
      showsVerticalScrollIndicator={false}
       
 onScroll={handleScroll} scrollEventThrottle={16}
      >




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
            
            placeholder="Search room"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}







  
   {cart && cart.length > 0 ? (


<View>
                       
               <View style={globalstyles.CartListHeaderContainer}>
              <Text style={globalstyles.CartListHeader}>Cart Items</Text>
              </View>

                 

                  {cart.map((item, index) => {
                    return <CartCard item={item} key={item.id || index} />;
                  })}
 </View>



   ) :(
   <View style={globalstyles.NoCartItemContainer}>
  <Text style={globalstyles.NoCartItem}>No room in a cart</Text>
</View>

  )}  

              
{/*mwanzo wa make order*/}
                         
{isOrderButtonVisible &&  (
  <View>
    <View style={globalstyles.OrderCheckOutContainer}>
      <Text style={globalstyles.CartOrderTotalText}>Total Price</Text>
      <Text style={globalstyles.CartOrderTotalPriceText}>
        Tsh. {formatToThreeDigits(totalCartPrice)}/=
      </Text>
    </View>
    <View style={{ marginHorizontal: 30 }}>
      <TouchableOpacity
        onPress={makeOrder}
        style={globalstyles.MakeOrderButtonContainer}
      >
        <Text style={globalstyles.MakeOrderButton}>Make order</Text>
      </TouchableOpacity>
    </View>
  </View>
)}



{/*mwisho wa make order*/}





     

          
     {queryset && queryset.length > 0 ? (

    

    <View >
               
               <View style={globalstyles.CartListHeaderContainer}>
                <Text style={globalstyles.CartListHeader}>Rooms</Text>
                </View>
   {setLoading===true?(<ActivityIndicator/>):(

   <>


    {queryset.map((item, index) => {
      return <RenderedItems item={item} key={item.id || index} />;
    })}
    {isLoading&&(<ActivityIndicator/>)}
</>
)}
  </View>

   ) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No room is empty</Text>
</View>


  )} 













{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ORDER PRODUCT</Text>

            <ScrollView keyboardShouldPersistTaps="handled">

<View style={globalstyles.form}>
                 
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Customer Full Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder=' Customer Full Name' 
                        value={CustomerFullName}
                  onChangeText={text => setCustomerFullName(text)}
                  
                        />
                    </View>
                </View>


                 
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Customer Address</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder=' Customer Address' 
                        value={CustomerAddress}
                  onChangeText={text => setCustomerAddress(text)}
                  
                        />
                    </View>
                </View>



                 
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Phone Number</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder=' Phone Number' 
                        value={PhoneNumber}
                  onChangeText={text => setPhoneNumber(text)}
                  keyboardType="numeric"
                  
                        />
                    </View>
                </View>



                 
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Number of Days</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder=' Number of Days' 
                        value={DaysNumber}
                  onChangeText={text => setDaysNumber(text)}
                  keyboardType="numeric"
                  
                        />
                    </View>
                </View>





            
               




               

                <View  style={{ marginTop:20 }}>
                   
             
                </View>


            </View>

          
            

            <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={addCartItem} >
                        <Text style={{
                          color:'white',
                        }}>CONFIRM</Text>
                    </TouchableOpacity>
            </View>

            </ScrollView>
          </View>
        </View>
      </Modal>






















{/*-----------------MODAL FOR ADD PRODUCT---------------*/}



      
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisibleAddProduct}
        onRequestClose={() => setModalVisibleAddProduct(false)}
      >

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD ROOM</Text>
<ScrollView keyboardShouldPersistTaps="handled">
            
           {/* ADD PRODUCT  Form*/}
           
            


{/*mwanzo wa form*/}
     <View style={globalstyles.form}>
               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Room Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Room Name' 
                        onChangeText={(text) =>
          setProduct({ ...product, RoomName: text })
        }
        value={product.RoomName}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}

               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Room Floor</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Room Floor' 
                        onChangeText={(text) =>
          setProduct({ ...product, RoomFloor: text })
        }
        value={product.RoomFloor}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Room  Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Room Price' 
                        onChangeText={(text) =>
          setProduct({ ...product, price: text })
        }
        value={product.price}
        keyboardType="numeric" // Set the keyboard type to numeric
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                 





 <View style={{ marginTop: 20 }}>
        

        < View style={globalstyles.inputTax}>
            <Text style={globalstyles.TaxType}>
                Room Class
            </Text>

     <View style={globalstyles.picker}>

            
          <Picker
           style={globalstyles.pickerInput}
            selectedValue={selectedRoomClass}
            onValueChange={(itemValue) => setSelectedRoomClass(itemValue)}
          >

            {roomClasses.map((roomClass) => (
              <Picker.Item
                key={roomClass.id}
                label={roomClass.RoomClass}
                value={roomClass}
              />
            ))}
          </Picker>

         </View>
          
            
          
        
    </View>








      </View>
{/*mwisho wa view ya margin 20*/}











               



               

                <View  style={{ marginTop:20 }}>
                   
             
                </View>


            </View>
{/*mwisho wa form*/}
          
  <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={() => setModalVisibleAddProduct(false)} >
                        <Text style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={handleSubmit} >
                        <Text style={{
                          color:'white',
                        }}>CONFIRM</Text>
                    </TouchableOpacity>
            </View>

{/*MWISHO WA ADD PRODUCT FORM*/}
</ScrollView>
          </View>


        </View>

      </Modal>





{/*MODAL FOR PRINTING*/}

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisibleReceipt}
        onRequestClose={() => setModalVisibleReceipt(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>VIEW ORDER</Text>

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            



               <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={() => setModalVisibleReceipt(false)} >
                        <Text style={{
                          color:'white',
                        }}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={() => navigation.navigate('Rooms Hotel Waiters')} >
                        <Text style={{
                          color:'white',
                        }}>CONFIRM</Text>
                    </TouchableOpacity>
            </View>




          </View>
        </View>
      </Modal>








  </ScrollView>





<TouchableOpacity
onPress={() => setModalVisibleReceipt(true)}
style={globalstyles.ReportScreenFilterReportContainer}
 >
    <Text 
    style={globalstyles.ReportScreenFilterReportContainerText}

   >View Order</Text>

</TouchableOpacity>










    </View>
  







  ):(

<LotterViewScreen />

)}

    </>
  
    
  );
};















  
export default AllHotelWalkingRooms;



const styles = StyleSheet.create({

});