import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';

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
import {EndPoint} from '../constantComponents/constants';
import LotterViewScreen from '../Screens/LotterViewScreen';
// kama unatumia APIS toa hiyo projects prop
import {useFonts} from 'expo-font';

// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const HotelNewSaleOtherNewSaleHomeScreen =({navigation }) => {

   let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});



 // const [isPending, setIsPending] = useState(false);

   //FOR APIS
const { datas:productsUnit,setDatas:setProductsUnit, isPending, error } = useFetch(EndPoint+'/PostData/PostHotelProductsUnit/');

 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);
const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();



 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 

const AddOther =() =>{
  
  setModalVisible(true);
}


//kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }





const CartCard = ({item}) => {
  if (input === ""){

    return (
      <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
         <Text
         style={globalstyles.UnitItemName1} 
         >{item.Unit }</Text>
         
     </View>
       
       {item.Description && (
        <View
        style={globalstyles.UnitCartContainerCOntainer2}

         >
         
       
          <Text 
          style={globalstyles.UnitCartPriceTextUnit} 
          >{item.Description}</Text>
        </View>
         )}


        {/*<View 
        style={globalstyles.UnitCartActionButtonText}
        >
         <TouchableOpacity 
         onPress={AddOther}>
          <View style={globalstyles.UnitactionBtn}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
            }}>Change</Text>           
          </View>
          </TouchableOpacity>
        </View>*/}



      </View>
    );



    // hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.Unit.toLowerCase().includes(input.toLowerCase())){




 return (
      <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
         <Text
         style={globalstyles.UnitItemName1} 
         >{item.Unit }</Text>
         
     </View>
       
       {item.Description && (
        <View
        style={globalstyles.UnitCartContainerCOntainer2}

         >
         
       
          <Text 
          style={globalstyles.UnitCartPriceTextUnit} 
          >{item.Description}</Text>
        </View>
         )}


        {/*<View 
        style={globalstyles.UnitCartActionButtonText}
        >
         <TouchableOpacity 
         onPress={AddOther}>
          <View style={globalstyles.UnitactionBtn}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
            }}>Change</Text>           
          </View>
          </TouchableOpacity>
        </View>*/}



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
    







<MinorHeader title="Units" pressMe={AddOther} screenName="Hotel NewSale"/>











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
            
            placeholder="Search  unit"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}











      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={productsUnit}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
          
          </View>
        )}
      />










{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>UPDATE PRODUCT UNIT</Text>

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>New Product Unit</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='New Product Unit' />
                    </View>
                </View>

                

                <View  style={{ marginTop:20 }}>
                   
                             </View>


            </View>

            

            
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text style={{
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






  
export default HotelNewSaleOtherNewSaleHomeScreen;



const styles = StyleSheet.create({
 
});