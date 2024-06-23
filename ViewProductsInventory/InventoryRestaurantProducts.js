import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  ActivityIndicator,
  FlatList,
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
  ScrollView,
  Alert
} from 'react-native';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';
import LotterViewScreen from '../Screens/LotterViewScreen';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AddMinorHeader from '../Headers/AddMinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import {Picker} from '@react-native-picker/picker';

import {EndPoint} from '../constantComponents/constants';
// kama unatumia APIS toa hiyo projects prop
import {useFonts} from 'expo-font';

// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const InventoryRestaurantProducts =({route ,navigation }) => {


  const { 
    CategoryName,
    id 
   } = route.params;

const HeaderName = [CategoryName];


   let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});


  //const [isPending, setIsPending] = useState(false);

  //kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }

 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
  


const Add =() =>{
  
   setModalVisibleAddProduct(true);
}

 //const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;







 //FOR APIS
//const { datas:myItems,setDatas:setMyItems, isPending, error } = useFetch(EndPoint+'/PostData/PostRestaurantOtherProducts/');





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
       const url = EndPoint+`/Restaurant/RestaurantProducts/?id=${id}&page=${current_page}&page_size=8` 
       
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


//-----------------TO ADD NEW ITEM------------

// State variable to store the RoomClasses data
  const [productCategories, setProductCategories] = useState([]);
  // State variable to store the selected RoomClass
  const [selectedProductCategory, setSelectedProductCategory] = useState(null);

  // Fetch RoomClasses data from your Django API when the component mounts
  useEffect(() => {
    fetch(`${EndPoint}/PostData/PostRestaurantCategories/`)
      .then((response) => response.json())
      .then((data) => {
        setProductCategories(data);
        
        // Set the default selectedRoomClass if needed
        //setSelectedRoomClass(data[0]); // For example, set the first RoomClass as default
      })
      .catch((error) => {
        console.error('Error fetching Product categories:', error);
      });
  }, []);

   const [product, setProduct] = useState({
    product_name: '',
    product_second_name: '',
    price: '',
    // productCategory: 'Other ',
    ProductQuantity: '',
  });

 const handleSubmit = () => {
  if (
    product.product_name.trim() === '' ||
    // product.product_second_name.trim() === '' ||
    product.price.trim() === '' ||
    product.ProductQuantity.trim() === '' ||
    !selectedProductCategory // Check if a poduct category is selected
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
        productCategory: selectedProductCategory.id, // Pass the RoomClass ID
      };

    fetch(EndPoint + '/PostData/PostAddRestaurantProducts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response, maybe navigate to a success screen
        
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
       
        Alert.alert('Error', 'Failed to add product');
      });
  }
};




    
      
 


  return (

<>{!fontsLoaded ? (<View/>):(
 <>
    {!isPending ? (



    <View style={globalstyles.InventoryAllListcontainer}>


<AddMinorHeader title={HeaderName} pressMe={Add} screenName="Restaurant Inventory " />






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
            
            placeholder="Search "
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}









<View style={globalstyles.CartListHeaderContainer}>
    <Text style={globalstyles.CartListHeader}>{HeaderName}</Text>
    </View>


{queryset && queryset.length > 0 ? (

  <>
    {setLoading===true?(<ActivityIndicator/>):(

      <FlatList
      refreshControl={
        <RefreshControl
        refreshing={refresh}
        onRefresh={() => pullMe()}
        />
       }
      showsVerticalScrollIndicator={false}
        data={queryset}
        ListFooterComponent={renderLoader}
        onEndReached={getProducts}
        onEndReachedThreshold={0.5}

        renderItem={({item, index}) => {

          // mwanzo kwa ajili ya search
    if (input === ""){

          return (
            <View style={globalstyles.InventoryitemView}>
            <View
            style={globalstyles.InventoryFoodNameView}

            >
             <Text style={globalstyles.InventorynameText}>{item.product_name}</Text>
                {item.product_second_name && 
              <Text style={globalstyles.InventorydescText}>{item.product_second_name}</Text>
               }
                
             </View>
             
                

                <View style={globalstyles.InventorypriceView1}>

                <Text style={globalstyles.InventoryUnitText}>
                   {item.Unit && item.Unit.Unit  ? item.Unit.Unit : 'Unit 1'} 
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.price}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Present  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.ProductQuantity}
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView3}>

                <Text style={globalstyles.InventoryUnitText}>
                    Initially  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.InitialProductQuantity ? item.InitialProductQuantity : item.ProductQuantity}
                  </Text>
                  
                </View>
            

              
              
            
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.product_name.toLowerCase().includes(input.toLowerCase())){



 return (
            <View style={globalstyles.InventoryitemView}>
            <View
            style={globalstyles.InventoryFoodNameView}

            >
             <Text style={globalstyles.InventorynameText}>{item.product_name}</Text>
                {item.product_second_name && 
              <Text style={globalstyles.InventorydescText}>{item.product_second_name}</Text>
               }
                
             </View>
             
                

                <View style={globalstyles.InventorypriceView1}>

                <Text style={globalstyles.InventoryUnitText}>
                   {item.Unit && item.Unit.Unit  ? item.Unit.Unit : 'Unit 1'} 
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.price}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Present  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.ProductQuantity}
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView3}>

                <Text style={globalstyles.InventoryUnitText}>
                    Initially  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.InitialProductQuantity ? item.InitialProductQuantity : item.ProductQuantity}
                  </Text>
                  
                </View>
            

              
              
            
             
            </View>
          );





// hili bano la chini ni la if ya pili mwisho
  }


          // mabano ya chini ni kufunga render item
        }}
      />




 )}
    </>

) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No Data</Text>
</View>


  )} 































{/*-----------------MODAL FOR ADD PRODUCT---------------*/}



      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleAddProduct}
        onRequestClose={() => setModalVisibleAddProduct(false)}
      >

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.AddCustomerModalView}>
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





 <View style={{ marginTop: 20 }}>
        

        < View style={globalstyles.inputTax}>
            <Text style={globalstyles.TaxType}>
                 Category
            </Text>

     <View style={globalstyles.picker}>

            
          <Picker
           style={globalstyles.pickerInput}
            selectedValue={selectedProductCategory}
            onValueChange={(itemValue) => setSelectedProductCategory(itemValue)}
          >

            {productCategories.map((x) => (
              <Picker.Item
                key={x.id}
                label={x.CategoryName}
                value={x}
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





















    </View>


      ):(

<LotterViewScreen />

)}

    </>
 

 )}</> 
  );
};















  
export default InventoryRestaurantProducts;



const styles = StyleSheet.create({

});