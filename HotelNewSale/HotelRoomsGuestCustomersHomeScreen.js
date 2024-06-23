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
  Modal 
} from 'react-native';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LotterViewScreen from '../Screens/LotterViewScreen';

import MinorHeader from '../Headers/MinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import {Picker} from '@react-native-picker/picker';
 import RoomCart from '../CartComponents/RoomCart';
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
 

const HotelRoomsGuestCustomersHomeScreen =({navigation }) => {


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



const AddRoom =() =>{
  
   setModalVisible(true);
}

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;





//FOR APIS
const { datas:rooms,setDatas:setRooms, isPending, error } = useFetch(EndPoint+'/PostData/PostRoomsClasses/');







const [RoomClass, setRoomClass] = useState('');
    const move = (RoomClass) =>{
      setRoomClass(RoomClass);
      
      navigation.navigate('NewSale Rooms ' +RoomClass);
    }







    
      
 


  return (

<>{!fontsLoaded ? (<View/>):(

 <>
    {!isPending ? (





    <View style={globalstyles.AllListcontainer}>


<MinorHeader title="Rooms" pressMe={AddRoom} screenName="Hotel NewSale Rooms" />













 {rooms && rooms.length > 0 ? (




      <FlatList
        data={rooms}
        renderItem={({item, index}) => {

          // mwanzo kwa ajili ya search
    

          return (

             <>
            <TouchableOpacity 
             activeOpacity={1}
             onPress={() => navigation.navigate('All Hotel Guest Rooms', item)}
            >
            <View style={globalstyles.itemView}>

            <View
            style={globalstyles.FoodNameView}

            >
                 <Text style={globalstyles.nameText}>{item.RoomClass}</Text>
               
             </View>
             
                 <View style={globalstyles.priceView}>
                <Text style={globalstyles.UnitText}>
           {item.Unit && item.Unit.Unit  ? item.Unit.Unit : 'Chumba'}
                  </Text>
                   </View>


                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    Qty  
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.Quantity}
                  </Text>
                  
                </View>




            

             
              
            
            </View>
            </TouchableOpacity>

            </>
          );



          // mabano ya chini ni kufunga render item
        }}
      />





 ) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No Data</Text>
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
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD ROOM</Text>

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Room Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Room Name' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Room Class</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='plus-circle'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Room Class' />
                    </View>
                </View>


                 <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Floor Number</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='plus-circle'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Floor Number' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                   
              
                </View>


            </View>

            

          
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text  style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text  style={{
                          color:'white',
                        }}>CONFIRM</Text>
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















  
export default HotelRoomsGuestCustomersHomeScreen;



const styles = StyleSheet.create({


});