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
  Modal ,
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
 import RoomCart from '../CartComponents/RoomCart';
 import {EndPoint} from '../constantComponents/constants';
import {useFonts} from 'expo-font';
// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const InventoryHotelRooms =({route, navigation }) => {


  //const [isPending, setIsPending] = useState(false);

  let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});

 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();



const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
  


const AddRoom =() =>{
  
   setModalVisibleAddProduct(true);
}

// const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;





    const { 
    RoomClass,
    id 
   } = route.params;

const HeaderName = [RoomClass];



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

      fetch(`${EndPoint}/PostData/PostAddHotelRooms/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
         
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
          
          Alert.alert('Error', 'Failed to add Room');
        });
    }
  };








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


    
      
 


  return (

<>{!fontsLoaded ? (<View/>):(
 <>
    {!isPending ? (





    <View style={globalstyles.AllListcontainer}>


<AddMinorHeader title={HeaderName} pressMe={AddRoom} screenName="Hotel UnBookedRooms All Classes" />






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







{/*<TouchableOpacity 
         onPress={() => navigation.navigate('Hotel Class A Booked Rooms')}>
          <View style={globalstyles.BookedUnitactionBtn}>
            <Text style={{
              color:'white',
              fontWeight:'bold',


            }}>Class A Booked Rooms</Text> 

          </View>
          </TouchableOpacity>*/}



  <View style={globalstyles.CartListHeaderContainer}>
    <Text style={globalstyles.CartListHeader}>{HeaderName}</Text>
    </View>





{queryset && queryset.length > 0 ? (
      <FlatList
        data={queryset}
        renderItem={({item, index}) => {

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
                    {item.price}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Floor Number  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.RoomFloor}
                  </Text>
                  
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
                    {item.price}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Floor Number  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.RoomFloor}
                  </Text>
                  
                </View>




               

              
              
            
             
            </View>
          );






// hili bano la chini ni la if ya pili mwisho
  }


          // mabano ya chini ni kufunga render item
        }}
      />





) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No any room added</Text>
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
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD ROOM</Text>
<ScrollView keyboardShouldPersistTaps="handled" >
            
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























    </View>


      ):(

<LotterViewScreen />

)}

    </>

)}</>

    
  );
};















  
export default InventoryHotelRooms;



const styles = StyleSheet.create({


});