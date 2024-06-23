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

import AddMinorHeader from '../Headers/AddMinorHeader';


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
 

const HotelCustomersHomeScreen =({navigation }) => {


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
const { datas:myItems,setDatas:setMyItems, isPending, error } = useFetch(EndPoint+'/PostData/PostHotelCustomers/');



const AddCustomer =() =>{
  
  setModalVisibleAddProduct(true);
}




 




   const [product, setProduct] = useState({
    CustomerFullName: '',
    PhoneNumber: '',
    CustomerAddress: '',
    

  });

 const handleSubmit = () => {
  if (
    product.CustomerFullName.trim() === '' ||
    // product.product_second_name.trim() === '' ||
    product.PhoneNumber.trim() === '' ||
    product.CustomerAddress.trim() === ''
  ) {
    // Validation: Check if any field is empty
    Alert.alert('Error', 'All fields are required');
  } else if (
    isNaN(Number(product.PhoneNumber))
  ) {
    // Validation: Check if PhoneNumber and CustomerAddress are not integers
    Alert.alert('Error', 'Enter valid Phone number');
  } else {
    // Validation passed, make the API request
    
const formData = {
      ...product,
      //productCategory: 'Beers', // Set the value of ProductCategory here
    };
    fetch(EndPoint + '/PostData/PostHotelCustomers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response, maybe navigate to a success screen
        console.log('Customer added:', data);
        Alert.alert('Success', 'Customer added successfully');
        setModalVisibleAddProduct(false);
        // Clear the form after successful submission
        setProduct({
          CustomerFullName: '',
          PhoneNumber: '',
          CustomerAddress: '',
        });

         // Add the newly added product to the productList state
    setMyItems((prevmyItems) => [ data, ...prevmyItems]);

      })
      .catch((error) => {
        // Handle error, maybe show an error message to the user
        
        Alert.alert('Error', 'Failed to add Customer');
      });
  }
};



    
      
 


  return (
    <>{!fontsLoaded ? (<View/>):(

    <>
    {!isPending ? (


    <View style={globalstyles.AllListcontainer}>


<AddMinorHeader title="Customers" pressMe={AddCustomer} screenName="Home Stack" />










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
            
            placeholder="Search customer"
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
              <Image
               source={require('../assets/icon2.png')}
                //source = {item.CustomerImage}
                style={globalstyles.itemImage}
              /></View>
              <View style={globalstyles.nameView}>
                <Text style={globalstyles.CustomernameText}>{item.CustomerFullName} {item.SecondName}</Text>
                <Text style={globalstyles.LastNameText}>{item.PhoneNumber}</Text>

               
            

              </View>
              
              
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.CustomerFullName.toLowerCase().includes(input.toLowerCase())){





  return (

            <View style={globalstyles.itemView}>
            <View style={globalstyles.ImageListContainer}>
              <Image
                source={require('../assets/icon2.png')}
                //source = {item.CustomerImage}
                style={globalstyles.itemImage}
              /></View>
              <View style={globalstyles.nameView}>
                <Text style={globalstyles.nameText}>{item.CustomerFullName} {item.SecondName}</Text>
                <Text style={globalstyles.LastNameText}>{item.PhoneNumber}</Text>

               
            

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








{/*-----------------MODAL FOR ADD PRODUCT---------------*/}



      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleAddProduct}
        onRequestClose={() => setModalVisibleAddProduct(false)}
      >

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD CUSTOMER</Text>
<ScrollView keyboardShouldPersistTaps="handled">
            
           {/* ADD PRODUCT  Form*/}
           
            


{/*mwanzo wa form*/}
     <View style={globalstyles.form}>
               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Customer Full Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Customer Full Name' 
                        onChangeText={(text) =>
          setProduct({ ...product, CustomerFullName: text })
        }
        value={product.CustomerFullName}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}

             


                {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Customer Address</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Customer Address' 
                        onChangeText={(text) =>
          setProduct({ ...product, CustomerAddress: text })
        }
        value={product.CustomerAddress}
      
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                 


                {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Phone Number</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Phone Number' 
                        onChangeText={(text) =>
          setProduct({ ...product, PhoneNumber: text })
        }
        value={product.PhoneNumber}
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























    </View>


    ):(

<LotterViewScreen />

)}

    </>

)}</>

  );
};















  
export default HotelCustomersHomeScreen;



const styles = StyleSheet.create({

 
});