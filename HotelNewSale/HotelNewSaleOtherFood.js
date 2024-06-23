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
  Modal,
   Button,
  KeyboardAvoidingView
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





const HotelNewSaleOtherFood =({navigation}) => {

 //FOR APIS
//const { datas:myItems,setDatas:setQueryset, isLoa, error } = useFetch(EndPoint+'/PostData/PostHotelOtherFoodProducts/');


   const [product, setProduct] = useState({
    product_name: '',
    product_second_name: '',
    price: '',
    productCategory: 'Other Food',
    ProductQuantity: '',
  });

 const handleSubmit = () => {
  if (
    product.product_name.trim() === '' ||
    // product.product_second_name.trim() === '' ||
    product.price.trim() === '' ||
    product.ProductQuantity.trim() === ''
  ) {
    // Validation: Check if any field is empty
    Alert.alert('Error', 'All fields are required except product second name');
  } else if (
    isNaN(Number(product.price)) ||
    isNaN(Number(product.ProductQuantity))
  ) {
    // Validation: Check if price and ProductQuantity are not integers
    Alert.alert('Error', 'Price and Product Quantity must be valid numbers');
  } else {
    // Validation passed, make the API request
    const formData = {
      ...product,
      productCategory: 'Other Food', // Set the value of ProductCategory here
    };

    fetch(EndPoint + '/PostData/PostHotelOtherFoodProducts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response, maybe navigate to a success screen
        console.log('Product added:', data);
        Alert.alert('Success', 'Product added successfully');
        setModalVisibleAddProduct(false);
        // Clear the form after successful submission
        setProduct({
          product_name: '',
          product_second_name: '',
          price: '',
          ProductQuantity: '',
        });

         // Add the newly added product to the productList state
    setQueryset((prevmyItems) => [ data, ...prevmyItems]);

      })
      .catch((error) => {
        // Handle error, maybe show an error message to the user
        console.error('Error adding product:', error);
        Alert.alert('Error', 'Failed to add product');
      });
  }
};

  //const [isLoa, setisLoa] = useState(false);

  
 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
  


const AddFood =() =>{
  console.log("Food");
   setModalVisibleAddProduct(true);
}

 //const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 // const [myItems, setQueryset] = useState([

 //  {
 //    product_name:'Wali',
 //    Unit:'Sahani 1 1',
 //    product_second_name:'Maharage',
 //    FoodImage:require('../assets/i2.png'),
 //    price:15000,
 //    id:'1'
 //  },

 // {
 //    product_name:'Ugali',
 //    Unit:'Sahani 1 1',
 //    product_second_name:'Maharage',
 //    FoodImage:require('../assets/i3.png'),
 //    price:1000,
 //    id:'2'
 //  },

 //   {
 //    product_name:'Wali',
 //    Unit:'Sahani 1 1',
 //    product_second_name:'Nyama',
 //    FoodImage:require('../assets/i4.png'),
 //    price:4000,
 //    id:'3'
 //  },
 
  
 //     ]);




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
  const [cart, setCart] = useState([]);
  const [userToken, setUserToken] = useState('');
  

  const [isOrderButtonVisible, setIsOrderButtonVisible] = useState(false);
 // const [isOrderPlaced, setIsOrderPlaced] = useState(false);

const [shouldReload, setShouldReload] = useState(false);

