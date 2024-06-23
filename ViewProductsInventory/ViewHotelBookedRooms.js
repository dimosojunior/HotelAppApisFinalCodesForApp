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

import MinorHeader from '../Headers/MinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
 import ProductUnitComponent from '../CartComponents/ProductUnitComponent';
import {Picker} from '@react-native-picker/picker';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';
// kama unatumia APIS toa hiyo projects prop
import {EndPoint} from '../constantComponents/constants';
import {useFonts} from 'expo-font';
// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const ViewHotelBookedRooms =({route, navigation }) => {


  const { 
    RoomClass,
    id 
   } = route.params;

const HeaderName = [RoomClass];




  let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});





  //const [isPending, setIsPending] = useState(false);

   //FOR APIS
//const { datas:myItems,setDatas:setMyItems, isPending, error } = useFetch(EndPoint+'/PostData/PostHotelBookedRoomsClassA/');

 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);
const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();



 //const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;




// Define a function to format the date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};


 

const AddBooked =() =>{
  
  setModalVisible(true);
}

const ClickToAddBookedRoom =() =>{
  setModalVisible(false);
  navigation.navigate('Inventory Rooms Rooms')
}


//kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }










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
       const url = EndPoint+`/Hotel/HotelBookedRoomsProducts/?id=${id}&page=${current_page}&page_size=8` 
       
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









const CartCard = ({item}) => {
  if (input === ""){

    return (
      <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
         <Text
         style={globalstyles.UnitItemName1} 
         >{item.RoomName }</Text>

         <Text
         style={globalstyles.UnitItemName2} 
         >{formatDate(item.Updated)}</Text>
         
     </View>
       
        <View
        style={globalstyles.UnitCartContainerCOntainer2}

         >
         <Text 
          style={globalstyles.UnitCartPriceText} 
          >Floor</Text>
       
          <Text 
          style={globalstyles.UnitCartPriceTextUnit} 
          >{item.RoomFloor}</Text>
        </View>
        <View 
        style={globalstyles.UnitCartActionButtonText}
        >
         
          <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="check-square-o" size={20} color={COLORS.white} />
                      
          </View>
        
        </View>
      </View>
    );



    // hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.RoomName.toLowerCase().includes(input.toLowerCase())){



    return (
      <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
         <Text
         style={globalstyles.UnitItemName1} 
         >{item.RoomName }</Text>

         <Text
         style={globalstyles.UnitItemName2} 
         >{formatDate(item.Updated)}</Text>
         
     </View>
       
        <View
        style={globalstyles.UnitCartContainerCOntainer2}

         >
         <Text 
          style={globalstyles.UnitCartPriceText} 
          >Floor</Text>
       
          <Text 
          style={globalstyles.UnitCartPriceTextUnit} 
          >{item.RoomFloor}</Text>
        </View>
        <View 
        style={globalstyles.UnitCartActionButtonText}
        >
         
          <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="check-square-o" size={20} color={COLORS.white} />
                      
          </View>
        
        </View>
      </View>
    );



// hili bano la chini ni la if ya pili mwisho
  }


          // mabano ya chini ni kufunga render item
  };



    
      
 return (


<>{!fontsLoaded ? (<View/>):(
  <>
    {!isPending ? (


    <View style={globalstyles.container}>
    







<MinorHeader title={HeaderName} pressMe={AddBooked} screenName="Hotel BookedRooms All Classes"/>











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








{queryset && queryset.length > 0 ? (


      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={queryset}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
          
          </View>
        )}
      />



) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No any Booked Room</Text>
</View>


  )} 







{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD BOOKED ROOM</Text>

            <View style={globalstyles.form}>
               

                

               

            </View>

            

            
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white'
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={ClickToAddBookedRoom} >
                        <Text style={{
                          color:'white'
                        }}>CLICK TO ADD</Text>
                    </Pressable>
            </View>
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






  
export default ViewHotelBookedRooms;



const styles = StyleSheet.create({
 
});