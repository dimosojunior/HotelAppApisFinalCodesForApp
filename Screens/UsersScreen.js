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
  Text,
  View,
  Image,
  Animated,
  Modal,
  Pressable,
  Alert,
  ScrollView

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
import {Picker} from '@react-native-picker/picker';
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
 

const UsersScreen =({navigation }) => {


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
  

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 //FOR APIS
const { datas:myItems,setDatas:setMyItems, isPending, error } = useFetch(EndPoint+'/PostData/PostMyUser/');



const AddCustomer =() =>{
  
  setModalVisibleAddProduct(true);
}




 



      
 


  return (
    <>{!fontsLoaded ? (<View/>):(

    <>
    {!isPending ? (


    <View style={globalstyles.AllListcontainer}>


{/*<MinorHeader title="Users" pressMe={AddCustomer} screenName="Home Stack" />

*/}








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
            
            placeholder="Search user"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}










{myItems && myItems.length > 0 ? (


      <FlatList
        data={myItems}
        renderItem={({item, index}) => {

           // mwanzo kwa ajili ya search
    if (input === ""){

          return (

            <View style={globalstyles.itemView}>
            <View style={globalstyles.ImageListContainer}>
            { item.profile_image ? (
              <Image
               //source={require('../assets/icon2.png')}
                source = {{uri: item.profile_image}}
                style={globalstyles.itemImage}
              />
              ):(

              <Image
               source={require('../assets/icon2.png')}
                //source = {{url: item.profile_image}}
                style={globalstyles.itemImage}
              />



              )}


              </View>
              <View style={globalstyles.nameView}>
                <Text style={globalstyles.UsernameText}>{item.username} {item.SecondName}</Text>
                <Text style={globalstyles.LastNameText}> <Text style={{
                  color:'green',
                }}>Status: </Text>
                {item.company_name}</Text>

               
            

              </View>
              
              
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.username.toLowerCase().includes(input.toLowerCase())){



  return (

            <View style={globalstyles.itemView}>
            <View style={globalstyles.ImageListContainer}>
            { item.profile_image ? (
              <Image
               //source={require('../assets/icon2.png')}
                source = {{uri: item.profile_image}}
                style={globalstyles.itemImage}
              />
              ):(

              <Image
               source={require('../assets/icon2.png')}
                //source = {{url: item.profile_image}}
                style={globalstyles.itemImage}
              />



              )}


              </View>
              <View style={globalstyles.nameView}>
                <Text style={globalstyles.UsernameText}>{item.username} {item.SecondName}</Text>
                <Text style={globalstyles.LastNameText}> <Text style={{
                  color:'green',
                }}>Status: </Text>
                {item.company_name}</Text>

               
            

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
  <Text style={globalstyles.NoProductText}>No any customer added</Text>
</View>


  )} 






























    </View>


    ):(

<LotterViewScreen />

)}

    </>

 )}</>

  );
};















  
export default UsersScreen;



const styles = StyleSheet.create({

 
});