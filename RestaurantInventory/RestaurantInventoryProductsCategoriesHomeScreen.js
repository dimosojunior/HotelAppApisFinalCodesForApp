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
import FoodCart from '../CartComponents/FoodCart';
import {EndPoint} from '../constantComponents/constants';
import {useFonts} from 'expo-font';
import axios from 'axios';
// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const RestaurantInventoryProductsCategoriesHomeScreen =({route, navigation }) => {

const { 
    id,
    Category 
   } = route.params


  const [isPending, setIsPending] = useState(true);
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
  



    

const AddFood =() =>{
  
   setModalVisibleAddProduct(true);
}

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;





 //FOR APIS
//const { datas:queryset,setDatas:setqueryset, isPending, error } = useFetch(`${EndPoint}'/PostData/PostRestaurantCategories/`);







const [queryset, setQueryset] = useState(null);


 

 useEffect(() => {
    // Make a GET request to fetch queryset and main total price
   
    const url = `${EndPoint}/Restaurant/AllRestaurantCategories/?id=${id}`;
    //const url = `${EndPoint}/PostData/PostRestaurantCategories/`;
    axios.get(url)


      .then((response) => {
        
        console.log(response.data);
        const { queryset } = response.data;
        setIsPending(false);
        setQueryset(queryset);
        
        console.log("DATA DATAaaa");
        console.log(url)
        
        
      })
      .catch((error) => {
        
        setIsPending(false);
        console.log("Error", error);
      });
  }, []);

  






    
      
 


  return (

    <>{!fontsLoaded ? (<View/>):(

      
     <>
    {!isPending ? (

    <View style={globalstyles.AllListcontainer}>


<MinorHeader title={Category} pressMe={AddFood} screenName="Restaurant Inventory" />

















 {queryset && queryset.length > 0 ? (
      <FlatList
        data={queryset}
        renderItem={({item, index}) => {

        
          return (
           <>
            <TouchableOpacity 
             activeOpacity={1}
             onPress={() => navigation.navigate('Restaurant Inventory Products', item)}
            >
            <View style={globalstyles.itemView}>

             {item.CategoryImage && (

                <View style={globalstyles.ImageListContainer}>
              <Image
               //source={require('../assets/icon2.png')}
               source={{uri: EndPoint + '/' + item.CategoryImage}}
                style={globalstyles.itemImage}
              />
              </View>

              )}
             
            <View
            style={globalstyles.FoodNameView}

            >
                       <Text style={globalstyles.nameText}>{item.CategoryName}</Text>
                
             </View>
             

              <View style={globalstyles.priceView}>
                <Text style={globalstyles.UnitText}>
                  {item.Unit && item.Unit.Unit  ? item.Unit.Unit : 'Unit 1'} 
                  </Text>
                   </View>
             
                

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    Qty  
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.Store}
                  </Text>
                  
                </View>
            
           
              
              
            
             
            </View>
            </TouchableOpacity >
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

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Name' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='plus-circle'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Price' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                   
             {/*EMPTY NOW*/}
                </View>


            </View>

            

           
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisibleAddProduct(false)} >
                        <Text  style={{
                          color:'white'
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisibleAddProduct(false)} >
                        <Text  style={{
                          color:'white'
                        }}>ADD PRODUCT</Text>
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















  
export default RestaurantInventoryProductsCategoriesHomeScreen;



const styles = StyleSheet.create({

});