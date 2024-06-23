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
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFonts} from 'expo-font';
import axios from 'axios';
// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const RetailsWaitersHomeScreen =({route, navigation }) => {
  const { 
    id 
   } = route.params

const CategoryId = id;

let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});

//const navigation = useNavigation();
   const [userToken, setUserToken] = useState('');
   const [userData, setUserData] = useState({});


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
  }, []);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        
        // console.log("USERDATA ARE");
        // console.log(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };



  const [isPending, setIsPending] = useState(true);

   //FOR APIS
// const { datas:queryset,setDatas:setQueryset, isPending, error } = useFetch(EndPoint+'/PostData/PostRetailsWaiters/');

 
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
  navigation.replace('Inventory  ')
}


//kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }

const [myWaiters, setMyWaiters] = useState([]);


  useEffect(() => {
    // Make a GET request to your Django API endpoint
    axios.get(`${EndPoint}/Cart/CountRetailsOrderForEachUser/?CategoryId=${CategoryId}`)
      .then((response) => {
        setMyWaiters(response.data);
        // console.log("DATA")
        setIsPending(false);
      })
      .catch((error) => {
        console.error(error);
         setIsPending(false);
      });
  }, []);








  



//mwisho wa load more









const CartCard = ({item}) => {
  
 if (input === ""){

    return (
      <View style={globalstyles.WaitersitemView}>
           
              <View style={globalstyles.WaitersnameView}>
                <Text style={globalstyles.WaitersnameText}>{item.username} {item.SecondName}</Text>
                <Text style={globalstyles.WaitersText}>Pending Orders: {item._pending_orders}</Text>
                 <Text style={globalstyles.WaitersApprovedText}>Approved Orders: {item._approved_orders}</Text>
              </View>
              
                  <TouchableOpacity
          style={globalstyles.WaitersactionBtn}
          onPress={() => navigation.replace('Retails Products Reports', { ...item, CategoryId })}
        >
    
        <FontAwesome name="eye" size={20} color={COLORS.white} />
  
</TouchableOpacity>
             
            </View>
    );



  // hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.username.toLowerCase().includes(input.toLowerCase())){
   


 return (
      <View style={globalstyles.WaitersitemView}>
           
              <View style={globalstyles.WaitersnameView}>
                <Text style={globalstyles.WaitersnameText}>{item.username} {item.SecondName}</Text>
                <Text style={globalstyles.WaitersText}>Pending Orders: {item._pending_orders}</Text>
                 <Text style={globalstyles.WaitersApprovedText}>Approved Orders: {item._approved_orders}</Text>
              </View>
              
                  <TouchableOpacity
          style={globalstyles.WaitersactionBtn}
          onPress={() => navigation.replace('Retails Products Reports', { ...item, CategoryId })}
        >
    
        <FontAwesome name="eye" size={20} color={COLORS.white} />
  
</TouchableOpacity>
             
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
    







<MinorHeader title="Waiters" pressMe={AddBooked} screenName="Retails Reports"/>





{userData && userData.is_waiter === false ? (

<>



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
            
            placeholder="Search waiter"
          />
          </TouchableOpacity>
        </View>
       
      </View>












{myWaiters && myWaiters.length > 0 ? (


      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={myWaiters}
        renderItem={({item}) => <CartCard item={item} />}
        
      />



) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No any waiter</Text>
</View>


  )} 













</>





):(

 



 <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
      {userData.username && 
         <Text
         style={globalstyles.UnitItemName1} 
         >{userData.username }</Text>}

           
     </View>
       
       <TouchableOpacity
     // onPress={() => navigation.replace('Retails Products Reports', userData.id)} 
     onPress={() => navigation.replace('Retails Products Reports', { ...userData.id, CategoryId })}
      >
        <View 
        style={globalstyles.UnitCartActionButtonText}
        >
         
          <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="eye" size={20} color={COLORS.white} />
                      
          </View>
        
        </View>

</TouchableOpacity>



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






  
export default RetailsWaitersHomeScreen;



const styles = StyleSheet.create({
 
});