const [displayedItemsCount, setDisplayedItemsCount] = useState(cart.length);




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
      return
    }else{
      setIsLoading(true)
       const url = EndPoint+`/Hotel/HotelOtherFoodProducts/?page=${current_page}&page_size=8` 
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







 const [userData, setUserData] = useState({});
    //const [userToken, setUserToken] = useState('');

//--------TO FETCH USER LOGIN DATA AND DISPLAY IN RECEIPT

  // useEffect(() => {
  //   fetchUserData();
  // }, [userData]);

  // const fetchUserData = async () => {
  //   try {
  //     const userDataJSON = await AsyncStorage.getItem('userData');
  //     if (userDataJSON) {
  //       const parsedUserData = JSON.parse(userDataJSON);
  //       setUserData(parsedUserData);
        
  //       console.log(parsedUserData);
  //       console.log(userDataJSON);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

//-------MWISHO -TO FETCH USER LOGIN DATA AND DISPLAY IN RECEIPT








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





// useEffect(() => {
//     checkLoggedIn();
//     // Fetch cart items only if the user is authenticated
//     if (userToken) {
//       fetchCartItems();
//     }

//     // Check if shouldReload is true, and if so, reload the page
//     if (shouldReload) {
//       navigation.replace('Hotel NewSale Pizza');
//       // Reset shouldReload to false to prevent further reloading
//       setShouldReload(false);
//     }


//  // Calculate the number of displayed items
//   const displayedItemsCount = cart.length;

//   // Check if the displayedItemsCount is greater than 1 and show the order button
//   setIsOrderButtonVisible(displayedItemsCount >= 1);


//   }, [userToken, shouldReload, cart]);




 const checkLoggedIn = async () => {
  const token = await AsyncStorage.getItem('userToken');
  setUserToken(token);
  
 
};



const addCartItem = async () => {
  if (!selectedProduct || !quantity) {
    Alert.alert('Error', 'Please enter a quantity of product(s) you want to order');
    return;
  }

  // Check if the selected quantity is greater than available stock
  if (parseInt(quantity) > selectedProduct.ProductQuantity) {
    Alert.alert('Error', 'Not enough quantity in stock');
    return;
  }
navigation.replace('Hotel NewSale Other Food'); 
  // Find the selected product's price
  const productPrice = selectedProduct.price;

  // Calculate the total price for the cart item
  const itemPrice = productPrice * parseInt(quantity);

  setModalVisible(false);
   

  try {
    const response = await axios.post(
      EndPoint + '/Cart/HotelFoodCart/',
      {
        product: selectedProduct.id,
        quantity: parseInt(quantity),

      },
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );
     
     //setShouldReload(true); 
      //navigation.replace('Hotel NewSale Other Food'); 
        
    // Ensure that the response contains the 'id' of the newly added item
    
      // Update the local cart items list with the new item
      const newItem = {
        id: response.data.id, // Use the 'id' from the response data
        product: selectedProduct,
        quantity: parseInt(quantity),
        price: itemPrice,
      };
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);




      // Close the modal and reset the selected product and quantity
      // setModalVisible(false);
      setSelectedProduct(null);
      setQuantity('');

     // Increment the displayedItemsCount
    setDisplayedItemsCount((prevCount) => prevCount + 1);

    // Check if the displayedItemsCount is greater than 1 and show the order button
    // if (displayedItemsCount >= 1) {
    //   setIsOrderButtonVisible(true);
    // }


   
  } catch (error) {
    console.error('Error adding item to cart:', error);
    Alert.alert('Error', 'Failed to add item to cart');
  }
};



const fetchCartItems = async () => {
  try {
    const response = await axios.get(
      EndPoint + '/Cart/HotelFoodCart/',
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );

    // Check if the response data is an empty array (cart is empty)
    if (Array.isArray(response.data) && response.data.length === 0) {
      // Handle the case when the cart is empty here
      console.log("No item in your cart");
      setCart([]); // Set cart to an empty array
    } else {
      // Cart is not empty, update the cart state with the data
      
      setCart(response.data);
       console.log("CART ITEMS");
      // Set isOrderButtonVisible to true after adding an item to the cart
     // Check if the displayedItemsCount is greater than 1 and show the order button
   
      setIsOrderButtonVisible(true);
    


    }
  } catch (error) {
    console.error('Error fetching cart items:', error);
  }
};




const removeCartItem = (cartId) => {
  console.log("CARTID",cartId);

   navigation.replace('Hotel NewSale Other Food'); 
  // Make an API request to delete the item from the cart
  const apiUrl = `${EndPoint}/Cart/HotelFoodDeleteCartItem/?cartId=${cartId}`;
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

         // navigation.replace('Hotel NewSale Other Food');  

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
  //navigation.replace('Hotel NewSale Other Food');
  //call the print Receipt function
     
 
  setIsOrderButtonVisible(false);
  try {
    const response = await axios.post(
      EndPoint + '/Cart/HotelFoodOrder/',
      { total_price: totalCartPrice },
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );
    

    // Clear the cart items from the local state
    setCart([]);

    // Set isOrderPlaced to true to hide the "Make Order" button and total price text
     // Set isOrderButtonVisible to false after placing the order
    
    print();
     printToFile();

    // After a successful order, update your UI or show a confirmation message
    console.log('Order created successfully:', response.data);
    //Alert.alert('Success', 'Order placed successfully!');


    // Optionally, you can navigate to a screen to display the PDF or HTML table.
    // For example, you can set a state variable to control the visibility of a modal.
    //setModalVisibleReceipt(true);


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
        <td>${item.product.product_name} 
      
        ${item?.product.product_second_name}</td>
       
        <td>${item.quantity}</td>
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
          <th>Product Name</th> 
          <th>Quantity Ordered</th>
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
    {cart && item.product && item.product.product_name ? (        
    <Text style={globalstyles.nameText}>{item.product.product_name}</Text>
    ): '' }

    {cart && item.product && item.product.product_second_name ? (
    <Text style={globalstyles.descText}>{item.product.product_second_name}</Text>
    ): '' }

               
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    Quantity: {item.quantity} 
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
            <View key={item.id} style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
              <Text style={globalstyles.nameText}>{item.product_name}</Text>
              {item.product_second_name && 
              <Text style={globalstyles.descText}>{item.product_second_name}</Text>
               }
               
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    {item.unit ? item.Unit : 'Sahani 1'} 
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {formatToThreeDigits(item.price)}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

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





if(item.product_name.toLowerCase().includes(input.toLowerCase()) || item.product_second_name.toLowerCase().includes(input.toLowerCase())){

 return (
            <View key={item.id} style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
              <Text style={globalstyles.nameText}>{item.product_name}</Text>
              {item.product_second_name && 
              <Text style={globalstyles.descText}>{item.product_second_name}</Text>
          }
               
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    {item.unit ? item.Unit : 'Sahani 1'} 
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {formatToThreeDigits(item.price)}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

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


 

    <View style={globalstyles.AllListcontainer}>


<AddMinorHeader title="Food" pressMe={AddFood} screenName="Hotel NewSale Food" />




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
            
            placeholder="Search food"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}


 {Platform.OS === 'ios' &&
        <>
          <View style={styles.spacer} />
          <Button title='Select printer' onPress={selectPrinter} />
          <View style={styles.spacer} />
          {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
        </>
      }






  
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
  <Text style={globalstyles.NoCartItem}>No Item in a cart</Text>
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

    

    <View style={{
      flex:1
    }}>
               
               <View style={globalstyles.CartListHeaderContainer}>
                <Text style={globalstyles.CartListHeader}>Food</Text>
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
  <Text style={globalstyles.NoProductText}>No Product in your stock</Text>
</View>


  )} 













{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ORDER PRODUCT</Text>

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder=' Quantity' 
                        value={quantity}
                  onChangeText={text => setQuantity(text)}
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
          </View>
        </View>
        </KeyboardAvoidingView>
      </Modal>






















{/*-----------------MODAL FOR ADD PRODUCT---------------*/}



      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleAddProduct}
        onRequestClose={() => setModalVisibleAddProduct(false)}
      >
    

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD PRODUCT</Text>
<ScrollView keyboardShouldPersistTaps="handled">
            
           {/* ADD PRODUCT  Form*/}
           
            


{/*mwanzo wa form*/}
     <View style={globalstyles.form}>
               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Name' 
                        onChangeText={(text) =>
          setProduct({ ...product, product_name: text })
        }
        value={product.product_name}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}

               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product Second Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Second Name' 
                        onChangeText={(text) =>
          setProduct({ ...product, product_second_name: text })
        }
        value={product.product_second_name}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product  Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Price' 
                        onChangeText={(text) =>
          setProduct({ ...product, price: text })
        }
        value={product.price}
        keyboardType="numeric" // Set the keyboard type to numeric
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                 


                {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product  Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Quantity' 
                        onChangeText={(text) =>
          setProduct({ ...product, ProductQuantity: text })
        }
        value={product.ProductQuantity}
        keyboardType="numeric" // Set the keyboard type to numeric
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}



               

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












  


 {/*<TouchableOpacity
onPress={() => setModalVisibleReceipt(true)}
style={globalstyles.ReportScreenFilterReportContainer}
 >
    <Text 
    style={globalstyles.ReportScreenFilterReportContainerText}

   >Print Receipt</Text>

</TouchableOpacity>
*/}








{/*MODAL FOR PRINTING*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleReceipt}
        onRequestClose={() => setModalVisibleReceipt(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ORDER RECEIPT</Text>

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            



               <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={printToFile} >
                        <Text style={{
                          color:'white',
                        }}>FILE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={print} >
                        <Text style={{
                          color:'white',
                        }}>PRINT</Text>
                    </TouchableOpacity>
            </View>




          </View>
        </View>
      </Modal>
























 </ScrollView>



    </View>
  






 ):(

<LotterViewScreen />

)}

    </>
  
  
  
    
  );
};















  
export default HotelNewSaleOtherFood;



const styles = StyleSheet.create({

});